import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import TurunanUmumTab from "@/components/calculator/TurunanUmumTab"
import TrigonometriTab from "@/components/calculator/TrigonometriTab"
import EksponensialTab from "@/components/calculator/EksponensialTab"
import ReferensiTab from "@/components/calculator/ReferensiTab"

export default function CalculatorPage() {
  return (
    <div className="mx-auto max-w-4xl px-8 py-16 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Badge variant="secondary" className="mb-2">Kalkulus & Diferensial</Badge>
        <h1 className="text-3xl font-bold">
          Kalkulator <span className="text-primary">Turunan</span>
        </h1>
      </div>

      <Tabs defaultValue="umum" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="umum">Turunan Umum</TabsTrigger>
          <TabsTrigger value="trig">Trigonometri</TabsTrigger>
          <TabsTrigger value="exp">Eksponensial</TabsTrigger>
          <TabsTrigger value="ref">Referensi</TabsTrigger>
        </TabsList>

        <TabsContent value="umum" className="mt-6">
          <TurunanUmumTab />
        </TabsContent>
        <TabsContent value="trig" className="mt-6">
          <TrigonometriTab />
        </TabsContent>
        <TabsContent value="exp" className="mt-6">
          <EksponensialTab />
        </TabsContent>
        <TabsContent value="ref" className="mt-6">
          <ReferensiTab />
        </TabsContent>
      </Tabs>
    </div>
  )
}
