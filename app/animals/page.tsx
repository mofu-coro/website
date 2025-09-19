"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ArrowLeft, MapPin, Calendar, Info, Phone, MessageCircle } from "lucide-react"
import { animalsData, type Animal, getAvailableAnimals } from "@/lib/animals-data"

export default function AnimalsPage() {
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null)
  const availableAnimals = getAvailableAnimals()

  const getStatusColor = (status: Animal["status"]) => {
    switch (status) {
      case "譲渡可能":
        return "bg-green-100 text-green-800"
      case "譲渡予定":
        return "bg-yellow-100 text-yellow-800"
      case "治療中":
        return "bg-red-100 text-red-800"
      case "ふれあい可能":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-orange-100 via-yellow-50 to-pink-50">
        <div className="container mx-auto text-center">
          <Button variant="ghost" className="absolute left-4 top-20 gap-2" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              ホームに戻る
            </Link>
          </Button>

          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="flex gap-3 text-4xl">
                <span>🐕</span>
                <span>💕</span>
                <span>🐱</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-orange-800 mb-8">出会える犬・猫</h1>
            <p className="text-lg text-orange-700 mb-8 leading-relaxed">
              新しい家族との出会いを待っている、愛らしい犬・猫たちをご紹介します。
              <br />
              それぞれの子に個性があり、あなたにぴったりの子がきっと見つかります。
            </p>
          </div>
        </div>
      </section>

      {/* Animals Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">里親を待っている子たち</h2>
            <p className="text-gray-600">現在、{availableAnimals.length}匹の犬・猫が新しい家族を待っています</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {availableAnimals.map((animal) => (
              <Card
                key={animal.id}
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedAnimal(animal)}
              >
                <CardContent className="p-0">
                  <div className="aspect-square relative overflow-hidden rounded-t-lg">
                    <img
                      src={animal.image || "/placeholder.svg"}
                      alt={animal.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge className={getStatusColor(animal.status)}>{animal.status}</Badge>
                    </div>
                  </div>

                  <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-lg">{animal.name}</h3>
                      <span className="text-sm text-gray-500">
                        {animal.type === "dog" ? "🐕" : "🐱"} {animal.age}
                      </span>
                    </div>

                    <p className="text-sm text-gray-600">{animal.breed}</p>

                    <div className="flex flex-wrap gap-1">
                      {animal.personality.slice(0, 3).map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {animal.personality.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{animal.personality.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Calendar className="h-3 w-3" />
                      保護日: {animal.arrivalDate}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Animal Detail Modal */}
      {selectedAnimal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedAnimal.image || "/placeholder.svg"}
                alt={selectedAnimal.name}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                onClick={() => setSelectedAnimal(null)}
              >
                ✕
              </Button>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">{selectedAnimal.name}</h2>
                <Badge className={getStatusColor(selectedAnimal.status)}>{selectedAnimal.status}</Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-semibold">種類:</span> {selectedAnimal.type === "dog" ? "犬" : "猫"}
                </div>
                <div>
                  <span className="font-semibold">品種:</span> {selectedAnimal.breed}
                </div>
                <div>
                  <span className="font-semibold">年齢:</span> {selectedAnimal.age}
                </div>
                <div>
                  <span className="font-semibold">性別:</span> {selectedAnimal.gender === "male" ? "オス" : "メス"}
                </div>
                <div>
                  <span className="font-semibold">サイズ:</span>{" "}
                  {selectedAnimal.size === "small" ? "小型" : selectedAnimal.size === "medium" ? "中型" : "大型"}
                </div>
                <div>
                  <span className="font-semibold">保護日:</span> {selectedAnimal.arrivalDate}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">特徴</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedAnimal.personality.map((trait, index) => (
                    <Badge key={index} variant="outline">
                      {trait}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">性格</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedAnimal.personality.map((trait, index) => (
                    <Badge key={index} variant="secondary">
                      {trait}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">詳細</h3>
                <p className="text-gray-700">{selectedAnimal.description}</p>
              </div>

              {selectedAnimal.medicalInfo && (
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Info className="h-4 w-4" />
                    医療情報
                  </h3>
                  <p className="text-gray-700">{selectedAnimal.medicalInfo}</p>
                </div>
              )}

              {selectedAnimal.adoptionRequirements && (
                <div>
                  <h3 className="font-semibold mb-2">譲渡条件</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {selectedAnimal.adoptionRequirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex gap-3 pt-4">
                <Button className="flex-1 bg-sage-600 hover:bg-sage-700">
                  <Heart className="h-4 w-4 mr-2" />
                  お問い合わせ
                </Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  <MapPin className="h-4 w-4 mr-2" />
                  見学予約
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section className="py-16 px-4 bg-orange-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-800 mb-4">
              お問い合わせ
            </h2>
            <p className="text-orange-700 mb-8">気になる子がいましたら、お気軽にお問い合わせください。<br />実際に会ってみることで、その子の本当の魅力を感じていただけます。</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Phone Contact */}
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <Phone className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">お電話でのお問い合わせ</h3>
                <p className="text-2xl font-bold text-orange-600 mb-2">03-1234-5678</p>
                <p className="text-sm text-gray-600 mb-1">受付時間: 平日 9:00-18:00</p>
                <p className="text-sm text-gray-600 mb-4">土日祝 10:00-17:00</p>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  <Phone className="h-4 w-4 mr-2" />
                  電話をかける
                </Button>
              </div>
            </Card>

            {/* LINE Contact */}
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <MessageCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">LINEでのお問い合わせ</h3>
                <p className="text-lg font-semibold text-green-600 mb-2">@mofu-animals</p>
                <p className="text-sm text-gray-600 mb-1">24時間受付</p>
                <p className="text-sm text-gray-600 mb-4">返信: 営業時間内</p>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  LINEで相談
                </Button>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">見学は事前予約制となっております。</p>
            <p className="text-sm text-gray-500">※譲渡には面談・審査があります。詳しくはお問い合わせください。</p>
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="flex gap-2 text-gray-300">
                <span className="text-2xl">🐾</span>
                <span className="text-xl">🐾</span>
                <span className="text-sm">🐾</span>
              </div>
            </div>
            <h2 className="text-4xl font-light text-gray-600 mb-8" style={{ fontFamily: "cursive" }}>
              Access
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="text-center lg:text-left space-y-4">
              <div className="space-y-2 text-gray-700">
                <p className="text-lg font-medium">mofu.</p>
                <p>〒041-0843</p>
                <p>北海道函館市芸坂23-3</p>
                <p>函館駅からアクセス便利</p>
              </div>

              <div className="pt-4 space-y-2 text-gray-700">
                <p className="text-lg font-medium">営業時間</p>
                <p>平日: 9:00 - 18:00</p>
                <p>土日祝: 10:00 - 17:00</p>
                <p className="text-sm text-gray-500">※定休日: 毎週水曜日</p>
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
    </div>
  )
}
