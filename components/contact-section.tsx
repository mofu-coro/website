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
  )
}
