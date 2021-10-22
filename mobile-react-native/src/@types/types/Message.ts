export interface MessageTypes {
  id: string;
  text: string;
  created_at: string;
  user: {
    name: string;
    avatar_url: string;
  };
}
