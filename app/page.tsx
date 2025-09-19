import { Header } from "@/components/header"
import { MobileDock } from "@/components/mobile-dock"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AnimalsSection } from "@/components/animals-section"
import { NewsSection } from "@/components/news-section"
import { AccessSection } from "@/components/access-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AnimalsSection />
        <NewsSection />
        <AccessSection />
      </main>
      <MobileDock />
    </div>
  )
}