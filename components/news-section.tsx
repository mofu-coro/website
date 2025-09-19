"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Calendar } from "lucide-react"
import { getLatestNews, formatDate } from "@/lib/news-data"

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

export function NewsSection() {
  const latestNews = getLatestNews(2)

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h4 className="text-2xl md:text-3xl font-bold">お知らせ</h4>
          <Button variant="ghost" className="gap-2" onClick={() => (window.location.href = "/news")}>
            もっと見る
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {latestNews.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="flex items-center gap-2">
                    <Badge variant={getCategoryColor(item.category)} className="text-xs">
                      {item.category}
                    </Badge>
                    {item.isImportant && (
                      <Badge variant="destructive" className="text-xs">
                        重要
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground whitespace-nowrap">
                    <Calendar className="h-3 w-3" />
                    {formatDate(item.date)}
                  </div>
                </div>
                <CardTitle className="text-lg leading-tight text-balance group-hover:text-primary transition-colors">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed text-pretty">{item.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
