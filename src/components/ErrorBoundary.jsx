import { Component } from "react"
import PropTypes from "prop-types"
import { Button } from "@/components/ui/button"
import { Home, RefreshCw } from "lucide-react"

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  handleGoHome = () => {
    window.location.href = "/"
  }

  handleReload = () => {
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-background text-foreground flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size:[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-62.5 bg-destructive/10 rounded-full blur-[100px] opacity-40 pointer-events-none"></div>

          <div className="relative z-10 mx-auto max-w-lg px-4 text-center space-y-8">
            <div className="relative inline-flex items-center justify-center">
              <div className="absolute w-24 h-24 bg-destructive/10 rounded-full blur-xl"></div>
              <div className="relative w-20 h-20 rounded-3xl bg-card/70 backdrop-blur-xl border border-border/50 shadow-2xl flex items-center justify-center">
                <span className="text-3xl font-bold font-heading text-destructive">!</span>
              </div>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight">
                Ups! Terjadi Kesalahan
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {this.state.error?.message || "Sepertinya ada masalah yang tidak terduga. Silakan muat ulang atau kembali ke beranda."}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                onClick={this.handleGoHome}
                className="h-12 px-8 rounded-2xl gap-3 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all"
              >
                <Home className="h-4 w-4" />
                Kembali ke Beranda
              </Button>
              <Button
                variant="outline"
                onClick={this.handleReload}
                className="h-12 px-8 rounded-2xl gap-3 border-border/50 hover:bg-muted/50 hover:-translate-y-1 transition-all"
              >
                <RefreshCw className="h-4 w-4" />
                Muat Ulang
              </Button>
            </div>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
}
