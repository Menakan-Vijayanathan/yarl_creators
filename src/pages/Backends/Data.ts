import { Article, User } from './types';

export const MOCK_USER: User = {
  username: 'admin',
  password: 'admin123'
};

export const MOCK_ARTICLES: Article[] = [
  {
    id: '1',
    title: 'The Future of Technology',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    category: 'Technology',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    createdAt: '2024-03-15'
  },
  {
    id: '2',
    title: 'Sustainable Living',
    content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    category: 'Lifestyle',
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09',
    createdAt: '2024-03-14'
  }
];