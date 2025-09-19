import { Coffee, MapPin, Clock, Phone, Mail, Heart, Users, Utensils, PawPrint, ArrowLeft } from "lucide-react"
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-slate-800 hover:bg-gray-100">
              メニューを見る
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-800 bg-transparent"
            >
              営業時間を確認
            </Button>
          </div>
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

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">キッチンカーの特徴</h2>
            <p className="text-lg text-muted-foreground">施設駐車場に常設で、いつでも気軽にお立ち寄りいただけます</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <MapPin className="h-12 w-12 text-warm-600 mx-auto mb-4" />
                <CardTitle>駐車場に常設</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  イベント出店は行わず、施設の駐車場に常設しているため、いつでも安定してご利用いただけます
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Utensils className="h-12 w-12 text-warm-600 mx-auto mb-4" />
                <CardTitle>手作りの味</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  コーヒーは厳選豆を使用し、軽食とワンちゃん用おやつはすべて手作りでご提供しています
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-warm-600 mx-auto mb-4" />
                <CardTitle>憩いの場</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  ワンちゃんと一緒にゆっくりとお食事やお茶を楽しめる、温かい憩いの空間です
                </p>
              </CardContent>
            </Card>
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

      {/* Contact & Hours */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">営業時間・お問い合わせ</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  営業時間
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span>平日</span>
                  <span className="font-semibold">10:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>土日祝</span>
                  <span className="font-semibold">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>定休日</span>
                  <span>毎週水曜日</span>
                </div>
                <div className="mt-4 p-3 bg-muted rounded-lg">
                  <p className="text-sm">※天候や施設の都合により営業時間が変更になる場合があります</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>お問い合わせ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-semibold">電話</p>
                    <p className="text-muted-foreground">03-1234-5678</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-semibold">メール</p>
                    <p className="text-muted-foreground">kitchen@rescue-center.jp</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-semibold">場所</p>
                    <p className="text-muted-foreground">施設駐車場内</p>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-slate-800 hover:bg-slate-700 text-white">お問い合わせする</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
