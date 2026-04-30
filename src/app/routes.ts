import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { SectionPage } from "./pages/SectionPage";
import { LessonPage } from "./pages/LessonPage";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/section/:sectionId",
    Component: SectionPage,
  },
  {
    path: "/section/:sectionId/lesson/:lessonId",
    Component: LessonPage,
  },
  {
    path: "*",
    Component: NotFound,
  },
], {
  basename: '/teaching-cs/',
});