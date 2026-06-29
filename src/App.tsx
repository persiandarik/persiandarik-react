import type { ReactNode } from "react";

import { Route, Routes } from "react-router";

import About from "@/components/About/About.tsx";
import Blog from "@/components/Blog/Blog.tsx";
import Contact from "@/components/Contact/Contact.tsx";
import Portfolio from "@/components/Portfolio/Portfolio.tsx";
import Resume from "@/components/Resume/Resume.tsx";

import RootLayout from "@/layouts/RootLayout/RootLayout.tsx";

import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage.tsx";

import "./App.css";

export default function App(): ReactNode {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<About />} />
        <Route path="resume" element={<Resume />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
