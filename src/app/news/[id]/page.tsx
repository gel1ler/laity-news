import { NewsCard } from "@/components/news/card"
import { newsArticles } from "@/db/dummyData"

export default async function Page({
  params,
}: {
  params: Promise<{ id: number }>
}) {
  const { id } = await params

  const article = newsArticles.find(i => i.id == id)

  if (article) return <div>
    <NewsCard data={article} size="wide" />
  </div>
  else return <div>
    404
  </div>
}