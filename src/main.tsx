import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import Home from "./pages/Home.tsx";
import mainLayOut from "./Layout/mainLayOut.tsx";
import Contact from "./pages/Contact.tsx";
import About from "./pages/About.tsx";
import Doctor from "./pages/Doctor.tsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Login from "./pages/Login.tsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    Component: mainLayOut,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "doctor",
        Component: Doctor,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "login",
        Component: Login,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>,
);
