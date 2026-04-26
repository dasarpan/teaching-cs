import { useParams, Link } from "react-router";
import { Header } from "../components/Header";
import { curriculum } from "../data/curriculum";
import { ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";

export function ModulePage() {
  const { moduleId } = useParams();
  const module = curriculum.find((m) => m.id === moduleId);

  if (!module) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Module Not Found</h1>
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
        {/* Module Header */}
        <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200 shadow-sm">
          <div className="flex items-start gap-6">
            <div className={`${module.color} p-4 rounded-xl text-white shrink-0`}>
              <BookOpen className="h-10 w-10" />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-3">{module.title}</h1>
              <p className="text-xl text-gray-600 mb-4">{module.description}</p>
              <div className="flex items-center gap-4 text-gray-500">
                <span>{module.lessons.length} lessons</span>
                <span>•</span>
                <span>Beginner-friendly</span>
              </div>
            </div>
          </div>
        </div>

        {/* Lessons List */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Course Curriculum</h2>
          <div className="space-y-3">
            {module.lessons.map((lesson, index) => (
              <Link
                key={lesson.id}
                to={`/module/${moduleId}/lesson/${lesson.id}`}
                className="group flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-semibold shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-blue-600 transition-colors">
                    {lesson.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {lesson.description}
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all shrink-0" />
              </Link>
            ))}
          </div>
        </div>

        {/* What You'll Learn */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-6">What You'll Learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {module.lessons.slice(0, 4).map((lesson) => (
              <div key={lesson.id} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">{lesson.title}</div>
                  <div className="text-blue-100 text-sm">{lesson.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
