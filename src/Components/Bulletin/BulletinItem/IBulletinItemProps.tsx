export interface IBulletinItemProps {
  upvote: (bulletinId: string) => void;
  remove: (bulletinId: string) => void;
  votes: number;
  description: string;
  title: string;
  id: string;
}
