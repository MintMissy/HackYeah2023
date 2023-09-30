export type Attidute = 'positive' | 'negative' | 'neutral';
export type AttiduteIcon = Attidute | 'default';
export interface PostInterface {
  id: string;
  tag: string;
  description: string;
  attidute: AttiduteIcon;
  negativeVotes: number;
  neutralVotes: number;
  positiveVotes: number;
}
