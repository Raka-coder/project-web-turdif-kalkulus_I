import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calculator, ArrowRight, Sparkles } from "lucide-react"
import { BlockMath, InlineMath } from "@/components/MathJaxMath"
import TextType from "@/components/TextType"

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-32">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size:[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
      
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100 bg-primary/10 rounded-full blur-[120px] opacity-50 pointer-events-none"></div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* Left Column: Text Content */}
          <div className="space-y-8">
            <Badge variant="secondary" className="w-fit px-4 py-1.5 rounded-full border-primary/20 bg-primary/5 text-primary gap-2">
              <Sparkles className="h-3.5 w-3.5" />
              Project Mata Kuliah Kalkulus I
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl lg:text-7xl font-heading leading-[1.1] min-h-35 sm:min-h-40 lg:min-h-40">
                Eksplorasi <br className="hidden sm:block"/>
                <div className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary/60 inline-block">
                  <TextType 
                    text={[
                      "Turunan Diferensial",
                      "Aturan Rantai",
                      "Limit Fungsi",
                      "Kalkulus Dasar"
                    ]}
                    typingSpeed={60}
                    deletingSpeed={30}
                    pauseDuration={2500}
                    cursorClassName="text-primary font-light opacity-80"
                  />
                </div>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Platform pembelajaran interaktif untuk memahami konsep dasar turunan dan aplikasinya. Dilengkapi dengan kalkulator pintar langkah-demi-langkah.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/kalkulator" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base rounded-2xl gap-3 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all">
                  <Calculator className="h-5 w-5" />
                  Mulai Hitung
                </Button>
              </Link>
              <a href="#materi" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 text-base rounded-2xl gap-3 border-border/50 hover:bg-muted/50 hover:-translate-y-1 transition-all">
                  Pelajari Materi
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column: Floating Glass Math */}
          <div className="relative h-112.5 sm:h-125 w-full flex items-center justify-center lg:justify-end mt-10 lg:mt-0">
            <div className="relative w-full max-w-md aspect-square">
                
                {/* Main Center Card */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-80 p-6 sm:p-8 rounded-4xl bg-card/60 backdrop-blur-2xl border border-white/10 dark:border-white/5 shadow-2xl shadow-primary/10 z-20 hover:scale-105 hover:-translate-y-2 transition-all duration-500 ease-out cursor-default">
                  <div className="flex items-center gap-2 mb-6 opacity-50">
                    <div className="h-2.5 w-2.5 rounded-full bg-destructive"></div>
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                  </div>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-4">Definisi Limit</p>
                  <div className="text-xl sm:text-2xl text-foreground font-medium py-2 flex justify-center">
                    <BlockMath math={"f'(x) = \\lim_{h \\to 0} \\frac{f(x+h)-f(x)}{h}"} />
                  </div>
                </div>

                {/* Top Right Floating Card */}
                <div className="absolute top-[5%] right-[-5%] sm:right-0 p-4 sm:p-5 rounded-2xl bg-card/70 backdrop-blur-xl border border-border/50 shadow-xl z-30 transform md:rotate-6 hover:rotate-0 transition-all duration-500 hover:scale-110 hover:-translate-y-2 cursor-default">
                  <p className="text-[10px] font-bold text-primary uppercase tracking-wider mb-2">Aturan Pangkat</p>
                  <div className="text-base sm:text-lg">
                    <InlineMath math={"\\frac{d}{dx}(x^n) = n x^{n-1}"} />
                  </div>
                </div>

                {/* Bottom Left Floating Card */}
                <div className="absolute bottom-[5%] left-[-5%] sm:left-4 p-4 sm:p-5 rounded-2xl bg-card/70 backdrop-blur-xl border border-border/50 shadow-xl z-30 transform md:-rotate-3 hover:rotate-0 transition-all duration-500 hover:scale-110 hover:-translate-y-2 cursor-default">
                  <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider mb-2">Aturan Rantai</p>
                  <div className="text-base sm:text-lg">
                    <InlineMath math={"\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}"} />
                  </div>
                </div>
                
                {/* Decorative glow behind cards */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/20 rounded-full blur-[80px] z-10 pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
