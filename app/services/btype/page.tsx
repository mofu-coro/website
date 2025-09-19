"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Heart,
  Users,
  CheckCircle,
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Award,
  HandHeart,
  MessageCircle,
  Train,
  Coffee,
  PawPrint,
  HelpCircle,
  Send,
  QrCode,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const workActivities = [
  {
    category: "動物のお世話",
    activities: [
      "ワンちゃん・ネコちゃんの日々のお世話",
      "ご飯の準備と給餌",
      "犬舎・猫舎の清掃",
      "健康状態のチェック",
      "天気の良い日はお散歩",
    ],
    icon: PawPrint,
  },
  {
    category: "軽作業",
    activities: [
      "おむつ等の準備",
      "可愛いペットハーネスの作成",
      "パンフレット折り",
      "シール貼り作業",
      "座りながらできる作業",
    ],
    icon: HandHeart,
  },
  {
    category: "キッチン作業",
    activities: ["お客様のご注文対応", "デリバリー注文の準備", "キッチン作業補助", "接客サポート"],
    icon: Coffee,
  },
]

const benefits = [
  {
    title: "個別サポート体制",
    description:
      "サービス管理責任者や支援員が一人ひとりの日常の細かい変化もしっかりとチェックし、安心して就労できるようサポートします",
    icon: Users,
    highlight: "1対1",
  },
  {
    title: "自然なコミュニケーション",
    description: "ワンちゃん・猫ちゃんとのふれあいを通して、自然と笑顔になれるコミュニケーションの場を提供します",
    icon: Heart,
    highlight: "癒し効果",
  },
  {
    title: "段階的スキルアップ",
    description: "簡単な軽作業からスキルが身に付く作業まで幅広く用意し、ご自身のペースでステップアップできます",
    icon: Award,
    highlight: "成長支援",
  },
]

const userTestimonials = [
  {
    text: "今まで仕事で猫とか犬に一度も関わった事がなかったので新鮮です。わんちゃんやねこちゃんと過ごしながらお世話をする中で、やりがいを感じています。",
    author: "Sさん",
  },
  {
    text: "警戒心の強かった猫が、少しずつ心を開いて甘えてくれるようになったとき。そんな瞬間が一番うれしいです。",
    author: "Nさん",
  },
  {
    text: "楽しいです。猫と犬がいるから楽しいですし、人もみんな優しくて人間関係もいいです。通所している時間が息抜きの場にもなっています。",
    author: "Kさん",
  },
]

const applicationSteps = [
  {
    step: "01",
    title: "ご応募",
    description: "お電話・お問い合わせフォームからご応募ください。担当者からご連絡し、簡単相談を行います。",
  },
  {
    step: "02",
    title: "見学会",
    description: "作業環境やスタッフ、わんちゃん猫ちゃんたちと顔合わせができます。ご質問もお気軽にどうぞ。",
  },
  {
    step: "03",
    title: "手続き",
    description: "体験利用も可能です。面談を実施し、利用方法やスキルアップの道筋をご提案いたします。",
  },
  {
    step: "04",
    title: "利用開始",
    description: "可愛いワンちゃん猫ちゃん達と就労スタートです！",
  },
]

