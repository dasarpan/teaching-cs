import { Link } from "react-router";
import { Header } from "../components/Header";
import { AlertCircle } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto text-center">
          <AlertCircle className="h-20 w-20 text-red-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">
            The page you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
