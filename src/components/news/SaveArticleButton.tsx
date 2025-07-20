"use client";

import { useSavedArticles } from '@/hooks/use-saved-articles';
import { Button } from '@/components/ui/button';
import { Bookmark } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Skeleton } from '../ui/skeleton';

export function SaveArticleButton({ articleId }: { articleId: string }) {
  const { isSaved, addArticle, removeArticle, isLoaded } = useSavedArticles();

  if (!isLoaded) {
      return <Skeleton className="h-10 w-10" />
  }

  const handleToggleSave = () => {
    if (isSaved(articleId)) {
      removeArticle(articleId);
    } else {
      addArticle(articleId);
    }
  };

  const saved = isSaved(articleId);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggleSave}
      aria-label={saved ? 'Unsave article' : 'Save article'}
    >
      <Bookmark className={cn('h-5 w-5', saved && 'fill-primary text-primary')} />
    </Button>
  );
}
