export interface MarkdownEntry {
  title: string;
  description?: string;
  content: string;
}

export interface ChapterSet {
  seriesTitle: string;
  seriesDescription?: string;
  chapters: MarkdownEntry[];
}