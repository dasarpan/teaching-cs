import { useParams, Link } from "react-router";
import { Header } from "../components/Header";
import { useSection } from "../hooks/useCurriculum";
import { ArrowRight, BookOpen } from "lucide-react";

export function SectionPage() {
  const { sectionId } = useParams();
  const { data: section, loading, error } = useSection(sectionId);

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4 text-red-600">Error Loading Section</h1>
            <p className="text-gray-600 mb-6">{error.message}</p>
            <Link to="/" className="text-blue-600 hover:underline">
              Return to Home
            </Link>
          </div>
        </main>
      </div>
    );
  }

  if (loading) {
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

  if (!section) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Section Not Found</h1>
            <Link to="/" className="text-blue-600 hover:underline">
              Return to Home
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Section Header */}
        <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200 shadow-sm">
          <div className="flex items-start gap-6">
            <div className={`${section.color} p-4 rounded-xl text-white shrink-0`}>
              <BookOpen className="h-10 w-10" />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-3">{section.title}</h1>
              <p className="text-xl text-gray-600 mb-4">{section.description}</p>
              <div className="flex items-center gap-4 text-gray-500">
                <span>{section.lessons.length} {section.lessons.length === 1 ? 'lesson' : 'lessons'}</span>
                <span>•</span>
                <span>Python</span>
              </div>
            </div>
          </div>
        </div>

        {/* Lessons List */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Lessons</h2>
          {section.lessons.length === 0 ? (
            <p className="text-gray-500 italic">Content coming soon...</p>
          ) : (
            <div className="space-y-3">
              {section.lessons.map((lesson, index) => (
                <Link
                  key={lesson.id}
                  to={`/section/${sectionId}/lesson/${lesson.id}`}
                  className="group flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all"
                >
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full shrink-0 ${
                    lesson.isActivity 
                      ? 'bg-green-100 text-green-600' 
                      : 'bg-blue-100 text-blue-600'
                  } font-semibold`}>
                    {lesson.isActivity ? '★' : index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-blue-600 transition-colors">
                      {lesson.title}
                    </h3>
                    {lesson.description && (
                      <p className="text-gray-600 text-sm">
                        {lesson.description}
                      </p>
                    )}
                    {lesson.subsections && lesson.subsections.length > 0 && (
                      <p className="text-gray-500 text-sm mt-1">
                        {lesson.subsections.length} {lesson.subsections.length === 1 ? 'subsection' : 'subsections'}
                      </p>
                    )}
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all shrink-0" />
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
