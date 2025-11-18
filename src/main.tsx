import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AgendamentosList from "./pages/AgendamentosList.tsx";
import AgendamentoCreate from "./pages/AgendamentoCreate.tsx";
import Header from "./components/Header.tsx";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto mt-6">{children}</div>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <AgendamentosList />
      </Layout>
    ),
  },
  {
    path: "/novo",
    element: (
      <Layout>
        <AgendamentoCreate />
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
