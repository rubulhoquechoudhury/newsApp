import { getArticleById, getArticles } from '@/lib/articles.tsx';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { ArticleSummarizer } from '@/components/news/ArticleSummarizer';
import { SaveArticleButton } from '@/components/news/SaveArticleButton';
import { CalendarDays } from 'lucide-react';

export async function generateStaticParams() {
    const articles = getArticles();
    return articles.map((article) => ({
      id: article.id,
    }));
}

export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = getArticleById(params.id);

  if (!article) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto py-8">
      <div className="space-y-4 text-center">
        <Badge variant="secondary" className="capitalize">{article.category}</Badge>
        <h1 className="text-4xl md:text-5xl font-bold font-headline leading-tight">{article.title}</h1>
        <div className="flex items-center justify-center space-x-4 text-muted-foreground">
            <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                <time dateTime={article.date}>{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
            </div>
            <SaveArticleButton articleId={article.id} />
        </div>
      </div>

      <div className="relative h-96 w-full my-8 rounded-lg overflow-hidden shadow-xl">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          className="object-cover"
          priority
          data-ai-hint={`${article.category} news story`}
        />
      </div>

      <div className="prose prose-lg max-w-none font-body text-foreground/90">
         <p className="lead text-xl !mb-8 text-foreground">{article.description}</p>
         {article.content.split('\\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <ArticleSummarizer articleContent={article.content} />
    </article>
  );
}
