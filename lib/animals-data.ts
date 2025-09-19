export interface Animal {
  id: string
  name: string
  type: "dog" | "cat"
  breed: string
  age: string
  gender: "male" | "female"
  size: "small" | "medium" | "large"
  personality: string[]
  description: string
  image: string
  vaccinated: boolean
  neutered: boolean
  goodWithKids: boolean
  goodWithPets: boolean
  adoptionFee: number
  arrivalDate: string
  status: "available" | "pending" | "adopted"
  specialNeeds?: string
  medicalInfo?: string
  adoptionRequirements?: string[]
}

// Sample animals data - easy to maintain by adding new animals to the array
export const animalsData: Animal[] = [
  {
    id: "dog-001",
    name: "ハナ",
    type: "dog",
    breed: "柴犬ミックス",
    age: "3歳",
    gender: "female",
    size: "medium",
    personality: ["人懐っこい", "元気", "お散歩好き"],
    description: "とても人懐っこく、お散歩が大好きな女の子です。子供たちとも仲良く遊べます。新しい家族との出会いを心待ちにしています。",
    image: "/friendly-rescue-dog-golden-retriever.jpg",
    vaccinated: true,
    neutered: true,
    goodWithKids: true,
    goodWithPets: true,
    adoptionFee: 30000,
    arrivalDate: "2024-02-15",
    status: "available"
  },
  {
    id: "cat-001",
    name: "ミケ",
    type: "cat",
    breed: "三毛猫",
    age: "2歳",
    gender: "female",
    size: "small",
    personality: ["おとなしい", "甘えん坊", "膝の上が好き"],
    description: "とてもおとなしく、人の膝の上でのんびりするのが大好きです。静かな環境で愛情をたっぷり注いでくれる家族を探しています。",
    image: "/cute-rescue-cat-calico.jpg",
    vaccinated: true,
    neutered: true,
    goodWithKids: true,
    goodWithPets: false,
    adoptionFee: 25000,
    arrivalDate: "2024-03-01",
    status: "available"
  },
  {
    id: "dog-002",
    name: "レオ",
    type: "dog",
    breed: "ボーダーコリー",
    age: "4歳",
    gender: "male",
    size: "large",
    personality: ["賢い", "活発", "訓練好き"],
    description: "とても賢く、トレーニングが大好きな男の子です。アクティブな家族との生活を望んでいます。毎日の運動と刺激が必要です。",
    image: "/energetic-rescue-dog-border-collie.jpg",
    vaccinated: true,
    neutered: true,
    goodWithKids: true,
    goodWithPets: true,
    adoptionFee: 35000,
    arrivalDate: "2024-01-20",
    status: "available"
  },
  {
    id: "cat-002",
    name: "シロ",
    type: "cat",
    breed: "ペルシャ猫ミックス",
    age: "5歳",
    gender: "male",
    size: "medium",
    personality: ["穏やか", "マイペース", "ブラッシング好き"],
    description: "とても穏やかで落ち着いた性格の男の子です。ブラッシングが大好きで、静かな環境でのんびり過ごすのを好みます。",
    image: "/gentle-rescue-cat-white-persian.jpg",
    vaccinated: true,
    neutered: true,
    goodWithKids: true,
    goodWithPets: true,
    adoptionFee: 28000,
    arrivalDate: "2024-02-28",
    status: "available"
  },
  {
    id: "dog-003",
    name: "チョコ",
    type: "dog",
    breed: "ラブラドール",
    age: "6歳",
    gender: "male",
    size: "large",
    personality: ["優しい", "落ち着いている", "子供好き"],
    description: "とても優しく落ち着いた性格で、特に子供たちが大好きです。シニア犬ですが、まだまだ元気いっぱいです。",
    image: "/playful-rescue-dog-brown-labrador.jpg",
    vaccinated: true,
    neutered: true,
    goodWithKids: true,
    goodWithPets: true,
    adoptionFee: 20000,
    arrivalDate: "2024-01-10",
    status: "pending"
  }
]

// Helper functions for easy data management
export function getAvailableAnimals(): Animal[] {
  return animalsData.filter(animal => animal.status === "available")
}

export function getAnimalsByType(type: Animal['type']): Animal[] {
  return animalsData.filter(animal => animal.type === type && animal.status === "available")
}

export function getAnimalsBySize(size: Animal['size']): Animal[] {
  return animalsData.filter(animal => animal.size === size && animal.status === "available")
}

export function searchAnimals(query: string): Animal[] {
  const lowercaseQuery = query.toLowerCase()
  return animalsData.filter(animal => 
    animal.status === "available" && (
      animal.name.toLowerCase().includes(lowercaseQuery) ||
      animal.breed.toLowerCase().includes(lowercaseQuery) ||
      animal.personality.some(trait => trait.toLowerCase().includes(lowercaseQuery)) ||
      animal.description.toLowerCase().includes(lowercaseQuery)
    )
  )
}

export function formatAdoptionFee(fee: number): string {
  return `¥${fee.toLocaleString()}`
}

export function calculateAge(arrivalDate: string): string {
  const arrival = new Date(arrivalDate)
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - arrival.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  
  if (diffDays < 30) {
    return `${diffDays}日前に来ました`
  } else if (diffDays < 365) {
    const months = Math.floor(diffDays / 30)
    return `${months}ヶ月前に来ました`
  } else {
    const years = Math.floor(diffDays / 365)
    return `${years}年前に来ました`
  }
}
