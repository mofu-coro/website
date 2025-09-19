import type React from "react"
import { Header } from "@/components/header"
import { MobileDock } from "@/components/mobile-dock"
import { AccessSection } from "@/components/access-section"

export default function EmploymentSupportBLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <AccessSection />
      <MobileDock />
    </>
  )
}
