export type Category = {
  id: string | number;
  created_at: Date;
  updated_at: Date;
  name: string;
};

export type Post = {
  id: string | number;
  title: string;
  subtitle?: string;
  thumbnail?: { id: string; url: string };
  content: string;
  categories: Category[];
  published_at: Date;
  slug: string;
};
