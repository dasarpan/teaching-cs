import { Link, useLocation } from "react-router";
import { Home, BookOpen } from "lucide-react";

export function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
            <BookOpen className="h-8 w-8" />
            AdasAcademy
          </Link>
          
          {!isHome && (
            <Link
              to="/"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <Home className="h-4 w-4" />
              Back to Sections
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}