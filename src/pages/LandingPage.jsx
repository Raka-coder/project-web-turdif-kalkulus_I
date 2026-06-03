import { Separator } from "@/components/ui/separator"
import HeroSection from "@/components/landing/HeroSection"
import MateriSection from "@/components/landing/MateriSection"
import TeamSection from "@/components/landing/TeamSection"

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <Separator />
      <MateriSection />
      <Separator />
      <TeamSection />
    </div>
  )
}
