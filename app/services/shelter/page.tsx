"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Clock, Users, CheckCircle, ArrowLeft, MessageCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const interactionPrograms = [
  {
    name: "ふれあい体験",
    duration: "時間制限なし",
    price: "大人 980円 / 子供 780円",
    description: "保護犬猫との自由なふれあいをお楽しみいただけます",
    features: ["犬猫との自由なふれあい", "写真撮影OK", "時間制限なし", "専門スタッフ常駐"],
    popular: false,
    maxPeople: "制限なし",
  },
  {
    name: "ふれあい＋室内ドッグラン",
    duration: "時間制限なし",
    price: "ふれあい料金＋500円",
    description: "ふれあい体験に加えて、愛犬連れで室内ドッグランもご利用いただけます",
    features: ["犬猫とのふれあい", "愛犬連れOK", "室内ドッグラン利用", "雨の日も安心"],
    popular: true,
    maxPeople: "制限なし",
  },
  {
    name: "サブスクプラン",
    duration: "通い放題",
    price: "月額 2,980円",
    description: "ふれあいと室内ドッグランが1ヶ月間通い放題のお得なプランです",
    features: ["ふれあい通い放題", "室内ドッグラン通い放題", "愛犬連れOK", "月額固定料金"],
    popular: false,
    maxPeople: "制限なし",
  },
]

const ourInitiatives = [
  {
    title: "全国で救済した命",
    description:
      "アネラカフェ全店舗で、これまでに2,000頭を超える保護犬猫の新しい家族を見つけ、幸せな生活をサポートしてきました",
    icon: Heart,
    number: "2,000+",
  },
]

