import { useState, useEffect, useCallback } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { gsap } from "gsap"
import { useTheme } from "@/components/ThemeContext"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Moon, Sun, Menu, Calculator, BookOpen, Home, Users } from "lucide-react"
import turdifLogo from "@/assets/logo/turdif.svg"

const navLinks = [
  { to: "/", label: "Home", icon: Home, hash: null },
  { to: "/#materi", label: "Materi", icon: BookOpen, hash: "#materi" },
  { to: "/kalkulator", label: "Kalkulator", icon: Calculator, hash: null },
  { to: "/#team", label: "Team", icon: Users, hash: "#team" },
]

const SCROLL_OFFSET = 80

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToElement = useCallback((selector) => {
    const el = document.querySelector(selector)
    if (el) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: el, offsetY: SCROLL_OFFSET },
        ease: "power3.inOut",
      })
    }
  }, [])

  const scrollToTop = useCallback(() => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: 0 },
      ease: "power3.inOut",
    })
  }, [])

  const handleNavClick = useCallback(
    (link) => {
      if (link.hash) {
        // Handle hash links (e.g., /#materi, /#team)
        if (location.pathname === "/") {
          scrollToElement(link.hash)
        } else {
          navigate("/")
          setTimeout(() => scrollToElement(link.hash), 100)
        }
      } else if (link.to === "/") {
        // Handle home link
        if (location.pathname === "/") {
          scrollToTop()
        } else {
          navigate("/")
        }
      } else {
        // Handle standard routes (e.g., /kalkulator)
        navigate(link.to)
      }
    },
    [location.pathname, navigate, scrollToElement, scrollToTop]
  )

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/" && !location.hash
    }
    if (path.includes("#")) {
      return location.pathname === "/" && location.hash === path.substring(1)
    }
    return location.pathname.startsWith(path)
  }

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border/50 shadow-sm supports-backdrop-filter:bg-background/60"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Brand Logo & Text */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <img src={turdifLogo} alt="Turdif Logo" className="w-5 h-5 object-contain" />
          </div>
          <span className="font-bold text-2xl font-heading tracking-tight text-foreground group-hover:text-primary transition-colors">
            turdif
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-1 bg-muted/30 p-1 rounded-full border border-border/50">
            {navLinks.map((link) => {
              const active = isActive(link.to)
              return (
                <button
                  key={link.to}
                  onClick={() => handleNavClick(link)}
                  className={`relative px-4 py-1.5 rounded-full text-sm font-semibold transition-colors duration-300 cursor-pointer ${
                    active
                      ? "text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {active && (
                    <span className="absolute inset-0 bg-primary rounded-full -z-10 shadow-sm"></span>
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              )
            })}
          </div>

          <div className="h-6 w-px bg-border/50"></div>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="rounded-full hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="flex md:hidden items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="rounded-full text-muted-foreground"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-75 sm:w-87.5 p-6">

              <div className="flex items-center gap-3 mb-10 mt-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10">
                  <img src={turdifLogo} alt="Turdif Logo" className="w-5 h-5 object-contain" />
                </div>
                <span className="font-bold text-2xl font-heading tracking-tight text-foreground">
                  turdif
                </span>
              </div>

              <div className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const active = isActive(link.to)
                  return (
                    <button
                      key={link.to}
                      onClick={() => {
                        handleNavClick(link)
                        setOpen(false)
                      }}
                      className={`flex items-center gap-4 px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
                        active
                          ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 translate-x-2"
                          : "bg-transparent text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      <link.icon className={`h-5 w-5 ${active ? "text-primary-foreground" : ""}`} />
                      {link.label}
                    </button>
                  )
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
