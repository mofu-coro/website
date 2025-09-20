"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, PawPrint, Scissors, MapPin, Truck, Users, Newspaper, Navigation, Instagram } from "lucide-react"
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
    { href: "https://www.instagram.com/anella_cafe_hakodate/", label: "Instagram", icon: Instagram, external: true },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
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
          <a
            href="https://www.instagram.com/anella_cafe_hakodate/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-colors duration-200 transform hover:scale-105"
            title="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
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
            <div className="container mx-auto px-4 py-4">
              {/* Menu Items */}
              <nav className="space-y-1.5">
                {menuItems.map((item, index) => {
                  const Icon = item.icon
                  const isInstagram = item.label === "Instagram"
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className={`group flex items-center gap-3 px-3 py-2.5 rounded-lg border transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] ${
                        isInstagram 
                          ? "bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 border-purple-200/30" 
                          : "bg-white/40 hover:bg-white/60 border-white/20 hover:border-stone-200/50"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      style={{
                        animationDelay: `${index * 50}ms`,
                        animation: "slideInFromRight 0.4s ease-out forwards",
                      }}
                    >
                      <div className={`flex items-center justify-center w-8 h-8 rounded-md transition-all duration-300 ${
                        isInstagram
                          ? "bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-600 group-hover:to-pink-600"
                          : "bg-gradient-to-br from-stone-100 to-stone-200/50 group-hover:from-stone-200 group-hover:to-stone-300/50"
                      }`}>
                        <Icon className={`h-4 w-4 transition-colors duration-300 ${
                          isInstagram ? "text-white" : "text-stone-600 group-hover:text-stone-700"
                        }`} />
                      </div>
                      <span className="text-sm text-foreground/90 group-hover:text-foreground font-medium transition-colors duration-300">
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
