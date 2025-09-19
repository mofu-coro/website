"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Scissors,
  Clock,
  Heart,
  CheckCircle,
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Star,
  Shield,
  Sparkles,
  Calendar,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const trimmingServices = [
  {
    name: "基本トリミングコース",
    duration: "90-120分",
    price: "小型犬: 4,500円〜\n中型犬: 6,000円〜\n大型犬: 8,500円〜",
    description: "シャンプー、カット、爪切り、耳掃除を含む基本的なグルーミング",
    features: ["薬用シャンプー使用", "爪切り・耳掃除", "基本カット", "ブロー仕上げ", "健康チェック"],
    popular: true,
    category: "トリミング",
  },
  {
    name: "プレミアムスパコース",
    duration: "150-180分",
    price: "小型犬: 6,500円〜\n中型犬: 8,500円〜\n大型犬: 11,000円〜",
    description: "高級シャンプー＆トリートメントで毛艶と健康をサポート",
    features: ["オーガニックシャンプー", "毛質改善トリートメント", "アロマバス", "マッサージ", "写真撮影サービス"],
    popular: false,
    category: "トリミング",
  },
  {
    name: "猫専用グルーミング",
    duration: "60-90分",
    price: "短毛種: 3,500円〜\n長毛種: 5,000円〜",
    description: "猫のストレスを最小限に抑えた専門的なグルーミング",
    features: ["猫専用個室", "ストレス軽減技術", "毛玉除去", "部分カット対応", "猫専門スタッフ"],
    popular: false,
    category: "トリミング",
  },
]

const temporaryCareServices = [
  {
    name: "日帰り一時預かり",
    duration: "8時間まで",
    price: "小型犬・猫: 2,500円\n中型犬: 3,000円\n大型犬: 3,500円",
    description: "お出かけや急用の際に安心してお預けいただけます",
    features: ["個別ケージ完備", "お散歩サービス", "食事・おやつ対応", "健康観察", "写真報告"],
    popular: true,
    category: "一時預かり",
  },
  {
    name: "1泊2日預かり",
    duration: "最大48時間",
    price: "小型犬・猫: 4,500円\n中型犬: 5,500円\n大型犬: 6,500円",
    description: "旅行や出張時の宿泊預かりサービス",
    features: ["24時間見守り", "朝夕お散歩", "食事管理", "投薬対応", "毎日写真報告"],
    popular: false,
    category: "一時預かり",
  },
  {
    name: "長期預かり（3日以上）",
    duration: "3日〜1ヶ月",
    price: "1日あたり\n小型犬・猫: 2,200円\n中型犬: 2,700円\n大型犬: 3,200円",
    description: "長期出張や入院時の安心預かりサービス",
    features: ["割引料金適用", "定期健康チェック", "運動・遊び時間", "個別ケア対応", "週2回写真報告"],
    popular: false,
    category: "一時預かり",
  },
]

const facilityFeatures = [
  {
    title: "清潔で安全な環境",
    description: "毎日の清掃・消毒で清潔な環境を維持。動物たちが安心して過ごせる設備を完備しています",
    icon: Shield,
    highlight: "毎日清掃",
  },
  {
    title: "経験豊富なスタッフ",
    description: "JKC認定トリマーと愛玩動物看護師が在籍。動物の健康と美容の両面からサポートします",
    icon: Star,
    highlight: "資格保有",
  },
  {
    title: "個別対応サービス",
    description: "それぞれの動物の性格や体調に合わせた個別ケア。ストレスを最小限に抑えたサービスを提供",
    icon: Heart,
    highlight: "オーダーメイド",
  },
]

