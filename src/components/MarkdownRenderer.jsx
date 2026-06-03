import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import PropTypes from 'prop-types'
import 'katex/dist/katex.min.css'

export default function MarkdownRenderer({ content }) {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground leading-relaxed
                    prose-p:mb-4 prose-p:mt-2
                    prose-ul:my-4 prose-li:my-1
                    prose-strong:text-foreground
                    /* Custom math block styling */
                    [&_.katex]:whitespace-nowrap
                    [&_.katex-display]:block
                    [&_.katex-display]:bg-muted/30 
                    [&_.katex-display]:p-4 
                    [&_.katex-display]:rounded-xl 
                    [&_.katex-display]:border 
                    [&_.katex-display]:border-border/50
                    [&_.katex-display]:shadow-sm
                    [&_.katex-display]:overflow-x-auto
                    [&_.katex-display]:my-6">
      <ReactMarkdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}

MarkdownRenderer.propTypes = {
  content: PropTypes.string.isRequired,
}
