import { useRef, useEffect, useCallback } from 'react'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'

function typesetMathJax(element) {
  if (window.MathJax && window.MathJax.typesetPromise) {
    return window.MathJax.typesetPromise([element]).catch((err) =>
      console.warn("MathJax typeset error:", err)
    )
  }
  return Promise.resolve()
}

function parseContent(content) {
  const segments = []
  const regex = /(\$\$[\s\S]*?\$\$|\$(?!\$)(?:[^$\\]|\\.)+?\$)/g
  let lastIndex = 0
  let match

  while ((match = regex.exec(content)) !== null) {
    if (match.index > lastIndex) {
      segments.push({ type: 'text', value: content.slice(lastIndex, match.index) })
    }
    const raw = match[0]
    const isBlock = raw.startsWith('$$')
    const math = isBlock ? raw.slice(2, -2).trim() : raw.slice(1, -1).trim()
    segments.push({ type: 'math', value: math, display: isBlock })
    lastIndex = match.index + raw.length
  }

  if (lastIndex < content.length) {
    segments.push({ type: 'text', value: content.slice(lastIndex) })
  }

  return segments
}

export default function MarkdownRenderer({ content }) {
  const containerRef = useRef(null)

  const renderMath = useCallback(() => {
    if (containerRef.current) {
      typesetMathJax(containerRef.current)
    }
  }, [])

  useEffect(() => {
    renderMath()
  }, [content, renderMath])

  const segments = parseContent(content)

  return (
    <div
      ref={containerRef}
      className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground leading-relaxed
                    prose-p:mb-4 prose-p:mt-2
                    prose-ul:my-4 prose-li:my-1
                    prose-strong:text-foreground
                    /* Custom math block styling */
                    [&_.MathJax]:bg-muted/30 
                    [&_.MathJax]:p-4 
                    [&_.MathJax]:rounded-xl 
                    [&_.MathJax]:border 
                    [&_.MathJax]:border-border/50
                    [&_.MathJax]:shadow-sm
                    [&_.MathJax]:overflow-x-auto
                    [&_.MathJax]:my-6"
    >
      {segments.map((seg, i) =>
        seg.type === 'math' ? (
          seg.display ? (
            <div key={i} className="MathJax my-6 p-4 bg-muted/30 rounded-xl border border-border/50 shadow-sm overflow-x-auto text-center">
              {`\\[${seg.value}\\]`}
            </div>
          ) : (
            <span key={i} className="MathJax">{`\\(${seg.value}\\)`}</span>
          )
        ) : (
          <ReactMarkdown key={i}>{seg.value}</ReactMarkdown>
        )
      )}
    </div>
  )
}

MarkdownRenderer.propTypes = {
  content: PropTypes.string.isRequired,
}
