import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import NotationShowcase from "./NotationShowcase"
import MarkdownRenderer from "@/components/MarkdownRenderer"
import { 
  BookOpen, 
  Variable, 
  Zap, 
  LineChart, 
  Triangle, 
  Activity, 
  FileText, 
  Layers,
  ChevronRight
} from "lucide-react"

const materiSections = [
  {
    title: "Konsep Turunan",
    icon: <BookOpen className="h-4 w-4" />,
    content: `
Turunan atau diferensial mengukur bagaimana suatu fungsi berubah saat inputnya berubah. Secara geometris, turunan di suatu titik adalah **kemiringan garis singgung** kurva pada titik tersebut.

**Definisi Limit:**
$$
f'(x) = \\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h}
$$
    `,
  },
  {
    title: "Fungsi Konstanta",
    icon: <Variable className="h-4 w-4" />,
    content: `
Fungsi konstanta tidak berubah nilainya, sehingga laju perubahannya selalu nol.

**Rumus Dasar:**
$$
\\frac{d}{dx}(c) = 0
$$

*"Turunan dari suatu konstanta (angka tetap) adalah nol."*
    `,
  },
  {
    title: "Fungsi Pangkat",
    icon: <Zap className="h-4 w-4" />,
    content: `
Aturan dasar untuk menurunkan fungsi variabel berpangkat bilangan real (*Power Rule*).

$$
\\frac{d}{dx}(x^n) = n \\cdot x^{n - 1}
$$

**Contoh:** Jika $f(x) = x^3$, maka $f'(x) = 3x^2$.
    `,
  },
  {
    title: "Fungsi Linear",
    icon: <LineChart className="h-4 w-4" />,
    content: `
Turunan fungsi linear adalah gradien atau koefisien dari variabel tersebut.

**Rumus Linear:**
$$
\\frac{d}{dx}(ax + b) = a
$$
    `,
  },
  {
    title: "Trigonometri",
    icon: <Triangle className="h-4 w-4" />,
    content: `
Turunan untuk fungsi-fungsi trigonometri dasar memiliki pola unik. *Tips: Setiap fungsi yang berawalan "Co" (Cosinus, Cotangen, Cosecan) selalu menghasilkan turunan bernilai negatif.*

### Fungsi Utama

**1. Sinus (sin)**
$$
\\frac{d}{dx}(\\sin x) = \\cos x
$$

**2. Cosinus (cos)**
$$
\\frac{d}{dx}(\\cos x) = -\\sin x
$$

---

### Fungsi Lanjutan

**3. Tangen (tan)**
$$
\\frac{d}{dx}(\\tan x) = \\sec^2 x
$$

**4. Cotangen (cot)**
$$
\\frac{d}{dx}(\\cot x) = -\\csc^2 x
$$
    `,
  },
  {
    title: "Eksponensial",
    icon: <Activity className="h-4 w-4" />,
    content: `
Aturan untuk fungsi dengan basis bilangan tetap dan pangkat variabel.

**Basis e:**
$$
\\frac{d}{dx}(e^x) = e^x
$$

**Basis a:**
$$
\\frac{d}{dx}(a^x) = a^x \\cdot \\ln a
$$
    `,
  },
  {
    title: "Logaritma",
    icon: <FileText className="h-4 w-4" />,
    content: `
Turunan untuk logaritma natural dan logaritma umum.

**Natural (ln):**
$$
\\frac{d}{dx}(\\ln x) = \\frac{1}{x}
$$

**Umum (log):**
$$
\\frac{d}{dx}(\\log_a x) = \\frac{1}{x \\cdot \\ln a}
$$
    `,
  },
  {
    title: "Aturan Turunan",
    icon: <Layers className="h-4 w-4" />,
    content: `
Kumpulan aturan operasi untuk fungsi majemuk (Operasi Aljabar).

* **Penjumlahan:** $(f \\pm g)' = f' \\pm g'$
* **Perkalian:** $(f \\cdot g)' = f'g + fg'$
* **Pembagian:**
$$
\\left( \\frac{f}{g} \\right)' = \\frac{f'g - fg'}{g^2}
$$
* **Aturan Rantai:**
$$
\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}
$$
    `,
  },
]

export default function MateriSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="materi" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold font-heading tracking-tight">Materi Kalkulus</h2>
        <p className="mt-2 text-muted-foreground text-lg">Eksplorasi konsep dasar turunan secara mendalam</p>
      </div>

      <div className="mb-24">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-10 w-1.5 bg-primary rounded-full shadow-[0_0_12px_rgba(var(--primary),0.5)]"></div>
          <h3 className="text-2xl font-bold font-heading tracking-tight">Notasi Turunan</h3>
        </div>
        <NotationShowcase />
      </div>

      <div className="space-y-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-1.5 bg-primary rounded-full shadow-[0_0_12px_rgba(var(--primary),0.5)]"></div>
          <h3 className="text-2xl font-bold font-heading tracking-tight">Eksplorasi Konsep</h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Sidebar Navigation */}
          <div className="w-full lg:w-[35%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
            {materiSections.map((section, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`flex items-center justify-between p-5 rounded-2xl border transition-all duration-300 text-left group ${
                  activeIndex === index 
                    ? "bg-primary text-primary-foreground border-primary shadow-xl shadow-primary/20 translate-x-2" 
                    : "bg-card hover:bg-muted/50 border-border"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2.5 rounded-xl transition-colors ${activeIndex === index ? "bg-white/20" : "bg-primary/10 text-primary"}`}>
                    {section.icon}
                  </div>
                  <span className="text-sm font-bold tracking-tight">{section.title}</span>
                </div>
                <ChevronRight className={`h-4 w-4 transition-all duration-300 ${activeIndex === index ? "rotate-90 opacity-100" : "opacity-0 group-hover:opacity-100 group-hover:translate-x-1"}`} />
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="w-full lg:w-[65%] min-h-130">
            <Card className="h-full border border-border/60 shadow-2xl shadow-black/5 overflow-hidden rounded-4xl bg-card/30 backdrop-blur-xl">
              <div className="bg-primary/5 px-8 py-6 border-b border-border/50 flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                  {materiSections[activeIndex].icon}
                </div>
                <h3 className="text-2xl font-bold font-heading tracking-tight">{materiSections[activeIndex].title}</h3>
              </div>
              <CardContent className="p-10">
                <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                  <MarkdownRenderer content={materiSections[activeIndex].content} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