export default function ShelterPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-[60vh] min-h-[400px]">
        <Image
          src="/anella-cafe-storefront.jpg"
          alt="ANELLA CAFEの温かい外観"
          fill
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/20" />

        {/* Sophisticated back button positioned in top-left */}
        <Link
          href="/"
          className="absolute top-20 left-6 z-10 inline-flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full text-white hover:text-white hover:bg-black/60 transition-all duration-300 border border-white/40 shadow-xl"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="text-sm font-medium">ホーム</span>
        </Link>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <div className="mb-4">
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">保護犬猫ふれあい</h1>
            <p className="text-lg md:text-xl leading-relaxed">
              保護された犬猫たちとの心温まるふれあい体験を通じて、
              <br />
              動物愛護の心を育み、新しい家族との運命的な出会いをサポートします
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 space-y-20">
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-warm-900">ふれあい体験メニュー</h2>
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <p className="text-lg text-warm-700 mb-4">
              初めての方からご家族まで、それぞれに合ったメニューをご用意しています
            </p>
            <div className="bg-gradient-to-r from-sage-50 to-warm-50 border border-sage-200 rounded-lg p-6 shadow-sm">
              <div className="text-center mb-4">
                <div className="bg-gradient-to-r from-warm-100 to-orange-100 border-2 border-warm-300 px-4 py-2 rounded-full inline-block shadow-md">
                  <p className="font-bold text-lg text-warm-800">🐾 譲渡をお考えでない方も大歓迎です 🐾</p>
                </div>
              </div>
              <p className="text-sage-700 text-center">
                ふれあい体験の参加費は、保護犬猫たちの医療費や日々のケアに使われます。
                <br />
                皆様のご参加が、より多くの命を救うことに繋がります。
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {interactionPrograms.map((program, index) => {
              const colorSchemes = [
                {
                  gradient: "from-stone-50/80 to-neutral-50/60",
                  iconBg: "bg-stone-100/90",
                  iconColor: "text-stone-600",
                  accentColor: "border-stone-200/70",
                  textColor: "text-stone-900",
                  subTextColor: "text-stone-600",
                  priceColor: "text-stone-700",
                },
                {
                  gradient: "from-slate-50/80 to-gray-50/60",
                  iconBg: "bg-slate-100/90",
                  iconColor: "text-slate-600",
                  accentColor: "border-slate-200/70",
                  textColor: "text-slate-900",
                  subTextColor: "text-slate-600",
                  priceColor: "text-slate-700",
                },
                {
                  gradient: "from-zinc-50/80 to-stone-50/60",
                  iconBg: "bg-zinc-100/90",
                  iconColor: "text-zinc-600",
                  accentColor: "border-zinc-200/70",
                  textColor: "text-zinc-900",
                  subTextColor: "text-zinc-600",
                  priceColor: "text-zinc-700",
                },
              ]
              const colors = colorSchemes[index]

              return (
                <Card
                  key={index}
                  className={`h-full relative bg-gradient-to-br ${colors.gradient} ${colors.accentColor} shadow-md hover:shadow-lg transition-all duration-300`}
                >
                  <CardHeader className="pb-4">
                    <CardTitle className={`text-xl mb-4 ${colors.textColor}`}>{program.name}</CardTitle>
                    <div className={`flex items-center justify-between text-sm ${colors.subTextColor} mb-4`}>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {program.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {program.maxPeople}
                      </span>
                    </div>
                    <div className={`text-2xl font-bold ${colors.priceColor}`}>{program.price}</div>
                  </CardHeader>
                  <CardContent>
                    <p className={`${colors.subTextColor} mb-6`}>{program.description}</p>
                    <div className="space-y-3">
                      {program.features.map((feature, idx) => (
                        <div key={idx} className={`flex items-center gap-3 text-sm ${colors.subTextColor}`}>
                          <CheckCircle className={`h-4 w-4 ${colors.iconColor} flex-shrink-0`} />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-warm-900">体験の様子</h2>
            <p className="text-lg text-warm-700 max-w-2xl mx-auto">
              実際のふれあい体験の様子をご覧ください。温かい雰囲気の中で、保護犬猫たちとの素敵な時間をお過ごしいただけます。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Image
                src="/rescue-dogs-and-cats-in-a-warm--welcoming-shelter-.jpg"
                alt="温かい雰囲気の保護犬猫ふれあいスペース"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-bold text-lg mb-1">ふれあいスペース</h3>
                <p className="text-sm">広々とした清潔な空間で安心してお過ごしいただけます</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Image
                src="/friendly-rescue-dog-golden-retriever.jpg"
                alt="人懐っこい保護犬との触れ合い"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-bold text-lg mb-1">犬とのふれあい</h3>
                <p className="text-sm">人懐っこい保護犬たちが皆様をお待ちしています</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Image
                src="/cute-rescue-cat-calico.jpg"
                alt="可愛い保護猫との触れ合い"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-bold text-lg mb-1">猫とのふれあい</h3>
                <p className="text-sm">個性豊かな保護猫たちとの癒しの時間</p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative -mx-[50vw] left-[50%] right-[50%] w-[100vw] py-20 bg-slate-100 overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-sage-100/30 rounded-full blur-3xl -translate-x-48 -translate-y-48" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-warm-100/30 rounded-full blur-3xl translate-x-48 translate-y-48" />

          <div className="container mx-auto px-4 relative z-10">
            {/* Header Section */}
            <div className="text-center mb-16">
              {/* Title with Logo */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                  私たちの取り組み
                </h2>
                <img 
                  src="/anella-logo.png" 
                  alt="ANELLA Group Logo" 
                  className="h-20 md:h-24 object-contain"
                />
              </div>
              
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
                全国に広がるアネラカフェネットワークとして、保護犬猫たちに新しい家族との出会いの場を提供し、
                動物愛護の輪を広げることで、より良い社会の実現を目指しています。
              </p>
              
              {/* Enhanced ANELLA Mission Statement */}
              <div className="bg-gradient-to-r from-sage-100 via-white to-sage-100 rounded-3xl p-8 shadow-xl border-2 border-sage-200 max-w-5xl mx-auto mb-8">
                <div className="mb-4">
                  <span className="inline-block bg-sage-200 text-sage-800 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
                    Our Mission
                  </span>
                </div>
                <p className="text-2xl font-bold text-gray-800 italic text-center mb-3">
                  "Change One Life Forever"
                </p>
                <p className="text-lg text-gray-700 text-center font-medium">
                  １頭を救っても世界は変わらないが、その１頭の世界は永遠に変わるだろう。
                </p>
              </div>
            </div>

            {/* Main Impact Statistics */}
            <div className="max-w-6xl mx-auto mb-16">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-sage-200/50 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Left side - Main statistic */}
                  <div className="p-12 relative overflow-hidden" style={{ backgroundColor: 'rgb(185, 219, 224)' }}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl translate-x-16 -translate-y-16" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl -translate-x-12 translate-y-12" />

                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-6">
                        <a 
                          href="https://anella-group.co.jp/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-white/60 p-3 rounded-full hover:bg-white/80 transition-colors duration-200"
                        >
                          <img 
                            src="/anella-logo.png" 
                            alt="ANELLA Group Logo" 
                            className="h-8 w-8 object-contain"
                          />
                        </a>
                        <span className="text-gray-800 font-medium">全国での実績</span>
                      </div>

                      <div className="mb-6">
                        <div className="text-6xl md:text-7xl font-bold mb-2 text-gray-800">
                          2,000+
                        </div>
                        <div className="text-2xl font-semibold text-gray-800">救済された命</div>
                      </div>

                      <p className="text-gray-700 text-lg leading-relaxed">
                        アネラカフェ全店舗で、これまでに2,000頭を超える保護犬猫の新しい家族を見つけ、幸せな生活をサポートしてきました。
                        <a 
                          href="https://anella-group.co.jp/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-gray-800 underline decoration-1 underline-offset-2 transition-colors duration-200 ml-1"
                        >
                          アネラグループ
                        </a>
                        の取り組みをご覧ください。
                      </p>
                    </div>
                  </div>

                  {/* Right side - Network info */}
                  <div className="p-12 bg-gradient-to-br from-white to-warm-50">
                    <div className="h-full flex flex-col justify-center">
                      <div className="mb-8">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-sage-100 p-3 rounded-full">
                            <Users className="h-6 w-6 text-sage-700" />
                          </div>
                          <span className="text-sage-700 font-semibold text-lg">全国ネットワーク</span>
                        </div>
                        <div className="text-4xl font-bold text-sage-800 mb-2">10+ 店舗</div>
                        <p className="text-warm-700 mb-6">
                          日本全国に展開するフランチャイズネットワークとして、各地域で動物愛護活動を推進
                        </p>
                        
                        {/* Store List Link */}
                        <div className="text-center">
                          <a 
                            href="https://anella-group.co.jp/our-business#base" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-sage-200 hover:bg-sage-300 text-sage-800 px-5 py-2.5 rounded-full font-medium transition-colors duration-200 shadow-md hover:shadow-lg text-sm"
                          >
                            <span>店舗一覧</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-sage-100 to-warm-100 rounded-2xl p-6 border border-sage-200">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="bg-sage-200 p-2 rounded-full">
                            <Heart className="h-5 w-5 text-sage-800" />
                          </div>
                        </div>
                        <p className="text-sage-700 leading-relaxed">
                          専門スタッフによる質の高いケアで、地域の動物愛護活動に貢献し、一頭でも多くの命を救うために日々取り組んでいます
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Statement */}
          </div>
        </section>

        <section>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-warm-900">お問い合わせ</h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-sage-200 bg-gradient-to-br from-sage-50 to-sage-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-10 text-center">
                <div className="mb-8">
                  <div className="bg-white p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg border-4 border-sage-200">
                    <MessageCircle className="h-10 w-10 text-sage-600 fill-sage-100" />
                  </div>
                </div>

                <h3 className="font-bold text-3xl mb-6 text-warm-900">LINE譲渡相談</h3>
                <p className="text-warm-700 mb-10 leading-relaxed text-lg">
                  譲渡に関するご質問やご相談を、LINEで気軽にお受けしています。
                  <br />
                  動物の詳細情報や譲渡条件についてもお答えします。
                </p>

                {/* Two Options Layout */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10">
                  {/* QR Code Option */}
                  <div className="flex-1 text-center">
                    <div className="bg-white p-6 rounded-2xl shadow-md inline-block mb-4">
                      <Image
                        src="https://qr-official.line.me/gs/M_480aaqto_GW.png?oat_content=qr"
                        alt="LINE友だち追加QRコード"
                        width={160}
                        height={160}
                        className="mx-auto rounded-lg"
                      />
                    </div>
                    <p className="text-sm font-medium text-sage-800">QRコードを読み取り</p>
                  </div>

                  {/* OR Divider */}
                  <div className="flex items-center">
                    <div className="bg-sage-200 rounded-full px-4 py-2">
                      <span className="text-sage-700 font-bold text-sm">もしくは</span>
                    </div>
                  </div>

                  {/* Button Option */}
                  <div className="flex-1 text-center">
                    <a
                      href="https://lin.ee/beSw4Fv"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block transform hover:scale-105 transition-transform duration-200 mb-4"
                    >
                      <img
                        src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
                        alt="友だち追加"
                        height={50}
                        className="hover:opacity-90 transition-opacity shadow-md rounded"
                      />
                    </a>
                    <p className="text-sm font-medium text-sage-800">ボタンをタップ</p>
                  </div>
                </div>

                {/* Reception Hours */}
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-md">
                  <div className="flex items-center justify-center mb-3">
                    <div className="bg-sage-100 p-2 rounded-full mr-3">
                      <MessageCircle className="h-5 w-5 text-sage-800" />
                    </div>
                    <p className="text-lg font-bold text-sage-800">受付時間</p>
                  </div>
                  <p className="text-sage-700 font-medium text-xl">毎日 9:00-20:00</p>
                  <p className="text-sm text-sage-600 mt-2">お気軽にメッセージをお送りください</p>
                </div>
              </CardContent>
            </Card>
          </div>

        </section>
      </div>
    </div>
  )
}
