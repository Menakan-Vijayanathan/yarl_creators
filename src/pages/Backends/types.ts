export interface Article {
  id: string;
  title: string;
  content: string;
  category: string;
  imageUrl: string;
  createdAt: string;
}

export interface User {
  username: string;
  password: string;
}