const faqData = [
  {
    question: "障がい者手帳を持っていないのですが、利用できますか？",
    answer:
      "障がい者手帳をお持ちでない方でも、ご利用いただける場合もございます。手帳の手続きのサポートもいたしますので、お気軽にお問い合わせください。",
  },
  {
    question: "未経験でもできる仕事はありますか？",
    answer:
      "アネラでは「共に働き、学び、笑い合える社会に」をモットーにしております。未経験でもあなたの希望がある場合は、事前にご相談ください。",
  },
  {
    question: "利用に必要なスキルはありますか？",
    answer: "必要なスキルはございません。必要なのは、あなたの物作りが好きな気持ちだけです。",
  },
  {
    question: "通所可能となる要件を教えてください",
    answer:
      "18歳以上の方で、以下のいずれかの条件を満たす方が対象です。\n・精神障がい（発達障がい、ADHD、総合失調症 等）若しくは知的障がいの方\n・障害者総合支援法の対象疾病となっている難病等の方\n・心身の不調等で通院をされており、一般就労が難しい方\n・しばらく引きこもっており社会復帰の機会を求めている方　など\n\n就労継続支援B型の受給者証の交付に関しては、お問い合わせください。",
  },
  {
    question: "何歳から利用できますか？",
    answer:
      "18歳以上の方であれば、年齢制限は基本ございません。※18歳未満の場合でも、受給者証が交付される場合もございます。",
  },
  {
    question: "利用可能な期間に上限はありますか？",
    answer: "ご利用期間に上限はございません。ご自身のペースでスキルが身に付き、就労可能になるまで利用可能です。",
  },
  {
    question: "市町村が違うのですが利用できますか？",
    answer:
      "通所にあたっては、ご自身の体力などに負担がなければ、どなたでもご利用いただけます。また、在宅利用についてもご相談が可能です。アネラは全国に事業所を展開しておりますので、ご自宅から通いやすい事業所をご案内させていただきます。どうぞご安心ください。",
  },
  {
    question: "ワンちゃん・猫ちゃん以外の作業もありますか？",
    answer:
      "内職・軽作業など、様々なお仕事を用意しております。※各事業所により状況は異なりますので、詳しくはお問い合わせください。",
  },
  {
    question: "アネラ就労継続支援B型の雰囲気を教えてください。",
    answer:
      "ワンちゃん猫ちゃんが大好きなスタッフ・利用者（仲間）が集う場所ですので、和気あいあいと好きなことに取り組むことができます。見学や体験も随時受け付けております。ご興味のある方は、ぜひお気軽にお問い合わせください。",
  },
  {
    question: "コミュニケーションが苦手でも通所できますか？",
    answer:
      "アネラには、精神障がいを抱える方や発達障がいを抱える方など、さまざまな利用者さんがいらっしゃいます。保護されたワンちゃんやネコちゃんとの共同作業を通じて、アニマルセラピーとしての効果も期待できる環境ですので、どうぞご安心ください。\n\nまた、コミュニケーションに不安を感じている方も多くいらっしゃいますが、スタッフを含め、同じような興味や趣味を持つ仲間が集まっています。ご自身のペースで、無理なく、ありのままの時間を過ごしていただける場所です。",
  },
  {
    question: "昼食は出ますか？",
    answer:
      "アネラでは、日替わりのランチをご用意しておりますので、お弁当をご持参いただく必要はありません。アレルギーや食事に関するご希望がある場合は、事前にご相談ください。※なお、ランチの提供状況は事業所によって異なりますので、あらかじめご確認をお願いいたします。",
  },
  {
    question: "利用中に体調が悪くなった場合はどうなりますか？",
    answer:
      "体調が優れない場合は、施設内の休憩スペースでお休みいただけます。また、無理のないご利用を第一に考え、体調に応じて早めにご帰宅いただくことも可能です。",
  },
  {
    question: "1日何時間・週何日から利用できますか？",
    answer:
      "1日のご利用時間は、ご自身の体調にあわせて柔軟に調整していただけます。※詳細な利用時間については、各事業所までお問い合わせください。",
  },
  {
    question: "見学だけでも可能ですか？",
    answer: "もちろん大歓迎です！体験利用も可能ですので、まずはお問い合わせください。",
  },
  {
    question: "体験利用は可能ですか？",
    answer: "もちろん、体験でのご利用も可能です！スタッフ一同、心よりお待ちしております。",
  },
  {
    question: "交通費は支給されますか？",
    answer:
      "交通費の支給有無や支給上限については、お住まいの市町村によって異なります。詳細につきましては、お手数ですが一度お問い合わせください。",
  },
  {
    question: "アクセスが悪いのですが、送迎などありますか？",
    answer:
      "送迎サービスもご用意しております。送迎をご利用いただく場合は、ご自宅もしくは事業所が指定する集合場所までお越しいただき、そこからの送迎となります。※送迎の提供状況は事業所によって異なりますので、事前にご確認をお願いいたします。",
  },
  {
    question: "「相談員さんを探すのが難しい」「利用申請の流れがわからない」「受給者証の申請が難しい」時は？",
    answer:
      "ご安心ください！スタッフが全面的にサポートいたします。必要に応じて、役所へのご同行も可能ですので、おひとりで悩まず、いつでもお気軽にご相談ください。",
  },
]

