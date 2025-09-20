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
    name: "単発利用プラン",
    duration: "時間無制限",
    price: "500円",
    description: "1頭での利用プラン。時間を気にせずゆっくりとお過ごしいただけます",
    features: ["時間無制限", "自由遊び", "安全管理"],
    popular: false,
    maxDogs: "1頭",
  },
  {
    name: "専用エリア貸切プラン",
    duration: "1時間",
    price: "980円",
    description: "他の犬を気にせず専用エリアでのびのび遊べるプラン",
    features: ["専用エリア貸切", "頭数問わず", "プライベート空間"],
    popular: false,
    maxDogs: "頭数問わず",
  },
  {
    name: "使い放題プラン",
    duration: "無制限",
    price: "2,980円",
    description: "1日中何度でも利用可能な使い放題プラン。複数頭での利用にもおすすめです",
    features: ["時間無制限", "頭数問わず", "何度でも入退場可能"],
    popular: true,
    maxDogs: "頭数問わず",
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
                  <div className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-warm-700">
                        <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
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
              {/* Image Placeholder 1 */}
              <div className="text-center">
                <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <Camera className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-warm-900 mb-2">広々とした安全な環境</h3>
                <p className="text-warm-700">約100㎡の広いドッグランで、小型犬・中型犬それぞれに適したエリアを完備しています</p>
              </div>
              
              {/* Image Placeholder 2 */}
              <div className="text-center">
                <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <Camera className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-warm-900 mb-2">充実した設備</h3>
                <p className="text-warm-700">日陰スペース、足洗い場など、快適に過ごせる設備が揃っています</p>
              </div>
              
              {/* Image Placeholder 3 */}
              <div className="text-center">
                <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <Camera className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-warm-900 mb-2">専門スタッフ常駐</h3>
                <p className="text-warm-700">愛玩動物看護師が店舗に常駐しているため、適切な安全管理と対応が可能です</p>
              </div>
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

        {/* Contact Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-warm-900">お問い合わせ</h2>
            <p className="text-lg text-warm-700 max-w-3xl mx-auto">
              ドッグランに関するご質問がございましたら、お気軽にお問い合わせください
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              {/* QR Code */}
              <div className="text-center">
                <img
                  src="https://qr-official.line.me/gs/M_480aaqto_GW.png?oat_content=qr"
                  alt="LINE友だち追加QRコード"
                  width={120}
                  height={120}
                  className="mx-auto rounded-lg shadow-sm border bg-white p-3"
                />
                <p className="text-xs text-muted-foreground mt-2">QRコードを読み取り</p>
              </div>

              {/* OR Divider */}
              <div className="flex items-center">
                <div className="bg-muted rounded-full px-3 py-1">
                  <span className="text-muted-foreground font-medium text-xs">もしくは</span>
                </div>
              </div>

              {/* Friend Add Button */}
              <div className="text-center">
                <a
                  href="https://lin.ee/beSw4Fv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transform hover:scale-105 transition-transform duration-200"
                >
                  <img
                    src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
                    alt="友だち追加"
                    height={40}
                    className="hover:opacity-90 transition-opacity shadow-sm rounded"
                  />
                </a>
                <p className="text-xs text-muted-foreground mt-2">ボタンをタップ</p>
              </div>
            </div>

            <div className="text-center pt-6 space-y-1">
              <p className="text-xs text-muted-foreground">※初回ご利用時は10分前にお越しください（説明・手続きのため）</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
