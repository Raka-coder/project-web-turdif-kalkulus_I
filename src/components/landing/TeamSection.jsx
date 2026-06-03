import { ExternalLink } from "lucide-react"
import SpotlightCard from "@/components/ui/spotlight-card"
import ginanjarImg from "@/assets/images/teams-image/ginanjar.jpg"
import luthfiImg from "@/assets/images/teams-image/luthfi.jpg"
import rakaImg from "@/assets/images/teams-image/raka.jpg"
import tazrilImg from "@/assets/images/teams-image/tazril.jpg"

const teams = [
  { id: 1, name: "Ginanjar Abdul Hakim", image: ginanjarImg, sector: "UI Designer", instagram: "https://www.instagram.com/ginanjar_d98/" },
  { id: 2, name: "Luthfi Apriliansyah", image: luthfiImg, sector: "UX Designer", instagram: "https://www.instagram.com/lthfiiaa/" },
  { id: 3, name: "Raka Restu Saputra", image: rakaImg, sector: "Developer", instagram: "https://www.instagram.com/rakresptra/" },
  { id: 4, name: "Tazril Dwi Aprila", image: tazrilImg, sector: "Researcher", instagram: "https://www.instagram.com/thislifeisnt_omoshiroi/" },
]

export default function TeamSection() {
  return (
    <section id="team" className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div className="space-y-1">
          <h2 className="text-3xl font-bold tracking-tight font-heading text-foreground">Tim Pengembang</h2>
          <p className="text-muted-foreground text-base">
            Mahasiswa di balik project Kalkulus I.
          </p>
        </div>
        <div className="h-px grow bg-border mx-6 hidden md:block mb-3 opacity-30"></div>
        <div className="text-primary font-medium text-[10px] uppercase tracking-wider px-3 py-1 bg-primary/5 rounded-full border border-primary/10">
          4 Contributors
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {teams.map((team) => (
          <SpotlightCard 
            key={team.id} 
            className="group p-4 border-border/40 dark:bg-card rounded-4xl"
          >
            <div className="relative aspect-square overflow-hidden rounded-full bg-muted mb-4 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-primary/10">
              <img
                src={team.image}
                alt={team.name}
                className="w-lg h-full object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            <div className="space-y-1 relative z-20 px-1">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-base font-bold font-heading text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                  {team.name}
                </h3>
                <a
                  href={team.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-full bg-background/50 backdrop-blur-md border border-border/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 shrink-0"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
              <p className="text-[10px] font-bold text-primary/70 uppercase tracking-[0.2em] flex items-center gap-1.5">
                <span className="h-px w-3 bg-primary/30"></span>
                {team.sector}
              </p>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  )
}
