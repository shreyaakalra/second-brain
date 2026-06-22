export interface ContentCardType {
  _id: string;
  title: string;
  type: "article" | "tweet" | "video" | "image" | "audio";
  link: string;
  tags: string[];
  previewImage?: string;
  previewTitle?: string;
  previewDescription?: string;
}