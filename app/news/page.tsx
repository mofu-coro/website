"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { newsData, formatDate, getImportantNews, type NewsItem } from "@/lib/news-data"
import { Calendar, ArrowLeft, MessageCircle, Filter, ChevronLeft, ChevronRight } from "lucide-react"

function getCategoryColor(category: string) {
  switch (category) {
    case "重要":
      return "default" // Changed from destructive to avoid red
    case "イベント":
      return "secondary"
    case "新着情報":
      return "outline"
    case "お知らせ":
    default:
      return "outline"
  }
}

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<NewsItem["category"] | "all">("all")
  const [selectedService, setSelectedService] = useState<NewsItem["serviceTag"] | "all">("all")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  const importantNews = getImportantNews()
  const allCategories: (NewsItem["category"] | "all")[] = ["all", "重要", "イベント", "新着情報", "お知らせ"]
  const allServices: (NewsItem["serviceTag"] | "all")[] = ["all", "トリミング", "ドッグラン", "キッチンカー", "保護犬猫", "里親募集", "就労支援"]

  // Filter and sort news
  const filteredNews = useMemo(() => {
    const sorted = [...newsData].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    return sorted.filter(item => {
      const categoryMatch = selectedCategory === "all" || item.category === selectedCategory
      const serviceMatch = selectedService === "all" || item.serviceTag === selectedService
      return categoryMatch && serviceMatch
    })
  }, [selectedCategory, selectedService])

  // Pagination
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage)
  const paginatedNews = filteredNews.slice(
    (currentPage - 1) * itemsPerPage, 
    currentPage * itemsPerPage
  )

  // Reset to page 1 when filters change
  const handleCategoryChange = (category: NewsItem["category"] | "all") => {
    setSelectedCategory(category)
    setCurrentPage(1)
  }

  const handleServiceChange = (service: NewsItem["serviceTag"] | "all") => {
    setSelectedService(service)
    setCurrentPage(1)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] mt-[73px]">
        <Image
          src="/japanese-people-working-with-rescue-animals.jpg"
          alt="スタッフが保護動物と触れ合う温かい様子"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Home button positioned in top-left */}
        <Link
          href="/"
          className="absolute top-6 left-6 z-10 inline-flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full text-white hover:text-white hover:bg-black/60 transition-all duration-300 border border-white/40 shadow-xl"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="text-sm font-medium">ホーム</span>
        </Link>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">お知らせ</h1>
            <p className="text-lg md:text-xl leading-relaxed">
              mofu.からの最新のお知らせやイベント情報を
              <br />
              こちらでご確認いただけます
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 space-y-20">
        {/* Important News Section */}
        {importantNews.length > 0 && (
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-warm-900">重要なお知らせ</h2>
              <p className="text-lg text-warm-700 max-w-3xl mx-auto">
                特にご注意いただきたいお知らせをご確認ください
              </p>
            </div>
            <div className="grid gap-6 max-w-4xl mx-auto">
              {importantNews.map((item) => (
                <Card
                  key={item.id}
                  className="border-sage-200 bg-gradient-to-br from-sage-50 to-sage-100 hover:shadow-lg transition-all duration-300"
                >
                  <CardHeader className="pb-3">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div className="flex items-center gap-3 flex-wrap">
                        <Badge variant={getCategoryColor(item.category)} className="font-medium bg-sage-200 text-sage-800">
                          {item.category}
                        </Badge>
                        {item.serviceTag && (
                          <Badge variant="secondary" className="font-medium bg-warm-100 text-warm-800">
                            {item.serviceTag}
                          </Badge>
                        )}
                        <div className="flex items-center gap-2 text-sm text-warm-600">
                          <Calendar className="h-4 w-4" />
                          {formatDate(item.date)}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-warm-900 leading-relaxed text-balance">{item.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-warm-700 leading-relaxed text-pretty">{item.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* All News Section with Filtering */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-warm-900">すべてのお知らせ</h2>
            <p className="text-lg text-warm-700 max-w-3xl mx-auto mb-8">
              最新のお知らせやイベント情報をお届けします
            </p>
            
            {/* Category Filter */}
            <div className="space-y-6 mb-8">
              <div className="flex flex-wrap items-center justify-center gap-3">
                <div className="flex items-center gap-2 text-warm-700">
                  <Filter className="h-4 w-4" />
                  <span className="text-sm font-medium">カテゴリ:</span>
                </div>
                {allCategories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleCategoryChange(category)}
                    className={selectedCategory === category 
                      ? "bg-sage-600 hover:bg-sage-700 text-white" 
                      : "border-sage-200 text-warm-700 hover:bg-sage-50"
                    }
                  >
                    {category === "all" ? "すべて" : category}
                    {category !== "all" && (
                      <span className="ml-2 text-xs bg-sage-100 text-sage-700 px-1.5 py-0.5 rounded-full">
                        {newsData.filter(item => item.category === category).length}
                      </span>
                    )}
                  </Button>
                ))}
              </div>

              {/* Service Filter */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <div className="flex items-center gap-2 text-warm-700">
                  <span className="text-sm font-medium">サービス:</span>
                </div>
                {allServices.map((service) => (
                  <Button
                    key={service}
                    variant={selectedService === service ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleServiceChange(service)}
                    className={selectedService === service 
                      ? "bg-warm-600 hover:bg-warm-700 text-white" 
                      : "border-warm-200 text-warm-700 hover:bg-warm-50"
                    }
                  >
                    {service === "all" ? "すべて" : service}
                    {service !== "all" && (
                      <span className="ml-2 text-xs bg-warm-100 text-warm-700 px-1.5 py-0.5 rounded-full">
                        {newsData.filter(item => item.serviceTag === service).length}
                      </span>
                    )}
                  </Button>
                ))}
              </div>
            </div>

            {/* Results count */}
            <p className="text-sm text-warm-600 mb-6">
              {selectedCategory === "all" && selectedService === "all"
                ? `全${filteredNews.length}件のお知らせ` 
                : `絞り込み結果: ${filteredNews.length}件`
              }
              {(selectedCategory !== "all" || selectedService !== "all") && (
                <span className="ml-2 text-xs">
                  ({selectedCategory !== "all" && `カテゴリ: ${selectedCategory}`}
                  {selectedCategory !== "all" && selectedService !== "all" && " + "}
                  {selectedService !== "all" && `サービス: ${selectedService}`})
                </span>
              )}
            </p>
          </div>

          {/* News Grid */}
          <div className="grid gap-6 max-w-4xl mx-auto mb-12">
            {paginatedNews.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-all duration-300 group border-warm-200">
                <CardHeader className="pb-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex items-center gap-3 flex-wrap">
                      <Badge variant={getCategoryColor(item.category)} className="font-medium">
                        {item.category}
                      </Badge>
                      {item.serviceTag && (
                        <Badge variant="secondary" className="font-medium bg-warm-100 text-warm-800">
                          {item.serviceTag}
                        </Badge>
                      )}
                      <div className="flex items-center gap-2 text-sm text-warm-600">
                        <Calendar className="h-4 w-4" />
                        {formatDate(item.date)}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-warm-900 leading-relaxed text-balance group-hover:text-sage-700 transition-colors">
                    {item.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-warm-700 leading-relaxed text-pretty">{item.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 max-w-4xl mx-auto">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="h-4 w-4" />
                前へ
              </Button>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    className={currentPage === page 
                      ? "bg-sage-600 hover:bg-sage-700 text-white min-w-[40px]" 
                      : "border-sage-200 text-warm-700 hover:bg-sage-50 min-w-[40px]"
                    }
                  >
                    {page}
                  </Button>
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="flex items-center gap-2"
              >
                次へ
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}

          {/* No results message */}
          {filteredNews.length === 0 && (
            <div className="text-center py-12 max-w-4xl mx-auto">
              <div className="bg-sage-50 border border-sage-200 rounded-lg p-8">
                <p className="text-warm-700 text-lg mb-2">該当するお知らせがありません</p>
                <p className="text-warm-600 text-sm">
                  別のカテゴリを選択するか、「すべて」をクリックしてご確認ください。
                </p>
              </div>
            </div>
          )}
        </section>

        {/* Contact Section */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-warm-900">お問い合わせ</h2>
            <p className="text-lg text-warm-700 max-w-3xl mx-auto">
              ご不明な点やご質問がございましたら、お気軽にお問い合わせください
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-green-600" />
                  LINEでお問い合わせ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  お知らせに関するご質問やご相談を、LINEで気軽にお受けしています。お気軽にメッセージをお送りください。
                </p>
                
                {/* Two Options Layout */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  {/* QR Code Option */}
                  <div className="text-center">
                    <div className="bg-white p-3 rounded-lg shadow-sm inline-block mb-2 border">
                      <img
                        src="https://qr-official.line.me/gs/M_480aaqto_GW.png?oat_content=qr"
                        alt="LINE友だち追加QRコード"
                        width={80}
                        height={80}
                        className="mx-auto rounded"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">QRコードを読み取り</p>
                  </div>

                  {/* OR Divider */}
                  <div className="flex items-center">
                    <div className="bg-muted rounded-full px-3 py-1">
                      <span className="text-muted-foreground font-medium text-xs">もしくは</span>
                    </div>
                  </div>

                  {/* Button Option */}
                  <div className="text-center">
                    <a
                      href="https://lin.ee/beSw4Fv"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block transform hover:scale-105 transition-transform duration-200 mb-2"
                    >
                      <img
                        src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
                        alt="友だち追加"
                        height={40}
                        className="hover:opacity-90 transition-opacity shadow-sm rounded"
                      />
                    </a>
                    <p className="text-xs text-muted-foreground">ボタンをタップ</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      {/* Access Section */}
      <section id="access" className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
              <div className="flex gap-2 text-gray-300">
                <span className="text-2xl">🐾</span>
                <span className="text-xl">🐾</span>
                <span className="text-sm">🐾</span>
              </div>
            </div>
            <h2 className="text-5xl font-light text-gray-600 mb-8" style={{ fontFamily: "cursive" }}>
              Access
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="text-center lg:text-left space-y-4">
              <div className="space-y-2 text-gray-700">
                <p className="text-lg font-medium">mofu.</p>
                <p>〒041-0843</p>
                <p>北海道函館市花園町23-3</p>
                <p>駐車場20台以上利用可</p>
              </div>

              <div className="pt-4 space-y-2 text-gray-700">
                <p className="text-lg font-medium">営業時間</p>
                <p>平日: 12:00 - 19:00</p>
                <p>土日祝: 11:00 - 18:00</p>
              </div>
            </div>

            <div className="h-80 lg:h-96 lg:col-span-2">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5949.44689213978!2d140.7797757!3d41.7911734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f9ef45f47f4c1bd%3A0x8806c24d32be2d44!2z44CSMDQxLTA4NDMg5YyX5rW36YGT5Ye96aSo5biC6Iqx5ZyS55S677yS77yT4oiS77yT!5e0!3m2!1sja!2sjp!4v1758184420637!5m2!1sja!2sjp" 
                className="w-full h-full rounded-lg"
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
