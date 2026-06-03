import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import TurunanUmumTab from "@/components/calculator/TurunanUmumTab"
import TrigonometriTab from "@/components/calculator/TrigonometriTab"
import EksponensialTab from "@/components/calculator/EksponensialTab"
import ReferensiTab from "@/components/calculator/ReferensiTab"
import { Calculator, History, Sparkles } from "lucide-react"
import { BlockMath, InlineMath } from "@/components/KaTeXMath"

export default function CalculatorPage() {
  const [currentResult, setCurrentResult] = useState(null)
  const [history, setHistory] = useState([])

  const handleCalculate = (result, fx) => {
    setCurrentResult(result)
    setHistory(prev => [{ fx, result: result.finalLatex, timestamp: new Date() }, ...prev])
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12">
        <Badge variant="secondary" className="px-4 py-1 rounded-full border-primary/20 bg-primary/5 text-primary gap-2 mb-4">
          <Sparkles className="h-3.5 w-3.5" />
          Kalkulus & Diferensial Engine
        </Badge>
        <h1 className="text-5xl font-bold font-heading tracking-tight">
          Kalkulator <span className="text-primary">Turunan</span>
        </h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Hitung turunan fungsi secara instan dengan langkah-langkah yang jelas.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="border border-border/60 shadow-xl shadow-black/5 rounded-4xl bg-card/50 backdrop-blur-xl h-full">
            <CardContent className="p-8">
              <Tabs defaultValue="umum" className="w-full">
                <TabsList className="grid w-full grid-cols-4 bg-muted/50 p-1.5 rounded-2xl mb-8">
                  <TabsTrigger value="umum" className="rounded-xl data-[state=active]:bg-background data-[state=active]:shadow-sm">Umum</TabsTrigger>
                  <TabsTrigger value="trig" className="rounded-xl data-[state=active]:bg-background data-[state=active]:shadow-sm">Trig</TabsTrigger>
                  <TabsTrigger value="exp" className="rounded-xl data-[state=active]:bg-background data-[state=active]:shadow-sm">Exp</TabsTrigger>
                  <TabsTrigger value="ref" className="rounded-xl data-[state=active]:bg-background data-[state=active]:shadow-sm">Ref</TabsTrigger>
                </TabsList>

                <TabsContent value="umum"><TurunanUmumTab onCalculate={handleCalculate} /></TabsContent>
                <TabsContent value="trig"><TrigonometriTab /></TabsContent>
                <TabsContent value="exp"><EksponensialTab /></TabsContent>
                <TabsContent value="ref"><ReferensiTab /></TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="border border-border/60 shadow-xl shadow-black/5 rounded-4xl bg-card/50 backdrop-blur-xl">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                  <Calculator className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-lg font-heading">Hasil Render</h3>
              </div>
              {currentResult ? (
                <div className="flex flex-col items-center justify-center p-6 bg-muted/30 rounded-2xl border border-border/50">
                   <BlockMath math={currentResult.finalLatex} />
                </div>
              ) : (
                <div className="min-h-50 flex items-center justify-center p-6 bg-muted/30 rounded-2xl border border-dashed border-border/50 text-muted-foreground text-sm italic">
                  Hasil perhitungan akan muncul di sini...
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="border border-border/60 shadow-xl shadow-black/5 rounded-4xl bg-card/50 backdrop-blur-xl">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-muted text-muted-foreground">
                  <History className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-lg font-heading">Riwayat</h3>
              </div>
              <div className="space-y-3">
                {history.length > 0 ? history.map((item, i) => (
                  <div key={i} className="text-sm p-3 bg-muted/30 rounded-lg">
                    <p className="font-mono text-xs">{item.fx}</p>
                    <div className="text-primary font-bold">
                      <InlineMath math={item.result} />
                    </div>
                  </div>
                )) : (
                  <p className="text-sm text-muted-foreground italic">Belum ada riwayat perhitungan.</p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
