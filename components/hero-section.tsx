"use client"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/rescue-dogs-and-cats-in-a-warm--welcoming-shelter-.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 pt-20">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
        Hakodate’s Home for Dogs & Cats
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed text-pretty">
          保護犬猫活動／トリミング＆一時預かり／ドッグラン／キッチンカー／就労支援B型。
          <br />
          北海道函館市から、いのちが続く仕組みを。
        </p>

      </div>
    </section>
  )
}
