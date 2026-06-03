import { useRef, useEffect, useCallback } from "react"
import PropTypes from "prop-types"

function typesetMathJax(element) {
  if (window.MathJax && window.MathJax.typesetPromise) {
    return window.MathJax.typesetPromise([element]).catch((err) =>
      console.warn("MathJax typeset error:", err)
    )
  }
  return Promise.resolve()
}

function clearMathJax(element) {
  if (window.MathJax && window.MathJax.startup && window.MathJax.startup.document) {
    const MathJax = window.MathJax
    const adaptor = MathJax.startup.adaptor
    if (adaptor) {
      const nodes = adaptor.tags(element, "mjx-container")
      adaptor.remove(nodes)
    }
  }
}

export function InlineMath({ math, className = "" }) {
  const spanRef = useRef(null)
  const prevMath = useRef(math)

  const renderMath = useCallback(() => {
    if (!spanRef.current || !math) return
    const el = spanRef.current
    el.innerHTML = `\\(${math}\\)`
    typesetMathJax(el)
  }, [math])

  useEffect(() => {
    if (prevMath.current !== math) {
      clearMathJax(spanRef.current)
    }
    prevMath.current = math
    renderMath()
  }, [math, renderMath])

  return <span ref={spanRef} className={className} />
}

InlineMath.propTypes = {
  math: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export function BlockMath({ math, className = "" }) {
  const divRef = useRef(null)
  const prevMath = useRef(math)

  const renderMath = useCallback(() => {
    if (!divRef.current || !math) return
    const el = divRef.current
    el.innerHTML = `\\[${math}\\]`
    typesetMathJax(el)
  }, [math])

  useEffect(() => {
    if (prevMath.current !== math) {
      clearMathJax(divRef.current)
    }
    prevMath.current = math
    renderMath()
  }, [math, renderMath])

  return <div ref={divRef} className={className} />
}

BlockMath.propTypes = {
  math: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export function AsciiMath({ math, className = "" }) {
  const spanRef = useRef(null)
  const prevMath = useRef(math)

  const renderMath = useCallback(() => {
    if (!spanRef.current || !math) return
    const el = spanRef.current
    el.innerHTML = `\`${math}\``
    typesetMathJax(el)
  }, [math])

  useEffect(() => {
    if (prevMath.current !== math) {
      clearMathJax(spanRef.current)
    }
    prevMath.current = math
    renderMath()
  }, [math, renderMath])

  return <span ref={spanRef} className={className} />
}

AsciiMath.propTypes = {
  math: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export function BlockAsciiMath({ math, className = "" }) {
  const divRef = useRef(null)
  const prevMath = useRef(math)

  const renderMath = useCallback(() => {
    if (!divRef.current || !math) return
    const el = divRef.current
    el.innerHTML = `$$${math}$$`
    typesetMathJax(el)
  }, [math])

  useEffect(() => {
    if (prevMath.current !== math) {
      clearMathJax(divRef.current)
    }
    prevMath.current = math
    renderMath()
  }, [math, renderMath])

  return <div ref={divRef} className={className} />
}

BlockAsciiMath.propTypes = {
  math: PropTypes.string.isRequired,
  className: PropTypes.string,
}
