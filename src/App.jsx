import { Routes, Route } from 'react-router-dom'
import { MathJaxContext } from 'better-react-mathjax'
import { ThemeProvider } from '@/components/ThemeContext'
import Layout from '@/components/Layout'
import LandingPage from '@/pages/LandingPage'
import CalculatorPage from '@/pages/CalculatorPage'
import NotFoundPage from '@/pages/NotFoundPage'
import ErrorPage from '@/pages/ErrorPage'

const mathjaxConfig = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    processEscapes: true,
  },
  asciimath: {
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    inlineMath: [['$', '$']],
  },
  options: {
    ignoreHtmlClass: 'tex2jax_ignore',
    processHtmlClass: 'tex2jax_process',
  },
}

function App() {
  return (
    <MathJaxContext config={mathjaxConfig}>
      <ThemeProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/kalkulator" element={<CalculatorPage />} />
          </Route>
          <Route path="/error" element={<ErrorPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ThemeProvider>
    </MathJaxContext>
  )
}

export default App
