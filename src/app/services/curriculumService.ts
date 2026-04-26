import { Section, Lesson, Subsection } from "../data/types";
import { curriculum } from "../data/curriculum";

/**
 * CurriculumService - Data abstraction layer for curriculum content
 * 
 * This service acts as a bridge between components and data sources.
 * Currently uses local hardcoded data, but designed to easily swap with a backend API.
 * 
 * Example for future backend integration:
 * Replace the implementation with API calls:
 * - https://api.example.com/sections
 * - https://api.example.com/sections/:id
 * - https://api.example.com/sections/:sectionId/lessons/:lessonId
 */

export class CurriculumService {
  /**
   * Get all sections
   * @returns Promise<Section[]>
   */
  static getAllSections(): Promise<Section[]> {
    return Promise.resolve(curriculum);
  }

  /**
   * Get a single section by ID
   * @param sectionId - The section ID
   * @returns Promise<Section | null>
   */
  static getSectionById(sectionId: string): Promise<Section | null> {
    const section = curriculum.find((s) => s.id === sectionId);
    return Promise.resolve(section || null);
  }

  /**
   * Get a specific lesson within a section
   * @param sectionId - The section ID
   * @param lessonId - The lesson ID
   * @returns Promise<{section: Section, lesson: Lesson, lessonIndex: number} | null>
   */
  static getLesson(
    sectionId: string,
    lessonId: string
  ): Promise<{ section: Section; lesson: Lesson; lessonIndex: number } | null> {
    const section = curriculum.find((s) => s.id === sectionId);
    if (!section) return Promise.resolve(null);

    const lessonIndex = section.lessons.findIndex((l) => l.id === lessonId);
    if (lessonIndex === -1) return Promise.resolve(null);

    return Promise.resolve({
      section,
      lesson: section.lessons[lessonIndex],
      lessonIndex,
    });
  }

  /**
   * Get navigation for lesson (previous/next lessons)
   * @param sectionId - The section ID
   * @param lessonId - The current lesson ID
   * @returns Promise containing previous and next lessons
   */
  static getLessonNavigation(
    sectionId: string,
    lessonId: string
  ): Promise<{ previous: Lesson | null; next: Lesson | null } | null> {
    const section = curriculum.find((s) => s.id === sectionId);
    if (!section) return Promise.resolve(null);

    const lessonIndex = section.lessons.findIndex((l) => l.id === lessonId);
    if (lessonIndex === -1) return Promise.resolve(null);

    return Promise.resolve({
      previous: lessonIndex > 0 ? section.lessons[lessonIndex - 1] : null,
      next: lessonIndex < section.lessons.length - 1 ? section.lessons[lessonIndex + 1] : null,
    });
  }

  /**
   * Get total lesson count for a section
   * @param sectionId - The section ID
   * @returns Promise<number>
   */
  static getSectionLessonCount(sectionId: string): Promise<number> {
    const section = curriculum.find((s) => s.id === sectionId);
    return Promise.resolve(section?.lessons.length || 0);
  }

  /**
   * Get total statistics for the platform
   * @returns Promise containing stats
   */
  static getStats(): Promise<{
    totalSections: number;
    totalLessons: number;
    programmingLanguage: string;
  }> {
    const totalSections = curriculum.length;
    const totalLessons = curriculum.reduce((acc, section) => acc + section.lessons.length, 0);

    return Promise.resolve({
      totalSections,
      totalLessons,
      programmingLanguage: "Python",
    });
  }
}
