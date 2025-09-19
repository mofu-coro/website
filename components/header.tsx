"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, PawPrint, Scissors, MapPin, Truck, Users, Newspaper, Navigation } from "lucide-react"
import { BichonLogo } from "@/components/bichon-logo"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const menuItems = [
    { href: "/", label: "ホーム", icon: Home },
    { href: "/services/shelter", label: "保護犬猫＆ふれあい", icon: PawPrint },
    { href: "/animals", label: "里親募集", icon: PawPrint },
    { href: "/services/trimming", label: "トリミング・一時預かり", icon: Scissors },
    { href: "/services/dogrun", label: "ドッグラン", icon: MapPin },
    { href: "/services/kitchen", label: "キッチンカー", icon: Truck },
    { href: "/services/btype", label: "就労支援B型", icon: Users },
    { href: "/news", label: "お知らせ", icon: Newspaper },
    { href: "#access", label: "アクセス", icon: Navigation },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer">
          <BichonLogo className="h-10 w-10 text-primary" />
          <span className="text-2xl font-light text-foreground tracking-wide font-sans">
            mofu.
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          <a href="/services/shelter" className="text-muted-foreground hover:text-foreground transition-colors">
            保護犬猫＆ふれあい
          </a>
          <a href="/animals" className="text-muted-foreground hover:text-foreground transition-colors">
            里親募集
          </a>
          <a href="/services/trimming" className="text-muted-foreground hover:text-foreground transition-colors">
            トリミング・一時預かり
          </a>
          <a href="/services/dogrun" className="text-muted-foreground hover:text-foreground transition-colors">
            ドッグラン
          </a>
          <a href="/services/kitchen" className="text-muted-foreground hover:text-foreground transition-colors">
            キッチンカー
          </a>
          <a href="/services/btype" className="text-muted-foreground hover:text-foreground transition-colors">
            就労支援B型
          </a>
          <a href="/news" className="text-muted-foreground hover:text-foreground transition-colors">
            お知らせ
          </a>
          <a href="#access" className="text-muted-foreground hover:text-foreground transition-colors">
            アクセス
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[73px] z-40 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm" 
            onClick={() => setIsMobileMenuOpen(false)} 
          />

          {/* Menu Panel */}
          <div className="relative bg-gradient-to-br from-background via-background/95 to-stone-50/30 backdrop-blur-xl border-b border-border/50 shadow-2xl">
            <div className="container mx-auto px-6 py-8">
              {/* Menu Items */}
              <nav className="space-y-2">
                {menuItems.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      className="group flex items-center gap-4 px-4 py-4 rounded-xl bg-white/40 hover:bg-white/60 border border-white/20 hover:border-stone-200/50 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                      onClick={() => setIsMobileMenuOpen(false)}
                      style={{
                        animationDelay: `${index * 50}ms`,
                        animation: "slideInFromRight 0.4s ease-out forwards",
                      }}
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-stone-100 to-stone-200/50 group-hover:from-stone-200 group-hover:to-stone-300/50 transition-all duration-300">
                        <Icon className="h-5 w-5 text-stone-600 group-hover:text-stone-700 transition-colors duration-300" />
                      </div>
                      <span className="text-foreground/90 group-hover:text-foreground font-medium transition-colors duration-300">
                        {item.label}
                      </span>
                      <div className="ml-auto w-2 h-2 rounded-full bg-stone-300/50 group-hover:bg-stone-400 transition-all duration-300 group-hover:scale-125" />
                    </a>
                  )
                })}
              </nav>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  )
}
