import { useState, useEffect, useCallback, useRef } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { gsap } from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useTheme } from "@/components/ThemeContext"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Moon, Sun, Menu, Calculator, BookOpen, Home, Users } from "lucide-react"
import turdifLogo from "@/assets/logo/turdif.svg"

gsap.registerPlugin(ScrollToPlugin)

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
  
  // Refs for animation
  const navContainerRef = useRef(null)
  const underlineRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Position the underline based on active link
  useEffect(() => {
    if (!navContainerRef.current || !underlineRef.current) return
    
    const activeLink = navContainerRef.current.querySelector('[data-active="true"]')
    if (activeLink) {
      gsap.to(underlineRef.current, {
        width: activeLink.offsetWidth,
        x: activeLink.offsetLeft,
        duration: 0.3,
        ease: "power2.out"
      })
    }
  }, [location.pathname, location.hash])

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
    (e, link) => {
      if (link.hash) {
        e.preventDefault()
        if (location.pathname === "/") {
          scrollToElement(link.hash)
        } else {
          navigate("/")
          setTimeout(() => scrollToElement(link.hash), 500)
        }
      } else if (link.to === "/") {
        e.preventDefault()
        if (location.pathname === "/") {
          scrollToTop()
        } else {
          navigate("/")
        }
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
          ? "bg-background/70 backdrop-blur-xl border-b border-border/50 shadow-sm"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
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
          <div ref={navContainerRef} className="relative flex items-center gap-8">
            {navLinks.map((link) => {
              const active = isActive(link.to)
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  data-active={active}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`text-sm font-semibold transition-colors duration-300 ${
                    active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            {/* The animated underline */}
            <span ref={underlineRef} className="absolute -bottom-1 h-0.5 bg-primary pointer-events-none"></span>
          </div>

          <div className="h-6 w-px bg-border/50"></div>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="rounded-full text-muted-foreground hover:text-foreground transition-colors"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="flex md:hidden items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="rounded-full text-muted-foreground">
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="inline-flex items-center justify-center h-10 w-10 rounded-full text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer">
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72 p-6">
              <div className="flex flex-col gap-6 mt-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={(e) => {
                      handleNavClick(e, link)
                      setOpen(false)
                    }}
                    className={`flex items-center gap-3 text-lg font-semibold ${
                      isActive(link.to) ? "text-primary" : "text-foreground"
                    }`}
                  >
                    <link.icon className="h-5 w-5" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
