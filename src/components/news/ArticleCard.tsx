import type { Article } from '@/lib/types';
import Link from 'next/link';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SaveArticleButton } from './SaveArticleButton';

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <Link href={`/article/${article.id}`} className="flex flex-col flex-grow">
        <CardHeader className="p-0">
          <div className="relative h-48 w-full">
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              className="object-cover"
              data-ai-hint={`${article.category} news`}
            />
          </div>
        </CardHeader>
        <CardContent className="p-4 flex-grow">
          <Badge variant="outline" className="mb-2 capitalize">{article.category}</Badge>
          <CardTitle className="font-headline text-lg leading-snug">{article.title}</CardTitle>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{article.description}</p>
        </CardContent>
      </Link>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <p className="text-xs text-muted-foreground">{new Date(article.date).toLocaleDateString()}</p>
        <SaveArticleButton articleId={article.id} />
      </CardFooter>
    </Card>
  );
}
