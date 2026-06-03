import { useMemo } from "react"
import PropTypes from "prop-types"
import * as katex from "katex"

function renderMath(math, displayMode) {
  if (!math || typeof math !== "string") return ""
  try {
    return katex.renderToString(math, { displayMode, throwOnError: false, strict: false })
  } catch {
    return `<span style="color:red">Error: ${math}</span>`
  }
}

export function InlineMath({ math, className = "" }) {
  const html = useMemo(() => renderMath(math, false), [math])
  if (!html) return null
  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

InlineMath.propTypes = {
  math: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export function BlockMath({ math, className = "" }) {
  const html = useMemo(() => renderMath(math, true), [math])
  if (!html) return null
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

BlockMath.propTypes = {
  math: PropTypes.string.isRequired,
  className: PropTypes.string,
}
