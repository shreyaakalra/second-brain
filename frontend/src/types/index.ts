export interface ContentCard {
  _id: string;
  title: string;
  type: "article" | "tweet" | "video" | "image" | "audio";
  link: string;
  tags: string[];
}