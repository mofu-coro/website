import { Coffee, MapPin, Clock, Phone, Mail, Heart, Users, Utensils, PawPrint, ArrowLeft, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

export default function KitchenCarPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/cozy-kitchen-car-with-coffee-and-treats.jpg"
          alt="キッチンカーでコーヒーと軽食を提供"
          fill
          className="object-cover"
          priority
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
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">キッチンカー</h1>
          <p className="text-xl md:text-2xl mb-8 text-balance">
            駐車場に常設のキッチンカーで、コーヒーと軽食、ワンちゃん用おやつをご提供
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">メニュー</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              人間用のコーヒーと軽食、そしてワンちゃん用の特別なおやつをご用意しています
            </p>
            
            {/* Support Message */}
            <div className="mt-6 bg-gradient-to-r from-sage-100 to-warm-100 rounded-xl p-4 max-w-2xl mx-auto border-2 border-sage-300">
              <div className="flex items-center justify-center gap-3">
                <Heart className="h-5 w-5 text-sage-600" />
                <p className="text-sage-800 font-medium">
                  キッチンカーの収益は保護犬猫の運営費にあてられます。
                </p>
                <PawPrint className="h-5 w-5 text-sage-600" />
              </div>
              <p className="text-sage-700 text-sm mt-2">
                美味しいお食事を楽しみながら、保護活動を支援できます
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Human Menu */}
            <Card className="relative overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Coffee className="h-6 w-6 text-warm-600" />
                  <CardTitle className="text-2xl">人間用メニュー</CardTitle>
                </div>
                <CardDescription>厳選されたコーヒー豆と手作りの軽食をお楽しみください</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">ブレンドコーヒー</span>
                    <span className="text-warm-600 font-semibold">¥300</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">カフェラテ</span>
                    <span className="text-warm-600 font-semibold">¥400</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">アイスコーヒー</span>
                    <span className="text-warm-600 font-semibold">¥350</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">手作りサンドイッチ</span>
                    <span className="text-warm-600 font-semibold">¥500</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">焼きたてマフィン</span>
                    <span className="text-warm-600 font-semibold">¥350</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">季節のスープ</span>
                    <span className="text-warm-600 font-semibold">¥400</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dog Menu */}
            <Card className="relative overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <PawPrint className="h-6 w-6 text-sage-600" />
                  <CardTitle className="text-2xl">ワンちゃん用メニュー</CardTitle>
                  <Badge className="bg-sage-600 text-white">人気</Badge>
                </div>
                <CardDescription>ワンちゃんの健康を考えた無添加の手作りおやつ</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">ささみジャーキー</span>
                    <span className="text-sage-600 font-semibold">¥200</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">野菜クッキー</span>
                    <span className="text-sage-600 font-semibold">¥150</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">チーズボーロ</span>
                    <span className="text-sage-600 font-semibold">¥180</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">フルーツアイス</span>
                    <span className="text-sage-600 font-semibold">¥250</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">おやつセット</span>
                    <span className="text-sage-600 font-semibold">¥400</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-sage-50 rounded-lg">
                  <p className="text-sm text-sage-700">
                    <Heart className="h-4 w-4 inline mr-1" />
                    すべて無添加・手作りで安心安全
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Picture Gallery Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">キッチンカーの特徴</h2>
            <p className="text-lg text-muted-foreground">施設駐車場に常設で、いつでも気軽にお立ち寄りいただけます</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/cozy-kitchen-car-with-coffee-and-treats.jpg"
                alt="キッチンカーの外観"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/professional-dog-grooming-session.jpg"
                alt="キッチンカー内部"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/customers-playing-with-rescue-dogs-cats.jpg"
                alt="お客様との交流"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/japanese-people-working-with-rescue-animals.jpg"
                alt="スタッフの様子"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/dogs-playing-happily-in-outdoor-dog-run.jpg"
                alt="ワンちゃんとの時間"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/rescue-dogs-and-cats-in-a-warm--welcoming-shelter-.jpg"
                alt="温かい空間"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-warm-200 bg-warm-50">
            <CardHeader>
              <CardTitle className="text-center text-warm-800">重要なお知らせ</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-warm-700 text-lg">
                当キッチンカーは<strong>イベント出店は行っておりません</strong>。<br />
                施設の駐車場に常設しており、営業時間内であればいつでもご利用いただけます。
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">お問い合わせ</h2>
            <p className="text-lg text-warm-700 max-w-3xl mx-auto">
              キッチンカーに関するご質問やご相談がございましたら、お気軽にお問い合わせください
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
        </div>
      </section>
    </div>
  )
}
