"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronRight } from "lucide-react"

import { getAvailableAnimals } from "@/lib/animals-data"

const animals = getAvailableAnimals().slice(0, 5)

export function AnimalsSection() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl md:text-3xl font-bold">出会える犬・猫</h3>
          <Button variant="ghost" className="gap-2" asChild>
            <Link href="/animals">
              もっと見る
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory">
          {animals.map((animal) => (
            <Card key={animal.id} className="flex-shrink-0 w-64 snap-start">
              <CardContent className="p-0">
                <div className="aspect-square relative overflow-hidden rounded-t-lg">
                  <img
                    src={animal.image || "/placeholder.svg"}
                    alt={animal.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-lg">{animal.name}</h4>
                    <Badge variant="secondary" className="text-xs">
                      {animal.status === "available" ? "譲渡可能" : animal.status}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {animal.personality.slice(0, 2).map((trait, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {trait}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
