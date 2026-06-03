import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { BlockMath, InlineMath } from "@/components/MathJaxMath"
import { Calculator, RotateCcw } from "lucide-react"

const E = Math.E
const fmt = (n) => (Math.abs(n - Math.round(n)) < 1e-9 ? Math.round(n).toString() : n.toFixed(6))

const expFns = {
  ex: {
    fx: "e^x", dfx: "e^x",
    eval: (a, k, x) => Math.pow(E, x),
    steps: (a, k, x) => [
      { text: "Aturan:", latex: "\\frac{d}{dx}[e^x] = e^x" },
      { text: "Maka:", latex: `f'(${x}) = e^{${x}} = ${fmt(Math.pow(E, x))}` },
    ],
  },
  ax: {
    fx: (a) => `${a}^x`, dfx: (a) => `${a}^x \\cdot \\ln(${a})`,
    eval: (a, k, x) => Math.pow(a, x) * Math.log(a),
    steps: (a, k, x) => [
      { text: "Aturan:", latex: "\\frac{d}{dx}[a^x] = a^x \\cdot \\ln(a)" },
      { text: "Maka:", latex: `f'(${x}) = ${fmt(Math.pow(a, x))} \\cdot ${fmt(Math.log(a))} = ${fmt(Math.pow(a, x) * Math.log(a))}` },
    ],
  },
  lnx: {
    fx: "\\ln(x)", dfx: "\\frac{1}{x}",
    eval: (a, k, x) => 1 / x,
    steps: (a, k, x) => [
      { text: "Aturan:", latex: "\\frac{d}{dx}[\\ln(x)] = \\frac{1}{x}" },
      { text: "Maka:", latex: `f'(${x}) = \\frac{1}{${x}} = ${fmt(1 / x)}` },
    ],
  },
  logax: {
    fx: (a) => `\\log_{${a}}(x)`, dfx: (a) => `\\frac{1}{x \\cdot \\ln(${a})}`,
    eval: (a, k, x) => 1 / (x * Math.log(a)),
    steps: (a, k, x) => [
      { text: "Aturan:", latex: "\\frac{d}{dx}[\\log_a(x)] = \\frac{1}{x \\cdot \\ln(a)}" },
      { text: "Maka:", latex: `f'(${x}) = ${fmt(1 / (x * Math.log(a)))}` },
    ],
  },
  ekx: {
    fx: (k) => `e^{${k}x}`, dfx: (k) => `${k} \\cdot e^{${k}x}`,
    eval: (a, k, x) => k * Math.pow(E, k * x),
    steps: (a, k, x) => [
      { text: "Aturan rantai:", latex: "\\frac{d}{dx}[e^{kx}] = k \\cdot e^{kx}" },
      { text: "Maka:", latex: `f'(${x}) = ${k} \\cdot e^{${k * x}} = ${fmt(k * Math.pow(E, k * x))}` },
    ],
  },
  xex: {
    fx: "x \\cdot e^x", dfx: "e^x(x + 1)",
    eval: (a, k, x) => Math.pow(E, x) * (x + 1),
    steps: (a, k, x) => [
      { text: "Aturan perkalian:", latex: "(uv)' = u'v + uv'" },
      { text: "Maka:", latex: "f'(x) = e^x(x + 1)" },
      { text: "Nilai:", latex: `f'(${x}) = ${fmt(Math.pow(E, x) * (x + 1))}` },
    ],
  },
}

const expTable = [
  ["e^x", "e^x", "Turunan dirinya sendiri"],
  ["a^x", "a^x \\cdot \\ln(a)", "a > 0, a \\neq 1"],
  ["e^{kx}", "k \\cdot e^{kx}", "Aturan rantai"],
  ["\\ln(x)", "\\frac{1}{x}", "x > 0"],
  ["\\log_a(x)", "\\frac{1}{x \\cdot \\ln(a)}", "a > 0, x > 0"],
  ["x \\cdot e^x", "e^x(x+1)", "Aturan perkalian"],
]

export default function EksponensialTab() {
  const [fn, setFn] = useState("ex")
  const [a, setA] = useState(2)
  const [k, setK] = useState(1)
  const [x, setX] = useState(1)
  const [result, setResult] = useState(null)

  const hitung = () => {
    const f = expFns[fn]
    const evalVal = f.eval(a, k, x)
    const fxLatex = typeof f.fx === "function" ? f.fx(fn === "ekx" ? k : a) : f.fx
    const dfxLatex = typeof f.dfx === "function" ? f.dfx(fn === "ekx" ? k : a) : f.dfx
    const steps = f.steps(a, k, x)
    setResult({ fx: `f(x) = ${fxLatex}`, dfx: `f'(x) = ${dfxLatex}`, evalVal, steps })
  }

  const reset = () => {
    setFn("ex"); setA(2); setK(1); setX(1); setResult(null)
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Turunan Eksponensial & Logaritma
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3">
            <Label className="w-16 shrink-0 text-sm">Fungsi</Label>
            <Select value={fn} onValueChange={setFn}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ex">e^x</SelectItem>
                <SelectItem value="ax">a^x (basis umum)</SelectItem>
                <SelectItem value="lnx">ln(x)</SelectItem>
                <SelectItem value="logax">log_a(x)</SelectItem>
                <SelectItem value="ekx">e^(kx)</SelectItem>
                <SelectItem value="xex">x*e^x</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-3">
            <Label className="w-16 shrink-0 text-sm">Parameter</Label>
            <Input type="number" value={a} onChange={(e) => setA(parseFloat(e.target.value) || 2)} className="w-24 font-mono" title="basis a" />
            <Input type="number" value={k} onChange={(e) => setK(parseFloat(e.target.value) || 1)} className="w-24 font-mono" title="konstanta k" />
          </div>
          <div className="flex items-center gap-3">
            <Label className="w-16 shrink-0 text-sm">Nilai x</Label>
            <Input type="number" value={x} onChange={(e) => setX(parseFloat(e.target.value) || 0)} className="w-32 font-mono" />
          </div>
          <div className="flex gap-2">
            <Button onClick={hitung} className="gap-2">
              <Calculator className="h-4 w-4" />
              Hitung
            </Button>
            <Button variant="outline" onClick={reset} className="gap-2">
              <RotateCcw className="h-4 w-4" />
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>

      {result && (
        <Card className="border-l-4 border-l-primary">
          <CardContent className="pt-6 space-y-3">
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Fungsi Asal</p>
              <BlockMath math={result.fx} />
            </div>
            <Separator />
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Turunan</p>
              <BlockMath math={result.dfx} />
            </div>
            <Separator />
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{`Nilai f'(${x})`}</p>
              <p className="text-lg font-mono font-semibold text-primary">
                {isNaN(result.evalVal) ? "Tidak terdefinisi" : fmt(result.evalVal)}
              </p>
            </div>
            <div className="mt-4 pt-4 border-t space-y-3">
              {result.steps.map((s, i) => (
                <div key={i} className="flex items-start gap-3 text-sm">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-semibold shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <div>
                    <span className="text-muted-foreground">{s.text} </span>
                    <InlineMath math={s.latex} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Referensi Cepat Eksponensial
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            {expTable.map(([fn, dfn, note], i) => (
              <div key={i} className="flex items-center gap-4 py-2 border-b last:border-0">
                <span className="w-28"><InlineMath math={fn} /></span>
                <span className="text-primary w-40"><InlineMath math={dfn} /></span>
                <span className="text-muted-foreground text-xs">{note}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
