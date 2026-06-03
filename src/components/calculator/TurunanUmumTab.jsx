import { useState } from "react"
import PropTypes from "prop-types"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { BlockMath, InlineMath } from "@/components/KaTeXMath"
import { Calculator, RotateCcw, AlertCircle } from "lucide-react"

function parsePolinomial(expr) {
  expr = expr.replace(/\s+/g, "").toLowerCase()
  const terms = []
  const pat = /([+-]?)(\d*\.?\d*)\*?x\^?(\d+\.?\d*)|([+-]?)(\d*\.?\d*)\*?x(?!\^)|([+-]?\d+\.?\d*)/g
  let m
  while ((m = pat.exec(expr)) !== null) {
    if (m[1] !== undefined && m[3] !== undefined && m[0].includes("x")) {
      const sign = m[1] === "-" ? -1 : 1
      const coef = m[2] === "" || m[2] === undefined ? 1 : parseFloat(m[2])
      const exp = parseFloat(m[3])
      terms.push({ coef: sign * coef, exp })
    } else if (m[4] !== undefined && m[0].includes("x") && !m[0].includes("^")) {
      const sign = m[4] === "-" ? -1 : 1
      const coef = m[5] === "" || m[5] === undefined ? 1 : parseFloat(m[5])
      terms.push({ coef: sign * coef, exp: 1 })
    } else if (m[6] !== undefined && m[6] !== "") {
      terms.push({ coef: parseFloat(m[6]), exp: 0 })
    }
  }
  return terms
}

function derivTerms(terms) {
  return terms
    .filter((t) => t.exp !== 0)
    .map((t) => ({ coef: t.coef * t.exp, exp: t.exp - 1 }))
}

function formatTermsLatex(terms) {
  if (!terms.length) return "0"
  let s = ""
  terms.forEach((t, i) => {
    if (t.coef === 0) return
    const c = Math.round(t.coef * 10000) / 10000
    let part = ""
    if (t.exp === 0) part = `${Math.abs(c)}`
    else if (t.exp === 1) part = `${Math.abs(c) === 1 ? "" : Math.abs(c)}x`
    else part = `${Math.abs(c) === 1 ? "" : Math.abs(c)}x^{${t.exp}}`
    if (i === 0) s += c < 0 ? `-${part}` : part
    else s += c < 0 ? ` - ${part}` : ` + ${part}`
  })
  return s || "0"
}

const rules = [
  { name: "Aturan Pangkat", latex: "\\frac{d}{dx}[x^n] = n \\cdot x^{n-1}" },
  { name: "Aturan Perkalian", latex: "\\frac{d}{dx}[uv] = u'v + uv'" },
  { name: "Aturan Pembagian", latex: "\\frac{d}{dx}\\left[\\frac{u}{v}\\right] = \\frac{u'v - uv'}{v^2}" },
  { name: "Aturan Rantai", latex: "\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)" },
]

export default function TurunanUmumTab({ onCalculate }) {
  const [fx, setFx] = useState("")
  const [order, setOrder] = useState(1)
  const [result, setResult] = useState(null)
  const [error, setError] = useState("")

  const hitung = () => {
    if (!fx.trim()) {
      setError("Masukkan fungsi f(x) terlebih dahulu.")
      setResult(null)
      return
    }
    try {
      let terms = parsePolinomial(fx)
      if (!terms.length) {
        setError("Format fungsi tidak dikenali. Gunakan format: 3x^2 + 2x - 5")
        setResult(null)
        return
      }
      const steps = []
      for (let i = 0; i < order; i++) {
        terms = derivTerms(terms)
        steps.push({ order: i + 1, latex: formatTermsLatex(terms) })
      }
      const finalResult = { steps, finalLatex: steps[steps.length - 1].latex }
      setResult(finalResult)
      setError("")
      // Call the parent callback
      if (onCalculate) onCalculate(finalResult, fx)
    } catch {
      setError("Gagal memproses fungsi. Periksa format penulisan.")
      setResult(null)
    }
  }

  const reset = () => {
    setFx("")
    setOrder(1)
    setResult(null)
    setError("")
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Kalkulator Turunan Polinomial
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Masukkan fungsi dalam bentuk f(x). Contoh:{" "}
            <code className="text-primary font-mono text-xs">3x^4 + 2x^3 - 5x + 7</code>
          </p>
          <div className="flex items-center gap-3">
            <Label className="w-16 shrink-0 text-sm">f(x) =</Label>
            <Input
              value={fx}
              onChange={(e) => { setFx(e.target.value); setError(""); }}
              placeholder="3x^4 + 2x^3 - 5x + 7"
              className="font-mono"
            />
          </div>
          <div className="flex items-center gap-3">
            <Label className="w-16 shrink-0 text-sm">Orde ke-</Label>
            <Input
              type="number"
              min="1"
              max="5"
              value={order}
              onChange={(e) => setOrder(parseInt(e.target.value) || 1)}
              className="w-20 font-mono"
            />
            <span className="text-sm text-muted-foreground">kali turunan</span>
          </div>
          <div className="flex gap-2">
            <Button onClick={hitung} className="gap-2">
              <Calculator className="h-4 w-4" />
              Hitung Turunan
            </Button>
            <Button variant="outline" onClick={reset} className="gap-2">
              <RotateCcw className="h-4 w-4" />
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {result && (
        <Card className="border-l-4 border-l-primary">
          <CardContent className="pt-6">
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
              {order > 1 ? `f${"'".repeat(order)}(x) = ` : "f'(x) = "}
            </p>
            <BlockMath math={result.finalLatex} />
            {result.steps.length > 1 && (
              <div className="mt-4 pt-4 border-t space-y-2">
                {result.steps.map((s) => (
                  <div key={s.order} className="flex items-center gap-3 text-sm">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-semibold">
                      {s.order}
                    </span>
                    <span className="text-muted-foreground">
                      Turunan ke-{s.order}:{" "}
                    </span>
                    <InlineMath math={s.latex} />
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Aturan Turunan Dasar
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            {rules.map((rule) => (
              <div key={rule.name} className="p-3 rounded-lg border bg-muted/50 hover:border-primary/50 transition-colors">
                <p className="text-xs font-semibold mb-2">{rule.name}</p>
                <InlineMath math={rule.latex} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

TurunanUmumTab.propTypes = {
  onCalculate: PropTypes.func,
};
