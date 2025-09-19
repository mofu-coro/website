export interface NewsItem {
    id: string
    title: string
    date: string
    category: "お知らせ" | "イベント" | "新着情報" | "重要"
    content: string
    isImportant?: boolean
  }
  
  // Easy to maintain news data - just add new items to the top of the array
  export const newsData: NewsItem[] = [
    {
      id: "2024-03-15-spring-event",
      title: "春の保護犬猫ふれあいイベント開催のお知らせ",
      date: "2024-03-15",
      category: "イベント",
      content:
        "3月20日（水）〜3月24日（日）の期間中、春の保護犬猫ふれあいイベントを開催いたします。新しい家族を探している可愛い子たちとの出会いをお楽しみください。",
      isImportant: true,
    },
    {
      id: "2024-03-10-trimming-schedule",
      title: "トリミングサービス予約状況について",
      date: "2024-03-10",
      category: "お知らせ",
      content:
        "現在、トリミングサービスの予約が大変混み合っております。ご利用をお考えの方は、お早めにお電話またはWebサイトからご予約をお取りください。",
    },
    {
      id: "2024-03-05-dogrun-maintenance",
      title: "ドッグラン設備メンテナンスのお知らせ",
      date: "2024-03-05",
      category: "重要",
      content:
        "3月12日（火）は設備メンテナンスのため、ドッグランのご利用を一時休止させていただきます。ご不便をおかけいたしますが、ご理解のほどよろしくお願いいたします。",
      isImportant: true,
    },
    {
      id: "2024-03-01-new-kitchen-menu",
      title: "キッチンカー新メニュー登場！",
      date: "2024-03-01",
      category: "新着情報",
      content:
        "キッチンカーに新しいメニューが登場しました！地元の新鮮な野菜を使用したヘルシーサンドイッチと、手作りスイーツをぜひお試しください。",
    },
    {
      id: "2024-02-28-volunteer-recruitment",
      title: "ボランティアスタッフ募集中",
      date: "2024-02-28",
      category: "お知らせ",
      content:
        "保護犬猫のお世話やイベントのお手伝いをしていただけるボランティアスタッフを募集しています。動物好きの方、お気軽にお問い合わせください。",
    },
    {
      id: "2024-02-25-adoption-success",
      title: "嬉しい家族決定のご報告",
      date: "2024-02-25",
      category: "新着情報",
      content:
        "今月も多くの保護犬猫たちに新しい家族が見つかりました。温かい家庭に迎えられた子たちの幸せそうな様子を見ることができ、スタッフ一同大変嬉しく思っております。",
    },
  ]
  
  // Helper functions for easy maintenance
  export function getLatestNews(limit = 5): NewsItem[] {
    return newsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, limit)
  }
  
  export function getImportantNews(): NewsItem[] {
    return newsData
      .filter((item) => item.isImportant)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }
  
  export function getNewsByCategory(category: NewsItem["category"]): NewsItem[] {
    return newsData
      .filter((item) => item.category === category)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }
  
  export function formatDate(dateString: string): string {
    const date = new Date(dateString)
    return date.toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }
  