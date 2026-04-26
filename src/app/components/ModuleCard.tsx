import { Link } from "react-router";
import { ArrowRight, Code, Sparkles, Terminal, Brain, Download, BookOpen, Blocks, Database, Box, FileText } from "lucide-react";

interface ModuleCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  lessonCount: number;
}

const iconMap = {
  Code,
  Sparkles,
  Terminal,
  Brain,
  Download,
  BookOpen,
  Blocks,
  Database,
  Box,
  FileText,
};

export function ModuleCard({ id, title, description, icon, color, lessonCount }: ModuleCardProps) {
  const IconComponent = iconMap[icon as keyof typeof iconMap] || Code;

  return (
    <Link
      to={`/section/${id}`}
      className="group block p-6 rounded-xl border-2 border-gray-200 hover:border-blue-400 bg-white hover:shadow-lg transition-all duration-200"
    >
      <div className="flex items-start gap-4">
        <div className={`${color} p-3 rounded-lg text-white shrink-0`}>
          <IconComponent className="h-6 w-6" />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 mb-3">
            {description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">
              {lessonCount} {lessonCount === 1 ? 'lesson' : 'lessons'}
            </span>
            <span className="flex items-center gap-1 text-blue-600 text-sm font-medium group-hover:gap-2 transition-all">
              Start Learning
              <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}