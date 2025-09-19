import type React from "react"
import { Header } from "@/components/header"
import { MobileDock } from "@/components/mobile-dock"

export default function AnimalsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <MobileDock />
    </>
  )
}
