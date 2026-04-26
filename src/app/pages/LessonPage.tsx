import React from "react";
import { useParams, Link } from "react-router";
import { Header } from "../components/Header";
import { CodeRunner } from "../components/CodeRunner";
import { ProgressBar } from "../components/ProgressBar";
import { useLesson, useLessonNavigation } from "../hooks/useCurriculum";
import { Subsection } from "../data/types";
import { ChevronLeft, ChevronRight } from "lucide-react";

function SubsectionContent({ subsections, level = 0 }: { subsections: Subsection[]; level?: number }) {
  const headingClass = level === 0 
    ? "text-2xl font-bold mt-8 mb-4" 
    : level === 1 
    ? "text-xl font-semibold mt-6 mb-3 ml-4" 
    : "text-lg font-semibold mt-4 mb-2 ml-8";

  return (
    <div>
      {subsections.map((subsection) => (
        <div key={subsection.id}>
          <h3 className={headingClass}>{subsection.title}</h3>
          {subsection.content && (
            <div className="text-gray-700 mb-4 leading-relaxed">
              {subsection.content}
            </div>
          )}
          {subsection.subsections && subsection.subsections.length > 0 && (
            <SubsectionContent subsections={subsection.subsections} level={level + 1} />
          )}
        </div>
      ))}
    </div>
  );
}

export function LessonPage() {
  const { sectionId, lessonId } = useParams();
  const { data: lessonData, loading: lessonLoading, error: lessonError } = useLesson(sectionId, lessonId);
  const { data: navigationData, loading: navLoading } = useLessonNavigation(sectionId, lessonId);

  if (lessonError) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4 text-red-600">Error Loading Lesson</h1>
            <p className="text-gray-600 mb-6">{lessonError.message}</p>
            <Link to="/" className="text-blue-600 hover:underline">
              Return to Home
            </Link>
          </div>
        </main>
      </div>
    );
  }

  if (lessonLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Loading...</h1>
          </div>
        </main>
      </div>
    );
  }

  if (!lessonData) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Lesson Not Found</h1>
            <Link to="/" className="text-blue-600 hover:underline">
              Return to Home
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const { section, lesson, lessonIndex } = lessonData;
  const previousLesson = navigationData?.previous || null;
  const nextLesson = navigationData?.next || null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link
              to={`/section/${sectionId}`}
              className="text-blue-600 hover:underline inline-flex items-center gap-1"
            >
              <ChevronLeft className="h-4 w-4" />
              Back to {section.title}
            </Link>
          </div>

          {/* Progress */}
          <div className="mb-8">
            <ProgressBar current={lessonIndex + 1} total={section.lessons.length} />
          </div>

          {/* Lesson Content */}
          <article className="bg-white rounded-xl p-8 md:p-12 shadow-sm border border-gray-200 mb-8">
            <h1 className="text-4xl font-bold mb-4">{lesson.title}</h1>
            
            {lesson.description && (
              <p className="text-xl text-gray-600 mb-8">{lesson.description}</p>
            )}

            {lesson.isActivity ? (
              <div>
                <p className="text-gray-700 mb-6">
                  Practice what you've learned with this interactive coding activity.
                </p>
                <CodeRunner />
              </div>
            ) : (
              <div className="prose prose-lg max-w-none">
                {lesson.content && (
                  <div className="text-gray-700 mb-6 leading-relaxed whitespace-pre-line">
                    {lesson.content}
                  </div>
                )}
                
                {lesson.subsections && lesson.subsections.length > 0 && (
                  <SubsectionContent subsections={lesson.subsections} />
                )}
                
                {!lesson.content && (!lesson.subsections || lesson.subsections.length === 0) && (
                  <p className="text-gray-500 italic">Content coming soon...</p>
                )}
              </div>
            )}
          </article>

          {/* Navigation */}
          <div className="flex items-center justify-between gap-4">
            {previousLesson ? (
              <Link
                to={`/section/${sectionId}/lesson/${previousLesson.id}`}
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white border-2 border-gray-300 hover:border-blue-400 hover:bg-blue-50 transition-all group"
              >
                <ChevronLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                <div className="text-left">
                  <div className="text-sm text-gray-500">Previous</div>
                  <div className="font-semibold">{previousLesson.title}</div>
                </div>
              </Link>
            ) : (
              <div></div>
            )}

            {nextLesson ? (
              <Link
                to={`/section/${sectionId}/lesson/${nextLesson.id}`}
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all group ml-auto"
              >
                <div className="text-right">
                  <div className="text-sm text-blue-100">Next</div>
                  <div className="font-semibold">{nextLesson.title}</div>
                </div>
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <Link
                to={`/section/${sectionId}`}
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-all ml-auto"
              >
                Complete Section
                <ChevronRight className="h-5 w-5" />
              </Link>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
