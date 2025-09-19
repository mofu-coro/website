"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dog,
  Clock,
  Users,
  CheckCircle,
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Shield,
  Zap,
  TreePine,
  Camera,
  AlertTriangle,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const dogRunPlans = [
  {
    name: "お試し利用プラン",
    duration: "30分",
    price: "500円",
    description: "初めての方におすすめ。ドッグランの雰囲気を体験できます",
    features: ["スタッフ同伴", "施設説明", "安全指導", "写真撮影OK", "他の犬との相性チェック"],
    popular: false,
    maxDogs: "1頭",
  },
  {
    name: "スタンダードプラン",
    duration: "60分",
    price: "800円",
    description: "たっぷり遊べる人気のプラン。運動不足解消に最適です",
    features: ["自由遊び", "おもちゃ貸出", "水分補給サポート", "簡単なしつけ指導", "他の犬との交流"],
    popular: true,
    maxDogs: "2頭まで",
  },
  {
    name: "プレミアムプラン",
    duration: "90分",
    price: "1,200円",
    description: "ゆったりと過ごせる贅沢プラン。社会化訓練も含まれます",
    features: ["専用エリア利用", "アジリティ体験", "個別トレーニング", "健康チェック", "写真・動画撮影"],
    popular: false,
    maxDogs: "3頭まで",
  },
]

const facilityFeatures = [
  {
    title: "広々とした安全な環境",
    description: "約300㎡の広いドッグランで、小型犬・大型犬それぞれに適したエリアを完備しています",
    icon: TreePine,
    highlight: "300㎡",
  },
  {
    title: "充実した設備",
    description: "アジリティ器具、水飲み場、日陰スペース、足洗い場など、快適に過ごせる設備が揃っています",
    icon: Zap,
    highlight: "完全装備",
  },
  {
    title: "専門スタッフ常駐",
    description: "ドッグトレーナー資格を持つスタッフが常駐し、安全管理と適切な指導を行います",
    icon: Shield,
    highlight: "資格保有",
  },
]

const safetyRules = [
  "ワクチン接種証明書の提示（狂犬病・混合ワクチン）",
  "利用前の健康チェック（発熱・下痢等がないこと）",
  "リードは必ず持参（入退場時に使用）",
  "他の犬や飼い主様への配慮をお願いします",
  "スタッフの指示に従ってご利用ください",
  "事故・怪我については自己責任となります",
]

export default function DogRunPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px]">
        <Image
          src="/dogs-playing-happily-in-outdoor-dog-run.jpg"
          alt="ドッグランで楽しく遊ぶ犬たちの様子"
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">ドッグラン</h1>
            <p className="text-lg md:text-xl leading-relaxed">
              広々とした安全な環境で、愛犬が自由に走り回れる
              <br />
              専門スタッフ常駐のドッグランで、楽しい時間をお過ごしください
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 space-y-20">
        {/* Usage Plans */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-warm-900">利用プラン</h2>
          <p className="text-center text-warm-700 mb-12 max-w-3xl mx-auto">
            初めての方からリピーターまで、様々なニーズに合わせたプランをご用意しています
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {dogRunPlans.map((plan, index) => (
              <Card
                key={index}
                className={`h-full relative ${plan.popular ? "ring-2 ring-sage-400 shadow-lg" : ""} border-warm-200`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-slate-800 hover:bg-slate-900 text-white">
                    人気No.1
                  </Badge>
                )}
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Dog className="h-5 w-5 text-sage-600" />
                    <Badge variant="outline" className="text-xs border-sage-300 text-sage-700">
                      ドッグラン
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-warm-900">{plan.name}</CardTitle>
                  <div className="flex items-center justify-between text-sm text-warm-600">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {plan.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {plan.maxDogs}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-sage-600">{plan.price}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-warm-700 mb-4">{plan.description}</p>
                  <div className="space-y-2 mb-6">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-warm-700">
                        <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-slate-800 hover:bg-slate-900 text-white">このプランを予約</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Facility Features */}
        <section className="bg-warm-50 -mx-4 px-4 py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-warm-900">施設の特徴</h2>
            <p className="text-center text-warm-700 mb-12 max-w-2xl mx-auto">
              愛犬が安全に楽しく過ごせるよう、充実した設備と専門スタッフでサポートします
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {facilityFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <Card key={index} className="text-center border-warm-200 hover:shadow-lg transition-shadow bg-white">
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
          </div>
        </section>

        {/* Safety Rules */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-warm-900">ご利用にあたって</h2>
          <p className="text-center text-warm-700 mb-12 max-w-2xl mx-auto">
            すべての利用者様に安全で快適にお過ごしいただくため、以下のルールをお守りください
          </p>

          <div className="max-w-4xl mx-auto">
            <Card className="border-amber-200 bg-amber-50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-6 w-6 text-amber-600" />
                  <CardTitle className="text-xl text-warm-900">安全利用のお約束</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {safetyRules.map((rule, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-amber-200 rounded-full flex items-center justify-center text-amber-800 text-sm font-bold mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-warm-700">{rule}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact and Location */}
        <section className="bg-sage-50 -mx-4 px-4 py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-warm-900">ご予約・お問い合わせ</h2>
            <p className="text-center text-warm-700 mb-12 max-w-2xl mx-auto">
              ドッグランのご利用は事前予約制です。お電話またはメールでご予約ください
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
                    <p className="text-lg font-semibold text-sage-600 mb-2">dogrun@inochi-tsunagi.jp</p>
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
                <Camera className="h-10 w-10 text-sage-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-4 text-warm-900">ご予約について</h3>
                <div className="text-warm-700 space-y-2 max-w-2xl mx-auto">
                  <p>• ご利用は完全予約制です（当日予約も空きがあれば可能）</p>
                  <p>• 初回ご利用時は30分前にお越しください（説明・手続きのため）</p>
                  <p>• 雨天時は屋根付きエリアでのご利用となります</p>
                  <p>• 写真・動画撮影は自由ですが、他の利用者様への配慮をお願いします</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