export default function TrimmingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px]">
        <Image
          src="/professional-dog-grooming-session.jpg"
          alt="プロのトリマーによる犬のグルーミングの様子"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">トリミング・一時預かり</h1>
            <p className="text-lg md:text-xl leading-relaxed">
              プロのトリマーによる丁寧なグルーミングと、
              <br />
              安心・安全な一時預かりサービスで大切な家族をサポートします
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 space-y-20">
        {/* Trimming Services */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-warm-900">トリミングサービス</h2>
          <p className="text-center text-warm-700 mb-12 max-w-3xl mx-auto">
            JKC認定トリマーによる専門的なグルーミングで、ペットの健康と美しさをサポートします
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            {trimmingServices.map((service, index) => (
              <Card
                key={index}
                className={`h-full relative ${service.popular ? "ring-2 ring-sage-400 shadow-lg" : ""} border-warm-200`}
              >
                {service.popular && (
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-sage-600 hover:bg-sage-700">
                    人気No.1
                  </Badge>
                )}
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Scissors className="h-5 w-5 text-sage-600" />
                    <Badge variant="outline" className="text-xs border-sage-300 text-sage-700">
                      {service.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-warm-900">{service.name}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-warm-600">
                    <Clock className="h-4 w-4" />
                    {service.duration}
                  </div>
                  <div className="text-sm font-bold text-sage-600 whitespace-pre-line">{service.price}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-warm-700 mb-4">{service.description}</p>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-warm-700">
                        <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-warm-600 hover:bg-warm-700">予約する</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Temporary Care Services */}
        <section className="bg-warm-50 -mx-4 px-4 py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-warm-900">一時預かりサービス</h2>
            <p className="text-center text-warm-700 mb-12 max-w-3xl mx-auto">
              愛玩動物看護師による24時間体制の見守りで、安心してお預けいただけます
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {temporaryCareServices.map((service, index) => (
                <Card
                  key={index}
                  className={`h-full relative ${service.popular ? "ring-2 ring-sage-400 shadow-lg" : ""} border-warm-200 bg-white`}
                >
                  {service.popular && (
                    <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-sage-600 hover:bg-sage-700">
                      人気No.1
                    </Badge>
                  )}
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-5 w-5 text-sage-600" />
                      <Badge variant="outline" className="text-xs border-sage-300 text-sage-700">
                        {service.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-warm-900">{service.name}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-warm-600">
                      <Clock className="h-4 w-4" />
                      {service.duration}
                    </div>
                    <div className="text-sm font-bold text-sage-600 whitespace-pre-line">{service.price}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-warm-700 mb-4">{service.description}</p>
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-warm-700">
                          <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Button className="w-full bg-warm-600 hover:bg-warm-700">予約する</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Facility Features */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-warm-900">私たちの特徴</h2>
          <p className="text-center text-warm-700 mb-12 max-w-2xl mx-auto">
            専門スタッフと充実した設備で、大切なペットに最高のケアを提供します
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilityFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="text-center border-warm-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-4 bg-warm-100 rounded-full w-fit">
                      <Icon className="h-8 w-8 text-warm-600" />
                    </div>
                    <div className="text-2xl font-bold text-sage-600 mb-2">{feature.highlight}</div>
                    <CardTitle className="text-xl text-warm-900">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-warm-700">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Contact and Location */}
        <section className="bg-sage-50 -mx-4 px-4 py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-warm-900">ご予約・お問い合わせ</h2>
            <p className="text-center text-warm-700 mb-12 max-w-2xl mx-auto">
              お電話またはメールでお気軽にご予約・ご相談ください
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="border-warm-200">
                  <CardContent className="p-8 text-center">
                    <Phone className="h-10 w-10 text-warm-600 mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2 text-warm-900">お電話でのご予約</h3>
                    <p className="text-2xl font-bold text-sage-600 mb-2">03-1234-5678</p>
                    <p className="text-sm text-warm-600 mb-1">受付時間: 平日 9:00-18:00</p>
                    <p className="text-sm text-warm-600">土日祝 10:00-17:00</p>
                  </CardContent>
                </Card>
                <Card className="border-warm-200">
                  <CardContent className="p-8 text-center">
                    <Mail className="h-10 w-10 text-warm-600 mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2 text-warm-900">メールでのお問い合わせ</h3>
                    <p className="text-lg font-semibold text-sage-600 mb-2">trimming@inochi-tsunagi.jp</p>
                    <p className="text-sm text-warm-600 mb-1">24時間受付</p>
                    <p className="text-sm text-warm-600">返信: 1営業日以内</p>
                  </CardContent>
                </Card>
              </div>

              {/* Location and Hours */}
              <Card className="border-warm-200">
                <CardContent className="p-8">
                  <MapPin className="h-12 w-12 text-warm-600 mx-auto mb-4" />
                  <h3 className="font-bold text-xl mb-4 text-warm-900 text-center">施設情報</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-warm-900 mb-2">所在地</h4>
                      <p className="text-warm-700">
                        〒123-4567
                        <br />
                        東京都○○区○○町1-2-3
                        <br />
                        いのちつなぎ動物愛護センター
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-warm-900 mb-2">営業時間</h4>
                      <div className="text-warm-700 space-y-1">
                        <p>平日: 10:00 - 18:00</p>
                        <p>土日祝: 9:00 - 17:00</p>
                        <p className="text-sm text-warm-600">定休日: 毎週水曜日</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-warm-900 mb-2">駐車場</h4>
                      <p className="text-warm-700">無料駐車場 20台完備</p>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full mt-6 border-warm-300 text-warm-700 hover:bg-warm-50 bg-transparent"
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    地図を見る
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Booking Notice */}
            <Card className="border-sage-300 bg-sage-100">
              <CardContent className="p-8 text-center">
                <Sparkles className="h-10 w-10 text-sage-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-4 text-warm-900">ご予約について</h3>
                <div className="text-warm-700 space-y-2 max-w-2xl mx-auto">
                  <p>• トリミングは前日までのご予約をお願いします</p>
                  <p>• 一時預かりは当日でも空きがあればお受けできます</p>
                  <p>• 初回ご利用時は事前カウンセリングを行います</p>
                  <p>• ワクチン接種証明書をお持ちください</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
