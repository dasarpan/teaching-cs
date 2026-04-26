import { Header } from "../components/Header";
import { ModuleCard } from "../components/ModuleCard";
import { useSections, useStats } from "../hooks/useCurriculum";
import { BookOpen, Rocket } from "lucide-react";

export function Home() {
  const { data: sections, loading: sectionsLoading, error: sectionsError } = useSections();
  const { data: stats, loading: statsLoading, error: statsError } = useStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            <Rocket className="h-4 w-4" />
            Start Your Programming Journey
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AdasAcademy
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn programming basics with Python and build a strong foundation in computer science
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {statsLoading ? "..." : stats?.totalSections || 0}
            </div>
            <div className="text-gray-600">Sections</div>
          </div>
          <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {statsLoading ? "..." : stats?.totalLessons || 0}
            </div>
            <div className="text-gray-600">Lessons</div>
          </div>
          <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {stats?.programmingLanguage || "Python"}
            </div>
            <div className="text-gray-600">Programming Language</div>
          </div>
        </div>

        {/* Sections */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <BookOpen className="h-8 w-8 text-blue-600" />
            Programming Basics Curriculum
          </h2>
          
          {sectionsError && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-red-700">
              Failed to load sections: {sectionsError.message}
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sectionsLoading ? (
              <div className="col-span-full text-center py-12 text-gray-500">
                Loading curriculum...
              </div>
            ) : sections && sections.length > 0 ? (
              sections.map((section) => (
                <ModuleCard
                  key={section.id}
                  id={section.id}
                  title={section.title}
                  description={section.description}
                  icon={section.icon}
                  color={section.color}
                  lessonCount={section.lessons.length}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12 text-gray-500">
                No sections available
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-lg mb-6 text-blue-100">
            Begin with Section 0 and work your way through the complete programming basics curriculum
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg">
              ✓ Self-paced learning
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg">
              ✓ Interactive activities
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg">
              ✓ Python focused
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}