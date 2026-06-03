import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { InlineMath } from "@/components/MathJaxMath"

const rules = [
  { name: "Konstanta", formula: "\\frac{d}{dx}[c] = 0", example: "\\frac{d}{dx}[5] = 0" },
  { name: "Pangkat", formula: "\\frac{d}{dx}[x^n] = n \\cdot x^{n-1}", example: "\\frac{d}{dx}[x^3] = 3x^2" },
  { name: "Koefisien", formula: "\\frac{d}{dx}[c \\cdot f(x)] = c \\cdot f'(x)", example: "\\frac{d}{dx}[4x^2] = 8x" },
  { name: "Penjumlahan", formula: "\\frac{d}{dx}[u \\pm v] = u' \\pm v'", example: "\\frac{d}{dx}[x^2 + x] = 2x + 1" },
  { name: "Perkalian", formula: "\\frac{d}{dx}[uv] = u'v + uv'", example: "\\frac{d}{dx}[x \\cdot \\sin(x)]" },
  { name: "Pembagian", formula: "\\frac{d}{dx}\\left[\\frac{u}{v}\\right] = \\frac{u'v - uv'}{v^2}", example: "\\frac{d}{dx}\\left[\\frac{\\sin(x)}{x}\\right]" },
  { name: "Rantai", formula: "f'(g(x)) \\cdot g'(x)", example: "\\frac{d}{dx}[\\sin(x^2)] = 2x\\cos(x^2)" },
]

const applications = [
  { field: "Fisika", desc: "Menentukan kecepatan (turunan posisi terhadap waktu) dan percepatan." },
  { field: "Ekonomi", desc: "Menganalisis laju perubahan permintaan atau penawaran." },
  { field: "Teknik", desc: "Menganalisis laju perubahan suatu proses atau sistem." },
]

export default function ReferensiTab() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Rumus Turunan Lengkap
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {rules.map((rule, i) => (
              <div key={i} className="flex items-center gap-4 py-3 border-b last:border-0">
                <span className="font-medium text-sm w-24 shrink-0">{rule.name}</span>
                <span className="text-primary flex-1"><InlineMath math={rule.formula} /></span>
                <span className="text-muted-foreground text-xs"><InlineMath math={rule.example} /></span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Contoh Penerapan
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm text-muted-foreground">
            {applications.map((app, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-primary mt-1">&#8226;</span>
                <span><strong>{app.field}:</strong> {app.desc}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
