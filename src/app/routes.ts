import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Courses } from "./pages/Courses";
import { Contact } from "./pages/Contact";
import { RootLayout } from "./layouts/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "sobre-nos", Component: About },
      { path: "cursos", Component: Courses },
      { path: "contacto", Component: Contact },
    ],
  },
]);