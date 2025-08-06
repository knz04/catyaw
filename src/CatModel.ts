export interface Cat {
  id: string;
  tags: string[];
  mimetype: string;
  createdAt: string;
}

export interface CatCardProps {
  cat: Cat;
}
