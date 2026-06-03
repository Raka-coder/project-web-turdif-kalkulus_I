import { Link, useRouteError } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft, Calculator } from "lucide-react"
import { InlineMath } from "@/components/MathJaxMath"

export default function NotFoundPage() {
  const error = useRouteError()
  const is404 = error?.status === 404

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size:[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-75 bg-primary/10 rounded-full blur-[120px] opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-100 h-50 bg-destructive/10 rounded-full blur-[100px] opacity-30 pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-2xl px-4 text-center">
        {/* Floating Math Cards */}
        <div className="relative mb-8 h-48 sm:h-56 flex items-center justify-center">
          {/* Main Error Code */}
          <div className="relative">
            <h1 className="text-[10rem] sm:text-[14rem] font-bold font-heading leading-none tracking-tighter bg-linear-to-br from-primary/20 via-primary/10 to-transparent bg-clip-text text-transparent select-none">
              {is404 ? "404" : error?.status || "Error"}
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-5xl sm:text-6xl font-bold font-heading text-foreground">
                {is404 ? "404" : error?.status || "Error"}
              </span>
            </div>
          </div>

          {/* Floating decorative cards */}
          <div className="absolute top-0 right-0 sm:right-[-10%] p-3 rounded-2xl bg-card/70 backdrop-blur-xl border border-border/50 shadow-xl transform md:rotate-6 hover:rotate-0 transition-all duration-500 hover:scale-110 cursor-default">
            <p className="text-[9px] font-bold text-primary uppercase tracking-wider mb-1">Kesalahan</p>
            <div className="text-sm">
              <InlineMath math={"f(x) = \\text{undefined}"} />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 sm:left-[-5%] p-3 rounded-2xl bg-card/70 backdrop-blur-xl border border-border/50 shadow-xl transform md:-rotate-3 hover:rotate-0 transition-all duration-500 hover:scale-110 cursor-default">
            <p className="text-[9px] font-bold text-emerald-500 uppercase tracking-wider mb-1">Status</p>
            <div className="text-sm">
              <InlineMath math={`\\text{HTTP } ${error?.status || 404}`} />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight">
              {is404 ? "Halaman Tidak Ditemukan" : "Terjadi Kesalahan"}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md mx-auto">
              {is404
                ? "Sepertinya halaman yang kamu cari sudah dipindahkan atau tidak tersedia."
                : error?.statusText || error?.message || "Ada yang tidak beres. Silakan coba lagi."}
            </p>
          </div>

          {/* Math-themed message */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-muted/50 border border-border/50 text-sm text-muted-foreground">
            <span className="text-primary font-mono text-xs">lim</span>
            <span className="opacity-50">→</span>
            <span className="font-mono text-xs">404</span>
            <span className="opacity-30">=</span>
            <span className="font-mono text-xs">undefined</span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <Link to="/">
              <Button className="h-12 px-8 rounded-2xl gap-3 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all">
                <Home className="h-4 w-4" />
                Kembali ke Beranda
              </Button>
            </Link>
            <Button
              variant="outline"
              onClick={() => window.history.back()}
              className="h-12 px-8 rounded-2xl gap-3 border-border/50 hover:bg-muted/50 hover:-translate-y-1 transition-all"
            >
              <ArrowLeft className="h-4 w-4" />
              Halaman Sebelumnya
            </Button>
          </div>

          {/* Quick Links */}
          <div className="pt-8 border-t border-border/30">
            <p className="text-xs text-muted-foreground/50 uppercase tracking-wider font-semibold mb-4">Atau kunjungi</p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { to: "/", label: "Beranda", icon: Home },
                { to: "/kalkulator", label: "Kalkulator", icon: Calculator },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/30 border border-border/30 text-sm font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-all duration-300"
                >
                  <link.icon className="h-3.5 w-3.5" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
