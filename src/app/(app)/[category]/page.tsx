import { getArticles, CATEGORIES } from '@/lib/articles.tsx';
import type { ArticleCategory } from '@/lib/types';
import { ArticleList } from '@/components/news/ArticleList';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    category: cat.slug,
  }));
}

export default function CategoryPage({
  params,
}: {
  params: { category: ArticleCategory };
}) {
  const categoryInfo = CATEGORIES.find(c => c.slug === params.category);

  if (!categoryInfo) {
    notFound();
  }

  const articles = getArticles(params.category);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold font-headline">{categoryInfo.name} News</h1>
      <ArticleList articles={articles} />
    </div>
  );
}
