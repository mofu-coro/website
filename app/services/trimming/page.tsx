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
  MapPin,
  Star,
  Shield,
  Sparkles,
  Calendar,
  MessageCircle,
  Home,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Dog trimming menu data
const dogTrimmingMenu = [
  {
    breed: "チワワ（スムース）",
    quickShampoo: "¥2,200",
    shampooCourse: "¥3,300〜",
    cutCourse: "—",
  },
  {
    breed: "チワワ（ロング）",
    quickShampoo: "¥2,200",
    shampooCourse: "¥3,850〜",
    cutCourse: "¥4,950〜",
  },
  {
    breed: "Mピンシャー",
    quickShampoo: "¥2,200",
    shampooCourse: "¥3,850〜",
    cutCourse: "—",
  },
  {
    breed: "Mダックス",
    quickShampoo: "¥2,750",
    shampooCourse: "¥4,400〜",
    cutCourse: "¥5,500〜",
  },
  {
    breed: "パグ",
    quickShampoo: "¥2,750",
    shampooCourse: "¥4,400〜",
    cutCourse: "—",
  },
  {
    breed: "ボストンテリア",
    quickShampoo: "¥2,750",
    shampooCourse: "¥4,400〜",
    cutCourse: "—",
  },
  {
    breed: "パピヨン",
    quickShampoo: "¥3,300",
    shampooCourse: "¥4,950〜",
    cutCourse: "¥6,050〜",
  },
  {
    breed: "ポメラニアン",
    quickShampoo: "¥3,300",
    shampooCourse: "¥5,280〜",
    cutCourse: "¥6,380〜",
  },
  {
    breed: "ヨーキー",
    quickShampoo: "¥3,300",
    shampooCourse: "¥5,280〜",
    cutCourse: "¥6,600〜",
  },
  {
    breed: "マルチーズ",
    quickShampoo: "¥3,300",
    shampooCourse: "¥5,280〜",
    cutCourse: "¥6,600〜",
  },
  {
    breed: "シーズー",
    quickShampoo: "¥3,300",
    shampooCourse: "¥5,280〜",
    cutCourse: "¥6,600〜",
  },
  {
    breed: "ペキニーズ",
    quickShampoo: "¥3,300",
    shampooCourse: "¥5,280〜",
    cutCourse: "¥6,600〜",
  },
  {
    breed: "キャバリア",
    quickShampoo: "¥3,300",
    shampooCourse: "¥5,280〜",
    cutCourse: "¥6,930〜",
  },
  {
    breed: "トイプードル",
    quickShampoo: "¥3,300",
    shampooCourse: "¥5,830〜",
    cutCourse: "¥7,700〜",
  },
  {
    breed: "Mシュナウザー",
    quickShampoo: "¥3,300",
    shampooCourse: "¥5,830〜",
    cutCourse: "¥7,700〜",
  },
  {
    breed: "ビーグル",
    quickShampoo: "¥4,400",
    shampooCourse: "¥6,600〜",
    cutCourse: "—",
  },
  {
    breed: "柴",
    quickShampoo: "¥4,400",
    shampooCourse: "¥6,600〜",
    cutCourse: "—",
  },
  {
    breed: "コーギー",
    quickShampoo: "¥4,400",
    shampooCourse: "¥6,600〜",
    cutCourse: "¥8,250〜",
  },
  {
    breed: "シェルティ",
    quickShampoo: "¥5,500",
    shampooCourse: "¥7,700〜",
    cutCourse: "¥8,800〜",
  },
  {
    breed: "ボーダーコリー",
    quickShampoo: "¥5,500",
    shampooCourse: "¥7,700〜",
    cutCourse: "¥8,800〜",
  },
]

// Cat trimming menu data
const catTrimmingMenu = [
  {
    breed: "短毛種",
    quickShampoo: "¥3,300〜",
    shampooCourse: "¥4,950〜",
    cutCourse: "¥6,050〜",
  },
  {
    breed: "長毛種",
    quickShampoo: "¥4,400〜",
    shampooCourse: "¥6,600〜",
    cutCourse: "¥8,250〜",
  },
]

