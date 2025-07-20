import type { Article, ArticleCategory } from '@/lib/types';

export const CATEGORIES: { name: string; slug: ArticleCategory; icon: React.ElementType }[] = [
    { name: 'World', slug: 'world', icon: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg> },
    { name: 'Technology', slug: 'technology', icon: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg> },
    { name: 'Business', slug: 'business', icon: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="6" x2="6" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="18" x2="18" y1="20" y2="14"/></svg> },
    { name: 'Sports', slug: 'sports', icon: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12.83 2.17 4 4L7.5 15.5.07 8.07c.54-.54 1.2-.88 1.93-1.06l4.51-.51 2.89-4.33c.24-.36.62-.57 1.03-.57.41 0 .79.21 1.03.57Z"/><path d="M15.5 7.5 20 3l-4.5 4.5"/><path d="M14 8.5c-1.33 1.33-2 2-2.67 2.67A2.5 2.5 0 0 0 11 14.5c0 .34.08.66.23.94L14 18l.67-.67c.67-.67 1.34-1.34 2.67-2.67a2.5 2.5 0 0 0-3.34-3.16Z"/></svg> },
];

const ARTICLES: Article[] = [
  {
    id: 'world-1',
    title: 'Global Leaders Gather for Climate Summit',
    description: 'World leaders are meeting to discuss urgent climate action and commitments to reduce carbon emissions.',
    content: "Leaders from over 100 countries have gathered in Geneva for a pivotal climate summit aimed at forging a new global agreement on reducing carbon emissions. The summit, which follows months of intense negotiations, is seen as a critical opportunity to avert the worst impacts of climate change. Scientists have warned that without immediate and drastic action, the world faces catastrophic consequences, including rising sea levels, extreme weather events, and widespread food shortages. The host nation's president opened the summit with a powerful plea for unity and ambition, stating, 'The eyes of the world, and of future generations, are upon us. We cannot afford to fail.' Key discussion points include financing for developing nations to transition to green energy, a timeline for phasing out fossil fuels, and mechanisms for holding countries accountable for their pledges.",
    imageUrl: 'https://placehold.co/600x400.png',
    category: 'world',
    date: '2023-10-26',
  },
  {
    id: 'tech-1',
    title: 'The Future of AI in Everyday Life',
    description: 'Experts predict that artificial intelligence will soon become an even more integral part of our daily routines.',
    content: "From smart homes that anticipate our needs to personalized healthcare recommendations, artificial intelligence is rapidly moving beyond the realm of science fiction and into our everyday lives. Tech giants and startups alike are pouring billions into research and development, leading to breakthroughs in machine learning, natural language processing, and computer vision. 'We are at an inflection point,' says Dr. Evelyn Reed, a leading AI researcher. 'The next five years will see AI integration on a scale we've never witnessed before.' This integration promises immense benefits, such as more efficient transportation systems, early disease detection, and highly personalized education. However, it also raises significant ethical questions about data privacy, algorithmic bias, and the future of work. As we delegate more decisions to machines, a global conversation about governance and regulation is becoming increasingly urgent.",
    imageUrl: 'https://placehold.co/600x400.png',
    category: 'technology',
    date: '2023-10-25',
  },
  {
    id: 'business-1',
    title: 'Stock Market Reaches Record Highs Amidst Economic Uncertainty',
    description: 'Despite mixed economic signals, major stock indices have soared to new heights, leaving analysts divided.',
    content: "The stock market continued its surprising rally this week, with the S&P 500 and Dow Jones Industrial Average closing at all-time highs. This bullish trend comes despite lingering concerns about inflation, supply chain disruptions, and geopolitical tensions. 'There's a significant disconnect between Wall Street and Main Street,' commented financial analyst Mark Jennings. 'Investors are betting on strong corporate earnings and the belief that central banks will manage to curb inflation without triggering a recession.' Technology and renewable energy sectors have been the primary drivers of the rally. However, some experts urge caution, pointing to historical precedents where such rapid ascents were followed by sharp corrections. Small business sentiment, in contrast, remains subdued, with many owners citing rising costs and labor shortages as major challenges.",
    imageUrl: 'https://placehold.co/600x400.png',
    category: 'business',
    date: '2023-10-24',
  },
  {
    id: 'sports-1',
    title: 'Underdogs Clinch Championship in Stunning Upset',
    description: 'The Tigers have won their first championship in 50 years after a dramatic final-minute victory.',
    content: "In what is being called one of the greatest upsets in the history of the sport, the Northwood Tigers have clinched the national championship. The final match against the heavily favored Dynamos was a nail-biter from start to finish, culminating in a last-second score that sealed the Tigers' 21-20 victory. Quarterback Leo Martinez, who was named MVP, led the team on a heroic 80-yard drive in the final minute of the game. 'Nobody believed in us,' an emotional Martinez said in a post-game interview. 'This is for our city, for our fans, for every kid who was ever told they weren't good enough.' The victory marks the franchise's first title in five decades and caps a Cinderella season that saw them defy expectations at every turn. Celebrations are expected to continue throughout the week in their hometown.",
    imageUrl: 'https://placehold.co/600x400.png',
    category: 'sports',
    date: '2023-10-23',
  },
   {
    id: 'world-2',
    title: 'Archaeological Dig Unearths Lost Ancient City',
    description: 'A team of archaeologists has discovered the ruins of a city that was thought to exist only in legend.',
    content: 'An international team of archaeologists has announced the discovery of the lost city of Oakhaven, a civilization previously believed to be mythical. The ruins, located deep within the Amazon rainforest, include sophisticated structures, intricate waterways, and artifacts that suggest a highly advanced society. Dr. Alistair Finch, the lead archaeologist, called it the "find of a lifetime." The city is believed to have flourished over 2,000 years ago before mysteriously vanishing. The team is now working to decipher the intricate carvings found on a central monolith, which they hope will shed light on the city\'s history and its eventual demise.',
    imageUrl: 'https://placehold.co/600x400.png',
    category: 'world',
    date: '2023-10-22',
  },
  {
    id: 'tech-2',
    title: 'New Quantum Computing Breakthrough Announced',
    description: 'Researchers have developed a new technique that could dramatically increase the stability of quantum bits.',
    content: 'Scientists at a leading research institute have published a paper detailing a breakthrough in quantum computing. They have developed a new method for stabilizing qubits, the fundamental building blocks of quantum computers, which could overcome one of the biggest hurdles in the field. This new technique allows qubits to maintain their quantum state for significantly longer, potentially paving the way for the creation of powerful, fault-tolerant quantum computers capable of solving problems currently intractable for even the fastest supercomputers. The implications range from drug discovery and materials science to financial modeling and cryptography.',
    imageUrl: 'https://placehold.co/600x400.png',
    category: 'technology',
    date: '2023-10-21',
  },
  {
    id: 'business-2',
    title: 'The Rise of the Four-Day Work Week',
    description: 'More companies are experimenting with a four-day work week, reporting increased productivity and employee satisfaction.',
    content: 'A growing number of companies worldwide are ditching the traditional 9-to-5, five-day work week in favor of a four-day model, often with no reduction in pay. A recent large-scale trial involving dozens of companies found that the shorter week led to lower stress, higher job satisfaction, and better work-life balance for employees. Surprisingly, most companies also reported that productivity and revenue remained stable or even increased. Proponents argue that a compressed schedule forces more efficient work habits and reduces operational costs. While challenges remain, the four-day week is gaining momentum as a viable future for the modern workplace.',
    imageUrl: 'https://placehold.co/600x400.png',
    category: 'business',
    date: '2023-10-20',
  },
  {
    id: 'sports-2',
    title: 'Elena Rios Smashes World Record in Marathon',
    description: 'Elena Rios has set a new world record in the Berlin Marathon, shattering the previous time by over a minute.',
    content: 'Runner Elena Rios delivered a historic performance at the Berlin Marathon, finishing with a time of 2:11:53 and smashing the previous women\'s world record. The 28-year-old ran a blistering pace from the outset, pulling away from the elite pack and running the final 10 kilometers alone against the clock. "I felt good today, the conditions were perfect, and I just went for it," Rios said after the race. "To break the world record is a dream I have had since I was a little girl." Her incredible achievement is the result of years of dedicated training and is being celebrated as a landmark moment in the world of athletics.',
    imageUrl: 'https://placehold.co/600x400.png',
    category: 'sports',
    date: '2023-10-19',
  },
];

export function getArticles(category?: ArticleCategory): Article[] {
  if (category) {
    return ARTICLES.filter((article) => article.category === category);
  }
  return ARTICLES;
}

export function getArticleById(id: string): Article | undefined {
  return ARTICLES.find((article) => article.id === id);
}

export function searchArticles(query: string): Article[] {
  if (!query) {
    return [];
  }
  const lowercasedQuery = query.toLowerCase();
  return ARTICLES.filter(
    (article) =>
      article.title.toLowerCase().includes(lowercasedQuery) ||
      article.description.toLowerCase().includes(lowercasedQuery)
  );
}
