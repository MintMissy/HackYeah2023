export type Attidute = 'positive' | 'negative' | 'neutral';
export type AttiduteIcon = Attidute | 'default';
export interface PostInterface {
  postId: string;
  tagName: string;
  content: string;
  attitude: AttiduteIcon;
  negativeVotes: number;
  neutralVotes: number;
  positiveVotes: number;
}
