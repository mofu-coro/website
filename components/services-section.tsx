"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PawPrint, Scissors, MapPin, Truck, Users, ArrowRight } from "lucide-react"

const services = [
  {
    icon: PawPrint,
    title: "保護犬猫＆ふれあい",
    description:
      "日々のケアと、新しい出会いの架け橋。見学・ふれあい大歓迎。楽しむことが、そのまま支援に繋がります。",
    features: ["ふれあい体験", "譲渡前面談", "室内ミニドッグラン"],
    buttonText: "ふれあい体験案内",
    href: "/services/shelter",
    gradient: "from-stone-50/80 to-neutral-50/60",
    iconBg: "bg-stone-100/90",
    iconColor: "text-stone-600",
    accentColor: "border-stone-200/70",
    buttonColor: "bg-stone-700 hover:bg-stone-800",
  },
  {
    icon: Scissors,
    title: "トリミング・一時預かり",
    description:
      "経験豊富なトリマーによる丁寧なケアと、安心・安全な一時預かりサービスを提供。",
    features: ["カット・シャンプー", "爪切り・耳掃除", "一時預かり"],
    buttonText: "トリミング・一時預かり予約",
    href: "/services/trimming",
    gradient: "from-slate-50/80 to-gray-50/60",
    iconBg: "bg-slate-100/90",
    iconColor: "text-slate-600",
    accentColor: "border-slate-200/70",
    buttonColor: "bg-slate-700 hover:bg-slate-800",
  },
  {
    icon: MapPin,
    title: "ドッグラン",
    description:
      "広々とした安全な屋外スペースで、愛犬が自由に走り回れます。安心の小型犬・大型犬エリア分け。",
    features: ["小型犬エリア", "大型犬エリア", "屋根付きエリア"],
    buttonText: "詳細はこちら",
    href: "/services/dogrun",
    gradient: "from-zinc-50/80 to-stone-50/60",
    iconBg: "bg-zinc-100/90",
    iconColor: "text-zinc-600",
    accentColor: "border-zinc-200/70",
    buttonColor: "bg-zinc-700 hover:bg-zinc-800",
  },
  {
    icon: Truck,
    title: "キッチンカー",
    description:
      "店舗前駐車場にて、コーヒーと軽食、こだわりのドッグトリーツを販売。売上の一部は保護活動に。",
    features: ["コーヒー", "軽食メニュー", "ドッグトリーツ"],
    buttonText: "詳細はこちら",
    href: "/services/kitchen",
    gradient: "from-neutral-50/80 to-stone-50/60",
    iconBg: "bg-neutral-100/90",
    iconColor: "text-neutral-600",
    accentColor: "border-neutral-200/70",
    buttonColor: "bg-neutral-700 hover:bg-neutral-800",
  },
  {
    icon: Users,
    title: "就労継続支援B型",
    description: "動物のケアを通じた就労訓練プログラム。一人ひとりのペースに合わせて、社会参加と自立をサポートします。",
    features: ["動物ケア訓練", "社会復帰支援", "個別サポート"],
    buttonText: "見学・申込",
    href: "/services/employment-support-b",
    gradient: "from-gray-50/80 to-slate-50/60",
    iconBg: "bg-gray-100/90",
    iconColor: "text-gray-600",
    accentColor: "border-gray-200/70",
    buttonColor: "bg-gray-700 hover:bg-gray-800",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-white via-gray-50/30 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
            5つのサービス
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            動物愛護の精神に基づいた多様なサービスを通じて、
            <br />
            人と動物が共に幸せに暮らせる社会づくりに貢献します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className={`group h-full flex flex-col transition-all duration-500 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-2 border ${service.accentColor} bg-gradient-to-br ${service.gradient} backdrop-blur-sm hover:bg-white/95 rounded-xl`}
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`mx-auto mb-6 p-4 ${service.iconBg} rounded-2xl w-fit transition-all duration-500 group-hover:scale-105 shadow-sm group-hover:shadow-md`}
                  >
                    <Icon className={`h-10 w-10 ${service.iconColor}`} />
                  </div>

                  <CardTitle className="text-xl font-bold mb-3 text-balance leading-tight text-gray-800">
                    {service.title}
                  </CardTitle>

                  <CardDescription className="text-sm text-pretty leading-relaxed text-gray-600 mb-4">
                    {service.description}
                  </CardDescription>

                  <div className="flex flex-wrap gap-2 justify-center">
                    {service.features.map((feature, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="text-xs px-3 py-1.5 bg-white/90 text-gray-600 border border-gray-200/80 hover:bg-white hover:border-gray-300 transition-all duration-300 shadow-sm rounded-full font-medium"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col justify-end space-y-3 pt-0">
                  <Button
                    className={`w-full group/btn ${service.buttonColor} text-white shadow-md transition-all duration-300 hover:shadow-lg border-0 font-medium rounded-lg`}
                    onClick={() => (window.location.href = service.href)}
                  >
                    <span className="flex items-center justify-center gap-2">
                      {service.buttonText}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </span>
                  </Button>

                  {service.additionalLink && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`text-sm ${service.iconColor} hover:bg-white/80 transition-all duration-300 font-medium rounded-lg`}
                      onClick={() => (window.location.href = service.additionalLink.href)}
                    >
                      {service.additionalLink.text}
                    </Button>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
