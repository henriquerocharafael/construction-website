import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./globals.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Album } from "./components/Projects/Albums/index.tsx";

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
  },
  {
    path: "album/:id",
    element: <Album />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