export default function EmploymentSupportBPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[70vh] min-h-[500px]">
        <Image
          src="/japanese-people-working-with-rescue-animals.jpg"
          alt="就労継続支援B型で働く日本人利用者さんと保護犬猫の様子"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Sophisticated back button positioned in top-left */}
        <Link
          href="/"
          className="absolute top-20 left-6 z-10 inline-flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full text-white hover:text-white hover:bg-black/60 transition-all duration-300 border border-white/40 shadow-xl"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="text-sm font-medium">ホーム</span>
        </Link>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-5xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">就労継続支援B型</h1>
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              働くことに不安をお持ちのあなたに！
              <br />
              かわいいワンちゃん猫ちゃん達と充実した就労を実現しませんか？
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                <Train className="h-4 w-4 mr-2" />
                駅から徒歩圏内
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                <MapPin className="h-4 w-4 mr-2" />
                自宅〜店舗送迎あり
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                <Coffee className="h-4 w-4 mr-2" />
                昼食あり ※1食100円
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 space-y-20">
        {/* Service Overview */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-warm-900">就労継続支援B型とは</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="border-sage-200 bg-sage-50">
              <CardContent className="p-8">
                <p className="text-lg text-warm-800 leading-relaxed mb-6">
                  一般企業などに雇用されることが困難な障がいのある方々が、生産活動の機会や、知識や経験、及び能力の向上のために必要な就労訓練を受けながら工賃を貰える障がい福祉サービスです。
                </p>
                <div className="bg-white rounded-lg p-6 border border-sage-200">
                  <h3 className="font-bold text-warm-900 mb-3 text-xl">私たちの理念</h3>
                  <p className="text-warm-700 leading-relaxed">
                    "障がい"という言葉で一括りにされがちな個性の違いも、私たちにとっては多様性そのもの。
                    精神的な困難や見えづらい個性も、すべての人が持つ"特性"のひとつと考え、
                    単なる支援ではなく理解と共生を軸にした社会を目指しています。
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Work Activities */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-warm-900">活動内容</h2>
          <p className="text-center text-warm-700 mb-12 max-w-3xl mx-auto">
            動物愛護と人間福祉の融合を目指し、様々な作業を通してスキルアップを支援します
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workActivities.map((category, index) => {
              const Icon = category.icon
              return (
                <Card key={index} className="border-warm-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-warm-100 rounded-full">
                        <Icon className="h-6 w-6 text-warm-600" />
                      </div>
                      <CardTitle className="text-xl text-warm-900">{category.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {category.activities.map((activity, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm text-warm-700">
                          <CheckCircle className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                          {activity}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-warm-50 -mx-4 px-4 py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-warm-900">嬉しい3つのポイント！</h2>
            <p className="text-center text-warm-700 mb-12 max-w-2xl mx-auto">
              利用者さんひとりひとりに寄り添い、安心して働ける環境を提供します
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <Card key={index} className="text-center border-warm-200 hover:shadow-lg transition-shadow bg-white">
                    <CardHeader>
                      <div className="mx-auto mb-4 p-4 bg-warm-100 rounded-full w-fit">
                        <Icon className="h-8 w-8 text-warm-600" />
                      </div>
                      <div className="text-2xl font-bold text-sage-600 mb-2">{benefit.highlight}</div>
                      <CardTitle className="text-xl text-warm-900">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-warm-700">{benefit.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* User Testimonials */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-warm-900">利用者さんの声</h2>
          <p className="text-center text-warm-700 mb-12 max-w-2xl mx-auto">
            実際に利用されている方々からの生の声をお聞きください
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {userTestimonials.map((testimonial, index) => (
              <Card key={index} className="border-sage-200 bg-sage-50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-sage-200 rounded-full">
                      <MessageCircle className="h-5 w-5 text-sage-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-warm-700 italic mb-3">"{testimonial.text}"</p>
                      <p className="text-sm font-semibold text-warm-900">— {testimonial.author}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Application Process */}
        <section className="bg-sage-50 -mx-4 px-4 py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-warm-900">就労開始までの流れ</h2>
            <p className="text-center text-warm-700 mb-12 max-w-2xl mx-auto">
              見学から利用開始まで、丁寧にサポートいたします
            </p>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {applicationSteps.map((step, index) => (
                  <Card key={index} className="text-center border-warm-200 bg-white">
                    <CardHeader>
                      <div className="mx-auto mb-4 w-16 h-16 bg-sage-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                        {step.step}
                      </div>
                      <CardTitle className="text-lg text-warm-900">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-warm-700">{step.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-warm-900">募集要項</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-warm-200">
              <CardHeader>
                <CardTitle className="text-xl text-warm-900">基本情報</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-medium text-warm-800">利用定員</span>
                  <span className="text-warm-700">20名</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-warm-800">利用時間</span>
                  <span className="text-warm-700">10:00〜18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-warm-800">利用対象者</span>
                  <span className="text-warm-700">18歳以上の障がいをお持ちの方</span>
                </div>
                <div className="bg-warm-50 p-4 rounded-lg">
                  <p className="text-sm text-warm-700">
                    ※障がい者手帳をお持ちでない方もご利用可能です。まずはお気軽にご相談ください。
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-warm-200">
              <CardHeader>
                <CardTitle className="text-xl text-warm-900">特徴・待遇</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-sage-600" />
                  <span className="text-warm-700">昼食1食100円にて提供</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-sage-600" />
                  <span className="text-warm-700">送迎サービス（各施設にご確認ください）</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-sage-600" />
                  <span className="text-warm-700">アニマルセラピー効果</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-sage-600" />
                  <span className="text-warm-700">段階的スキルアップ支援</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-warm-900">よくあるご質問</h2>
          <p className="text-center text-warm-700 mb-12 max-w-2xl mx-auto">皆様からよくいただくご質問にお答えします</p>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-warm-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <div className="flex items-start gap-3">
                      <HelpCircle className="h-5 w-5 text-sage-600 flex-shrink-0 mt-1" />
                      <span className="text-warm-900 font-medium">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="ml-8 text-warm-700 leading-relaxed whitespace-pre-line">{faq.answer}</div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Entry Form Section */}
        <section className="bg-warm-50 -mx-4 px-4 py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-warm-900">エントリー</h2>
            <p className="text-center text-warm-700 mb-12 max-w-2xl mx-auto">
              まずは、お電話・下記お問い合わせフォームから、見学のお申込みや、ご相談・ご質問、お気軽にお問合せください。
            </p>

            <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {/* Phone Contact */}
              <Card className="border-warm-200 bg-white">
                <CardContent className="p-6 text-center">
                  <Phone className="h-10 w-10 text-warm-600 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2 text-warm-900">お電話でのお問い合わせ</h3>
                  <p className="text-2xl font-bold text-sage-600 mb-2">070-4069-3422</p>
                  <p className="text-sm text-warm-600">受付時間：平日 9:00〜18:00</p>
                </CardContent>
              </Card>

              {/* LINE Contact */}
              <Card className="border-warm-200 bg-white">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="h-10 w-10 text-warm-600 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2 text-warm-900">LINEでのご相談</h3>
                  <div className="mb-4">
                    <QrCode className="h-16 w-16 text-sage-600 mx-auto mb-2" />
                    <p className="text-sm text-warm-600">
                      QRコードを読み取って
                      <br />
                      友だち追加してください
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    className="border-sage-400 text-sage-700 hover:bg-sage-50 bg-transparent"
                    asChild
                  >
                    <Link href="https://line.me/ti/p/your-line-id" target="_blank">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      LINEで相談
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Form Contact */}
              <Card className="border-warm-200 bg-white">
                <CardContent className="p-6 text-center">
                  <Mail className="h-10 w-10 text-warm-600 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2 text-warm-900">フォームでのお問い合わせ</h3>
                  <p className="text-sm text-warm-600 mb-4">
                    下記フォームに必要事項を
                    <br />
                    ご記入ください
                  </p>
                  <Button
                    variant="outline"
                    className="border-warm-400 text-warm-700 hover:bg-warm-50 bg-transparent"
                    onClick={() => document.getElementById("entry-form")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    <Send className="h-4 w-4 mr-2" />
                    フォームへ
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Entry Form */}
            <Card id="entry-form" className="border-warm-200 bg-white">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-warm-900">エントリーフォーム</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-warm-900">
                        メールアドレス <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="xxxxxx@xxxxx"
                        className="border-warm-300 focus:border-sage-500 max-w-md"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-warm-900">
                        お名前 <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        placeholder="山田　花子"
                        className="border-warm-300 focus:border-sage-500 max-w-sm"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="furigana" className="text-warm-900">
                        フリガナ <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="furigana"
                        placeholder="ヤマダ　ハナコ"
                        className="border-warm-300 focus:border-sage-500 max-w-sm"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-warm-900">性別</Label>
                      <RadioGroup defaultValue="" className="flex gap-6">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="male" id="male" />
                          <Label htmlFor="male">男性</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="female" id="female" />
                          <Label htmlFor="female">女性</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location" className="text-warm-900">
                        お住まいの市（地域） <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="location"
                        placeholder="千葉県流山市"
                        className="border-warm-300 focus:border-sage-500 max-w-sm"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-warm-900">
                        お電話番号 <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="phone"
                        placeholder="12-3456-7890"
                        className="border-warm-300 focus:border-sage-500 max-w-xs"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-warm-900">現在のご状況</Label>
                      <Select>
                        <SelectTrigger className="border-warm-300 focus:border-sage-500">
                          <SelectValue placeholder="選択してください" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="employed">現職中</SelectItem>
                          <SelectItem value="unemployed">離職中</SelectItem>
                          <SelectItem value="student">在学中</SelectItem>
                          <SelectItem value="no-experience">就業経験なし</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-warm-900">障がい種別</Label>
                      <Select>
                        <SelectTrigger className="border-warm-300 focus:border-sage-500">
                          <SelectValue placeholder="選択してください" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mental">精神障害</SelectItem>
                          <SelectItem value="intellectual">知的障害</SelectItem>
                          <SelectItem value="physical">身体障害</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-warm-900">
                        障がい手帳の有無 <span className="text-red-500">*</span>
                      </Label>
                      <RadioGroup className="flex gap-6">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="handbook-yes" />
                          <Label htmlFor="handbook-yes">あり</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="handbook-no" />
                          <Label htmlFor="handbook-no">なし</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="planned" id="handbook-planned" />
                          <Label htmlFor="handbook-planned">取得予定</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-warm-900">
                        障がい福祉サービス受給者証 <span className="text-red-500">*</span>
                      </Label>
                      <RadioGroup className="flex gap-6">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="certificate-yes" />
                          <Label htmlFor="certificate-yes">あり</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="certificate-no" />
                          <Label htmlFor="certificate-no">なし</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-warm-900">
                      ご質問・ご相談内容
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="見学希望、体験利用希望、その他ご質問などお気軽にお書きください"
                      className="border-warm-300 focus:border-sage-500 min-h-[120px]"
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox id="privacy" className="mt-1" />
                    <Label htmlFor="privacy" className="text-sm text-warm-700 leading-relaxed">
                      下記プライバシーポリシーに同意します。
                      <br />
                      正確かつ迅速な対応を行うためお問い合わせ内容を記録し、グループ企業・フランチャイズ企業間で利用させていただくことがございます。
                      個人情報の取扱いについては弊社プライバシーポリシーをご覧��ださい。
                    </Label>
                  </div>

                  <div className="text-center pt-4">
                    <Button type="submit" size="lg" className="bg-slate-800 hover:bg-slate-900 text-white px-12">
                      <Send className="h-4 w-4 mr-2" />
                      応募する
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
