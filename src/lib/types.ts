export type ArticleCategory = 'world' | 'technology' | 'business' | 'sports';

export type Article = {
  id: string;
  title: string;
  description: string;
  content: string;
  imageUrl: string;
  category: ArticleCategory;
  date: string;
};
