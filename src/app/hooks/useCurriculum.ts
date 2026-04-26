import { useState, useEffect } from "react";
import { CurriculumService } from "../services/curriculumService";
import { Section, Lesson } from "../data/types";

interface UseAsyncState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

/**
 * Custom hook for fetching all sections
 * Handles loading and error states for UI feedback
 */
export function useSections(): UseAsyncState<Section[]> {
  const [state, setState] = useState<UseAsyncState<Section[]>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    CurriculumService.getAllSections()
      .then((data) => {
        if (isMounted) {
          setState({ data, loading: false, error: null });
        }
      })
      .catch((error) => {
        if (isMounted) {
          setState({
            data: null,
            loading: false,
            error: error instanceof Error ? error : new Error("Unknown error"),
          });
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return state;
}

/**
 * Custom hook for fetching a single section by ID
 * @param sectionId - The section ID to fetch
 */
export function useSection(sectionId: string | undefined): UseAsyncState<Section | null> {
  const [state, setState] = useState<UseAsyncState<Section | null>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    if (!sectionId) {
      setState({ data: null, loading: false, error: null });
      return;
    }

    let isMounted = true;

    CurriculumService.getSectionById(sectionId)
      .then((data) => {
        if (isMounted) {
          setState({ data, loading: false, error: null });
        }
      })
      .catch((error) => {
        if (isMounted) {
          setState({
            data: null,
            loading: false,
            error: error instanceof Error ? error : new Error("Unknown error"),
          });
        }
      });

    return () => {
      isMounted = false;
    };
  }, [sectionId]);

  return state;
}

/**
 * Custom hook for fetching a specific lesson within a section
 * @param sectionId - The section ID
 * @param lessonId - The lesson ID
 */
export function useLesson(
  sectionId: string | undefined,
  lessonId: string | undefined
): UseAsyncState<{
  section: Section;
  lesson: Lesson;
  lessonIndex: number;
} | null> {
  const [state, setState] = useState<
    UseAsyncState<{
      section: Section;
      lesson: Lesson;
      lessonIndex: number;
    } | null>
  >({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    if (!sectionId || !lessonId) {
      setState({ data: null, loading: false, error: null });
      return;
    }

    let isMounted = true;

    CurriculumService.getLesson(sectionId, lessonId)
      .then((data) => {
        if (isMounted) {
          setState({ data, loading: false, error: null });
        }
      })
      .catch((error) => {
        if (isMounted) {
          setState({
            data: null,
            loading: false,
            error: error instanceof Error ? error : new Error("Unknown error"),
          });
        }
      });

    return () => {
      isMounted = false;
    };
  }, [sectionId, lessonId]);

  return state;
}

/**
 * Custom hook for fetching lesson navigation (previous/next)
 * @param sectionId - The section ID
 * @param lessonId - The current lesson ID
 */
export function useLessonNavigation(
  sectionId: string | undefined,
  lessonId: string | undefined
): UseAsyncState<{ previous: Lesson | null; next: Lesson | null } | null> {
  const [state, setState] = useState<
    UseAsyncState<{ previous: Lesson | null; next: Lesson | null } | null>
  >({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    if (!sectionId || !lessonId) {
      setState({ data: null, loading: false, error: null });
      return;
    }

    let isMounted = true;

    CurriculumService.getLessonNavigation(sectionId, lessonId)
      .then((data) => {
        if (isMounted) {
          setState({ data, loading: false, error: null });
        }
      })
      .catch((error) => {
        if (isMounted) {
          setState({
            data: null,
            loading: false,
            error: error instanceof Error ? error : new Error("Unknown error"),
          });
        }
      });

    return () => {
      isMounted = false;
    };
  }, [sectionId, lessonId]);

  return state;
}

/**
 * Custom hook for fetching platform statistics
 */
export function useStats(): UseAsyncState<{
  totalSections: number;
  totalLessons: number;
  programmingLanguage: string;
}> {
  const [state, setState] = useState<
    UseAsyncState<{
      totalSections: number;
      totalLessons: number;
      programmingLanguage: string;
    }>
  >({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    CurriculumService.getStats()
      .then((data) => {
        if (isMounted) {
          setState({ data, loading: false, error: null });
        }
      })
      .catch((error) => {
        if (isMounted) {
          setState({
            data: null,
            loading: false,
            error: error instanceof Error ? error : new Error("Unknown error"),
          });
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return state;
}
