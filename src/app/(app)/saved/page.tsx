"use client";

import { useSavedArticles } from '@/hooks/use-saved-articles';
import { getArticleById } from '@/lib/articles.tsx';
import type { Article } from '@/lib/types';
import { ArticleList } from '@/components/news/ArticleList';
import { Skeleton } from '@/components/ui/skeleton';
import { Bookmark } from 'lucide-react';

function SavedArticlesPageContent() {
  const { savedArticleIds, isLoaded } = useSavedArticles();

  if (!isLoaded) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-80 w-full" />
            ))}
        </div>
    )
  }

  const savedArticles = savedArticleIds
    .map((id) => getArticleById(id))
    .filter((article): article is Article => !!article)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  if (savedArticles.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-20 bg-card rounded-lg border border-dashed">
        <Bookmark className="h-16 w-16 text-muted-foreground" />
        <h2 className="mt-6 text-2xl font-headline font-semibold">No Saved Articles Yet</h2>
        <p className="mt-2 text-muted-foreground">Click the bookmark icon on any article to save it for later.</p>
      </div>
    );
  }

  return <ArticleList articles={savedArticles} />;
}


export default function SavedPage() {
    return (
         <div className="space-y-6">
            <h1 className="text-3xl font-bold font-headline">Saved Articles</h1>
            <SavedArticlesPageContent />
        </div>
    )
}
