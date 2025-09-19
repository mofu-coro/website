import type { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { newsData, formatDate, getImportantNews } from "@/lib/news-data"
import { Calendar, AlertCircle, ArrowLeft, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "お知らせ | ç",
  description: "mofu.からの最新のお知らせやイベント情報をご確認いただけます。",
}

function getCategoryColor(category: string) {
  switch (category) {
    case "重要":
      return "destructive"
    case "イベント":
      return "secondary"
    case "新着情報":
      return "default"
    case "お知らせ":
    default:
      return "outline"
  }
}

export default function NewsPage() {
  const importantNews = getImportantNews()
  const sortedNews = [...newsData].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header with navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <ArrowLeft className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">ホームに戻る</span>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-primary fill-primary" />
            <span className="text-xl font-bold text-primary">mofu.</span>
          </Link>
          <div className="w-20" /> {/* Spacer for center alignment */}
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">お知らせ</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            mofu.からの最新のお知らせやイベント情報をご確認いただけます
          </p>
        </div>

        {/* Important News Section */}
        {importantNews.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <AlertCircle className="h-6 w-6 text-destructive" />
              <h2 className="text-2xl font-bold text-foreground">重要なお知らせ</h2>
            </div>
            <div className="grid gap-6">
              {importantNews.map((item) => (
                <Card
                  key={item.id}
                  className="border-destructive/20 bg-destructive/5 hover:shadow-lg transition-all duration-300"
                >
                  <CardHeader className="pb-3">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <Badge variant={getCategoryColor(item.category)} className="font-medium">
                          {item.category}
                        </Badge>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {formatDate(item.date)}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground leading-relaxed text-balance">{item.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-pretty">{item.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* All News Section */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">すべてのお知らせ</h2>
          <div className="grid gap-6">
            {sortedNews.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-all duration-300 group">
                <CardHeader className="pb-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <Badge variant={getCategoryColor(item.category)} className="font-medium">
                        {item.category}
                      </Badge>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {formatDate(item.date)}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground leading-relaxed text-balance group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-pretty">{item.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="text-center mt-16">
          <Button asChild size="lg" className="gap-2">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              ホームに戻る
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
