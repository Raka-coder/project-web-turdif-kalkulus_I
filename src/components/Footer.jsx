import { useLocation, useNavigate } from "react-router-dom"
import { gsap } from "gsap"

const tools = [
  { name: "React", url: "https://react.dev/", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
]

const navLinks = [
  { to: "/", label: "Home", hash: null },
  { to: "/#materi", label: "Materi", hash: "#materi" },
  { to: "/kalkulator", label: "Kalkulator", hash: null },
  { to: "/#team", label: "Team", hash: "#team" },
]

const SCROLL_OFFSET = 80

export default function Footer() {
  const location = useLocation()
  const navigate = useNavigate()

  const scrollToElement = (selector) => {
    const el = document.querySelector(selector)
    if (el) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: el, offsetY: SCROLL_OFFSET },
        ease: "power3.inOut",
      })
    }
  }

  const scrollToTop = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: 0 },
      ease: "power3.inOut",
    })
  }

  const handleNavClick = (link) => {
    if (link.hash) {
      if (location.pathname === "/") {
        scrollToElement(link.hash)
      } else {
        navigate("/")
        setTimeout(() => scrollToElement(link.hash), 100)
      }
    } else if (link.to === "/") {
      if (location.pathname === "/") {
        scrollToTop()
      } else {
        navigate("/")
      }
    } else {
      navigate(link.to)
    }
  }

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 md:flex-row md:items-center md:justify-between">
          <div className="space-y-4 text-center md:text-left">
            <button
              onClick={() => {
                if (location.pathname === "/") {
                  scrollToTop()
                } else {
                  navigate("/")
                }
              }}
              className="flex items-center justify-center md:justify-start gap-2 font-bold text-3xl font-heading tracking-tighter transition-opacity hover:opacity-80 cursor-pointer"
            >
              <span className="text-primary">turdif</span>
            </button>
            <p className="text-sm text-muted-foreground max-w-xs mx-auto md:mx-0 leading-relaxed">
              Platform eksplorasi konsep turunan diferensial untuk mendukung pembelajaran Kalkulus I.
            </p>
          </div>

          <div className="flex flex-col gap-8 md:items-end items-center">
            <nav className="flex flex-wrap justify-center md:justify-end gap-x-10 gap-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.to}
                  onClick={() => handleNavClick(link)}
                  className="text-sm font-semibold text-muted-foreground hover:text-primary transition-all duration-300 relative group cursor-pointer"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-6">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/40">Powered by</span>
              <div className="flex gap-5">
                {tools.map((tool) => (
                  <a
                    key={tool.name}
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110"
                    title={tool.name}
                  >
                    <img src={tool.icon} alt={tool.name} className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] text-muted-foreground/50 font-medium">
          <p className="order-2 md:order-1">
            &copy; {new Date().getFullYear()} <span className="text-foreground">turdif</span>. Project Mata Kuliah Kalkulus I.
          </p>
          <div className="flex gap-8 order-1 md:order-2">
            <span className="hover:text-primary transition-colors cursor-default">Privacy</span>
            <span className="hover:text-primary transition-colors cursor-default">Terms</span>
            <span className="hover:text-primary transition-colors cursor-default">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
