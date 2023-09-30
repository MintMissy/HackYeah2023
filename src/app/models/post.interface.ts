export type Attidute = 'positive' | 'negative' | 'neutral';
export interface PostInterface {
  title: string;
  description: string;
  attidute: Attidute;
  negativeVotes: number;
  neutralVotes: number;
  positiveVotes: number;
}