// Option menu items
const optionMenuItems = [
  { name: "ひげカット", price: "¥330" },
  { name: "部分ケア", price: "¥550〜" },
  { name: "部分カット", price: "¥550〜" },
  { name: "オールシザー", price: "¥1,100〜" },
  { name: "デザインカット", price: "¥1,100〜" },
  { name: "足先バリカン", price: "¥550〜" },
  { name: "毛玉取り", price: "¥550〜" },
  { name: "各種エステパック", price: "¥1,100〜" },
  { name: "炭酸浴・アロマ温浴", price: "¥770〜" },
  { name: "薬浴", price: "¥770〜" },
  { name: "トリートメント", price: "¥550〜" },
  { name: "オイルクレンジング", price: "¥550〜" },
  { name: "シャンプーグレードアップ", price: "¥550〜" },
  { name: "写真プリント", price: "¥110" },
  { name: "太さで料金 ★超小型5kg〜★小型7kg〜★中型10kg〜", price: "¥330〜" },
]

const temporaryCareServices = [
  {
    name: "日帰り一時預かり",
    duration: "8時間まで",
    price: "小型犬: 2,500円\n中型犬: 3,000円\n大型犬: 3,500円",
    description: "お出かけや急用の際に安心してお預けいただけます",
    features: [
      "ケージフリー環境",
      "自由に遊べる広いスペース",
      "お散歩サービス",
      "食事・おやつ対応",
      "健康観察",
      "写真報告",
    ],
    popular: true,
    category: "一時預かり",
    highlight: "ケージフリー",
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

      <div className="container mx-auto px-4 py-16 space-y-12 md:space-y-20">
        {/* Trimming Services */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-warm-900">トリミングサービス</h2>
          <p className="text-center text-warm-700 mb-12 max-w-3xl mx-auto">
            認定トリマーによる専門的なグルーミングで、ペットの健康と美しさをサポートします
          </p>

          {/* Price List Placeholders */}
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Dog Pricing */}
            <Card className="border-warm-200 shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-warm-600 to-warm-700 p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold text-black flex items-center justify-center gap-3">
                  <span className="text-2xl md:text-3xl">🐕</span>
                  ワンちゃん用料金表
                </h3>
              </div>
              <CardContent className="p-6 md:p-8">
                <div className="bg-gradient-to-br from-warm-50 to-warm-100 rounded-2xl p-6 md:p-8 text-center border-2 border-dashed border-warm-300">
                  <div className="mb-6">
                    <div className="bg-white p-4 rounded-full w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 flex items-center justify-center shadow-lg border-4 border-warm-200">
                      <Scissors className="h-8 w-8 md:h-10 md:w-10 text-warm-800" />
                    </div>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-warm-900 mb-4">犬用料金表チラシ</h4>
                  <p className="text-warm-700 text-sm md:text-base mb-4">
                    犬種別のトリミング料金表をCanvaで作成予定
                  </p>
                  <div className="bg-white rounded-xl p-4 md:p-6 bg-white/70 backdrop-blur-sm">
                    <p className="text-warm-600 font-medium text-sm md:text-base">
                      小型犬から大型犬まで対応<br />
                      詳細な料金表は準備中です
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cat Pricing */}
            <Card className="border-sage-200 shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-sage-600 to-sage-700 p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold text-black flex items-center justify-center gap-3">
                  <span className="text-2xl md:text-3xl">🐱</span>
                  ネコちゃん用料金表
                </h3>
              </div>
              <CardContent className="p-6 md:p-8">
                <div className="bg-gradient-to-br from-sage-50 to-sage-100 rounded-2xl p-6 md:p-8 text-center border-2 border-dashed border-sage-300">
                  <div className="mb-6">
                    <div className="bg-white p-4 rounded-full w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 flex items-center justify-center shadow-lg border-4 border-sage-200">
                      <Scissors className="h-8 w-8 md:h-10 md:w-10 text-sage-800" />
                    </div>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-warm-900 mb-4">猫用料金表チラシ</h4>
                  <p className="text-warm-700 text-sm md:text-base mb-4">
                    猫専用のトリミング料金表をCanvaで作成予定
                  </p>
                  <div className="bg-white rounded-xl p-4 md:p-6 bg-white/70 backdrop-blur-sm">
                    <p className="text-warm-600 font-medium text-sm md:text-base">
                      短毛種・長毛種対応<br />
                      ストレス軽減技術で安心施術
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Temporary Care Services */}
        <section className="relative -mx-[50vw] left-[50%] right-[50%] w-[100vw] py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-warm-900">一時預かりサービス</h2>
            <p className="text-center text-warm-700 mb-8 max-w-3xl mx-auto">
              ケージフリーの快適な環境で、わんちゃんがストレスなく過ごせる預かりサービスです
            </p>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg max-w-4xl mx-auto mb-8">
              <p className="text-warm-700 text-center leading-relaxed text-lg">
                <span className="font-semibold">こんな時におすすめです！</span><br />
                🌞 暑すぎて散歩に行けない夏の日に<br />
                ❄️ 雪で外遊びができない冬の日に<br />
                🍽️ 旅行先でペット同伴NGのお店に行きたい時に<br />
                <span className="text-sage-700 font-medium mt-2 block">わんちゃんが安心して過ごせる第二のお家です</span>
              </p>
            </div>

            {/* Cage-free image gallery */}
            <div className="max-w-5xl mx-auto mb-12">
              <h3 className="text-xl md:text-2xl font-bold text-warm-900 text-center mb-6">
                ケージフリー環境の様子
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {/* Photo placeholders */}
                {[1, 2, 3, 4, 5, 6].map((index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-warm-50 to-sage-50 rounded-xl h-48 md:h-56 flex items-center justify-center border-2 border-dashed border-warm-300 shadow-md"
                  >
                    <div className="text-center">
                      <Home className="h-8 w-8 text-warm-400 mx-auto mb-2" />
                      <p className="text-warm-600 font-medium text-sm">写真{index}</p>
                      <p className="text-warm-500 text-xs mt-1">ケージフリー環境</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center text-warm-700 mt-6 text-sm">
                わんちゃんが自由に遊べる広々とした空間での様子をご覧いただけます
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-12">
              {/* Day Care Service */}
              <div>
                <h3 className="text-2xl font-bold text-warm-900 mb-6 flex items-center gap-3">
                  <span className="text-2xl">🐕</span>
                  日帰り一時預かり
                </h3>
                
                <div className="space-y-4 text-warm-800">
                  <div className="space-y-2">
                    <div className="text-lg">
                      <span className="font-semibold">1時間あたり：980円</span>
                      <span className="text-sm text-warm-600 ml-2">(tax in)</span>
                    </div>
                    <div className="text-lg">
                      <span className="font-semibold">3時間以上：2,500円</span>
                      <span className="text-sm text-warm-600 ml-2">(1日中預かっても2,500円)</span>
                    </div>
                    <div className="relative bg-gradient-to-r from-sage-100 to-sage-200 p-4 rounded-xl border-2 border-sage-400 shadow-lg transform hover:scale-[1.02] transition-all duration-200">
                      <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full shadow-md">
                        おすすめ
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-lg font-bold text-black">月額定額プラン</div>
                          <div className="text-2xl font-bold text-black">¥9,980</div>
                        </div>
                        <div className="text-right">
                          <div className="bg-sage-300 px-3 py-1 rounded-full">
                            <span className="text-black font-medium">通い放題</span>
                          </div>
                          <div className="text-black/70 text-xs mt-1">何度でもOK!</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 space-y-2">
                    <p className="text-warm-700">• ケージフリー環境で自由に過ごせます</p>
                    <p className="text-warm-700">• お散歩・食事・おやつ対応</p>
                    <p className="text-warm-700">• 健康観察・写真報告</p>
                    <p className="text-warm-700">• 愛玩動物看護師が常駐</p>
                  </div>
                  
                  <div className="pt-4">
                    <p className="text-warm-700">営業時間：9:00〜18:00</p>
                  </div>
                </div>
              </div>

              {/* Overnight Stay */}
              <div>
                <h3 className="text-2xl font-bold text-warm-900 mb-6 flex items-center gap-3">
                  <span className="text-2xl">🏠</span>
                  宿泊預かりサービス
                </h3>
                
                <div className="space-y-4 text-warm-800">
                  <div className="text-lg">
                    <span className="font-semibold">1泊2日〜長期滞在</span>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-warm-700">• ケージフリー環境</p>
                    <p className="text-warm-700">• 夜間はカメラで監視（お客様もチェック可能）</p>
                    <p className="text-warm-700">• 徒歩圏内に愛玩動物看護師が待機（緊急時すぐ対応）</p>
                    <p className="text-warm-700">• 毎日の写真・動画報告</p>
                    <p className="text-warm-700">• 個別対応可能</p>
                  </div>
                  
                  <div className="pt-4">
                    <p className="text-warm-700">
                      料金や詳細については、下記のLINEでお気軽にお問い合わせください。
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* Contact Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-warm-900">お問い合わせ</h2>
            <p className="text-lg text-warm-700 max-w-3xl mx-auto">
              トリミング・一時預かりのご予約やご質問がございましたら、お気軽にお問い合わせください
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
          </div>
        </section>
      </div>
    </div>
  )
}
