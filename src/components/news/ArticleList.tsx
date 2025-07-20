import type { Article } from '@/lib/types';
import { ArticleCard } from '@/components/news/ArticleCard';

export function ArticleList({ articles }: { articles: Article[] }) {
  if (articles.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16">
        <h2 className="text-2xl font-headline font-semibold">No Articles Found</h2>
        <p className="text-muted-foreground mt-2">Try adjusting your search or check back later.</p>
      </div>
    )
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}
