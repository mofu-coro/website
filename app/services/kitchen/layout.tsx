import type React from "react"
import { Header } from "@/components/header"
import { MobileDock } from "@/components/mobile-dock"
import { AccessSection } from "@/components/access-section"

export default function KitchenCarLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <AccessSection />
      <MobileDock />
    </>
  )
}
