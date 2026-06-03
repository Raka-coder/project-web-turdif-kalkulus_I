import { Card, CardContent } from "@/components/ui/card"
import { InlineMath, BlockMath } from "@/components/MathJaxMath"
import { Check, Info } from "lucide-react"

const notasiData = [
  {
    title: "Notasi Leibniz",
    content: "Metode penulisan turunan menggunakan simbol d/dx, paling umum dalam kalkulus.",
    notation: "\\frac{dy}{dx}",
    details: ["Simbol diferensial d/dx", "Gottfried Wilhelm Leibniz", "Standar Kalkulus Modern"],
    className: "md:col-span-2 md:row-span-2 bg-primary/5 border-primary/20",
    isPrimary: true
  },
  {
    title: "Notasi Lagrange",
    content: "Menggunakan tanda prima (') untuk turunan.",
    notation: "f'(x)",
    details: ["Joseph-Louis Lagrange", "Sederhana & Ringkas"],
    className: "bg-muted/30 border-border",
    isPrimary: false
  },
  {
    title: "Notasi Newton",
    content: "Notasi titik untuk turunan terhadap waktu.",
    notation: "\\dot{y}",
    details: ["Isaac Newton", "Fisika & Dinamika"],
    className: "bg-muted/30 border-border",
    isPrimary: false
  },
]

export default function NotationShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 auto-rows-fr">
      {notasiData.map((notasi, index) => (
        <Card 
          key={index} 
          className={`overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${notasi.className} rounded-2xl flex flex-col`}
        >
          <CardContent className="p-6 flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold font-heading">{notasi.title}</h3>
              <div className="p-2 rounded-full bg-background/50 backdrop-blur-sm border shadow-sm text-primary">
                <Info className="h-4 w-4" />
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground mb-6">
              {notasi.content}
            </p>

            <div className={`grow flex items-center justify-center py-8 px-4 rounded-xl bg-background/40 mb-6 border shadow-inner ${notasi.isPrimary ? 'text-3xl' : 'text-2xl'}`}>
               {notasi.isPrimary ? (
                 <BlockMath math={notasi.notation} />
               ) : (
                 <InlineMath math={notasi.notation} />
               )}
            </div>

            <ul className="space-y-2 mt-auto">
              {notasi.details.map((detail, i) => (
                <li key={i} className="flex items-center gap-2 text-xs font-medium text-foreground/80">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </div>
                  {detail}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
