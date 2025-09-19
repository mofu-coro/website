"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
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
                サービスに関するご質問やご相談を、LINEで気軽にお受けしています。お気軽にメッセージをお送りください。
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
      </div>
    </section>
  )
}
