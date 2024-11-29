export type chapters = string[];

export interface Toc {
  book: string;
  chapters: chapters;
}

export interface ChaptProp {
  chapters: chapters;
}

export interface AllProp {
  chapters: string[];
  subheading:string;
  chapterContent: string[];
  setChapterContent: React.Dispatch<React.SetStateAction<string[]>>;
  setSubheading: React.Dispatch<React.SetStateAction<string>>;
}

export type TocProp = Omit<AllProp, 'subheading' | 'chapterContent'>

export interface ContentProp {
  chapters: chapters;
  subheading: string;
  chapterContent: string;
  setChapterContent: React.Dispatch<React.SetStateAction<string>>;
  setSubheading: React.Dispatch<React.SetStateAction<string>>;
}

export type SubHeading = 'Table of Contents' | 'Chapter'