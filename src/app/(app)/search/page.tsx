import { searchArticles } from '@/lib/articles.tsx';
import { ArticleList } from '@/components/news/ArticleList';

export default function SearchPage({
  searchParams,
}: {
  searchParams?: { q?: string };
}) {
  const query = searchParams?.q || '';
  const articles = searchArticles(query);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold font-headline">
        Search Results for "{query}"
      </h1>
      <ArticleList articles={articles} />
    </div>
  );
}
