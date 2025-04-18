import { TSide } from "./globalTypes";

export type TSize = 'small' | 'medium' | 'big' | 'wide'

export type TNewsArticle = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  imageUrl: string;
  imageAlign: TSide;
  size: TSize;
}