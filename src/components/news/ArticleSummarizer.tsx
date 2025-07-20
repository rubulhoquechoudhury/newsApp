"use client";

import { useState } from 'react';
import { summarizeArticle, SummarizeArticleOutput } from '@/ai/flows/summarize-article';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Sparkles, BookOpen } from 'lucide-react';

export function ArticleSummarizer({ articleContent }: { articleContent: string }) {
  const [summary, setSummary] = useState<SummarizeArticleOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSummarize = async () => {
    setIsLoading(true);
    setSummary(null);
    try {
      const result = await summarizeArticle({ articleContent });
      setSummary(result);
    } catch (error) {
      console.error('Summarization failed:', error);
      toast({
        variant: 'destructive',
        title: 'Summarization Failed',
        description: 'Could not generate a summary for this article. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-12 border-t pt-8">
      <Card className="bg-card/50 shadow-sm border-dashed">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-headline">
            <Sparkles className="text-accent" />
            AI-Powered Summary
          </CardTitle>
          <CardDescription>
            Get the key points of this article in seconds.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!summary && !isLoading && (
            <Button onClick={handleSummarize} disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Summarize with AI
                </>
              )}
            </Button>
          )}

          {isLoading && (
            <div className="flex items-center text-muted-foreground">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              <span>Analyzing article and generating summary...</span>
            </div>
          )}

          {summary && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold font-headline">Summary</h3>
              <p className="text-foreground/90">{summary.summary}</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <BookOpen className="h-4 w-4" />
                <span>Estimated reading time: {summary.estimatedReadingTime}</span>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
