export interface Subsection {
  id: string;
  title: string;
  content?: string;
  subsections?: Subsection[];
}

export interface Lesson {
  id: string;
  title: string;
  description?: string;
  content?: string;
  subsections?: Subsection[];
  isActivity?: boolean;
}

export interface Section {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  lessons: Lesson[];
}
