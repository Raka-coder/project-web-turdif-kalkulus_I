import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { BlockMath, InlineMath } from "@/components/MathJaxMath"
import { Calculator, RotateCcw } from "lucide-react"

const fmt = (n) => (Math.abs(n - Math.round(n)) < 1e-10 ? Math.round(n).toString() : n.toFixed(6))

const trigData = {
  sin: {
    fxLatex: (a, b, c) => `${a}\\sin(${b}x + ${c})`,
    dfxLatex: (a, b, c) => `${a * b}\\cos(${b}x + ${c})`,
    eval: (a, b, c, x) => a * b * Math.cos(b * x + c),
  },
  cos: {
    fxLatex: (a, b, c) => `${a}\\cos(${b}x + ${c})`,
    dfxLatex: (a, b, c) => `${-a * b}\\sin(${b}x + ${c})`,
    eval: (a, b, c, x) => -a * b * Math.sin(b * x + c),
  },
  tan: {
    fxLatex: (a, b, c) => `${a}\\tan(${b}x + ${c})`,
    dfxLatex: (a, b, c) => `${a * b}\\sec^2(${b}x + ${c})`,
    eval: (a, b, c, x) => { const cosx = Math.cos(b * x + c); return a * b / (cosx * cosx); },
  },
  cot: {
    fxLatex: (a, b, c) => `${a}\\cot(${b}x + ${c})`,
    dfxLatex: (a, b, c) => `${-a * b}\\csc^2(${b}x + ${c})`,
    eval: (a, b, c, x) => { const sinx = Math.sin(b * x + c); return -a * b / (sinx * sinx); },
  },
  sec: {
    fxLatex: (a, b, c) => `${a}\\sec(${b}x + ${c})`,
    dfxLatex: (a, b, c) => `${a * b}\\sec(${b}x + ${c})\\tan(${b}x + ${c})`,
    eval: (a, b, c, x) => { const u = b * x + c; return a * b * (1 / Math.cos(u)) * (Math.sin(u) / Math.cos(u)); },
  },
  csc: {
    fxLatex: (a, b, c) => `${a}\\csc(${b}x + ${c})`,
    dfxLatex: (a, b, c) => `${-a * b}\\csc(${b}x + ${c})\\cot(${b}x + ${c})`,
    eval: (a, b, c, x) => { const u = b * x + c; return -a * b * (1 / Math.sin(u)) * (Math.cos(u) / Math.sin(u)); },
  },
}

const trigTable = [
  ["\\sin(x)", "\\cos(x)", "\\mathbb{R}"],
  ["\\cos(x)", "-\\sin(x)", "\\mathbb{R}"],
  ["\\tan(x)", "\\sec^2(x)", "x \\neq \\frac{\\pi}{2} + n\\pi"],
  ["\\cot(x)", "-\\csc^2(x)", "x \\neq n\\pi"],
  ["\\sec(x)", "\\sec(x)\\tan(x)", "x \\neq \\frac{\\pi}{2} + n\\pi"],
  ["\\csc(x)", "-\\csc(x)\\cot(x)", "x \\neq n\\pi"],
]

export default function TrigonometriTab() {
  const [fn, setFn] = useState("sin")
  const [a, setA] = useState(1)
  const [b, setB] = useState(1)
  const [c, setC] = useState(0)
  const [xVal, setXVal] = useState(0)
  const [result, setResult] = useState(null)

  const hitung = () => {
    const f = trigData[fn]
    const evalVal = f.eval(a, b, c, xVal)
    setResult({ fx: f.fxLatex(a, b, c), dfx: f.dfxLatex(a, b, c), evalVal })
  }

  const reset = () => {
    setFn("sin"); setA(1); setB(1); setC(0); setXVal(0); setResult(null)
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Turunan Fungsi Trigonometri
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3">
            <Label className="w-16 shrink-0 text-sm">Fungsi</Label>
            <Select value={fn} onValueChange={setFn}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(trigData).map((f) => (
                  <SelectItem key={f} value={f}>{f}(x)</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-3">
            <Label className="w-16 shrink-0 text-sm">Koefisien</Label>
            <div className="flex items-center gap-2">
              <Input type="number" value={a} onChange={(e) => setA(parseFloat(e.target.value) || 1)} className="w-20 font-mono" />
              <span className="text-muted-foreground">&middot;</span>
              <Input type="number" value={b} onChange={(e) => setB(parseFloat(e.target.value) || 1)} className="w-20 font-mono" title="koefisien b" />
              <span className="text-muted-foreground">x +</span>
              <Input type="number" value={c} onChange={(e) => setC(parseFloat(e.target.value) || 0)} className="w-20 font-mono" title="konstanta c" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Label className="w-16 shrink-0 text-sm">Nilai x</Label>
            <Input type="number" value={xVal} onChange={(e) => setXVal(parseFloat(e.target.value) || 0)} className="w-32 font-mono" />
            <span className="text-xs text-muted-foreground">(radian)</span>
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
              <BlockMath math={`f(x) = ${result.fx}`} />
            </div>
            <Separator />
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Turunan f&apos;(x)</p>
              <BlockMath math={`f'(x) = ${result.dfx}`} />
            </div>
            <Separator />
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{`Nilai f'(${xVal})`}</p>
              <p className="text-lg font-mono font-semibold text-primary">
                {isNaN(result.evalVal) ? "Tidak terdefinisi" : fmt(result.evalVal)}
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Tabel Turunan Trigonometri
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            {trigTable.map(([fn, dfn, dom], i) => (
              <div key={i} className="flex items-center gap-4 py-2 border-b last:border-0">
                <span className="w-24"><InlineMath math={fn} /></span>
                <span className="text-primary w-32"><InlineMath math={dfn} /></span>
                <span className="text-muted-foreground text-xs"><InlineMath math={dom} /></span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
