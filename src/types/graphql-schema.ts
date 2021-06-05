export type Category = {
  id: string | number;
  name: string;
};

export type Thumbnail = {
  id: string | number;
  url: string;
  alternativeText?: string;
  caption?: string;
};

export type GalleryImage = {
  alternativeText: string;
  url: string;
  caption?: string;
};

export type Post = {
  id: string | number;
  title: string;
  subtitle?: string;
  thumbnail?: Thumbnail;
  content: string;
  categories?: Category[];
  published_at: string;
  gallery?: GalleryImage[];
  slug: string;
};
