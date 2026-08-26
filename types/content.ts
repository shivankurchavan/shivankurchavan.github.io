export type ContentType =
  | "project"
  | "article"
  | "thought";

export interface ContentMetadata {
  title: string;
  slug: string;

  date: string;

  description?: string;

  category?: string;

  tags?: string[];

  featured?: boolean;

  type: ContentType;
}

export interface ContentItem {
  metadata: ContentMetadata;
  content: string;
}