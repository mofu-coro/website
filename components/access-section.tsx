"use client"

export function AccessSection() {
  return (
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
  )
}
