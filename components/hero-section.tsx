"use client"

import { PawPrint, Scissors, MapPin, Truck, Users } from "lucide-react"

const services = [
  {
    icon: PawPrint,
    title: "保護犬猫＆ふれあい",
    subtitle: "Shelter & Meet",
    description: "新しい家族との出会いの場",
    href: "/services/shelter",
  },
  {
    icon: Scissors,
    title: "トリミング・一時預かり",
    subtitle: "Grooming & Care",
    description: "プロのケアで愛犬を美しく",
    href: "/services/trimming",
  },
  {
    icon: MapPin,
    title: "ドッグラン",
    subtitle: "Dog Run",
    description: "安全な屋外で自由に遊ぶ",
    href: "/services/dogrun",
  },
  {
    icon: Truck,
    title: "キッチンカー",
    subtitle: "Food Truck",
    description: "美味しいコーヒーと軽食",
    href: "/services/kitchen",
  },
  {
    icon: Users,
    title: "就労支援B型",
    subtitle: "Employment Support",
    description: "動物ケアを通じた就労訓練",
    href: "/services/btype",
  },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/rescue-dogs-and-cats-in-a-warm--welcoming-shelter-.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center w-full max-w-7xl mx-auto px-4 pt-20">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 text-balance">
          Hakodate's Home for Dogs & Cats
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed text-pretty">
          北海道函館市から、いのちが続く仕組みを。
        </p>

        <p className="text-base md:text-lg text-white/80 mb-6 font-medium">
          ↓各サービスをクリック
        </p>

        {/* Services List - Clean Typography */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <a
                key={index}
                href={service.href}
                className="group flex items-center gap-3 text-white/85 hover:text-white transition-all duration-300 cursor-pointer"
              >
                <Icon className="h-5 w-5 text-white/70 group-hover:text-white/90 transition-colors duration-300" />
                <span className="text-base md:text-lg font-medium underline underline-offset-4 decoration-white/30 group-hover:decoration-white/90 transition-all duration-300">
                  {service.title}
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
