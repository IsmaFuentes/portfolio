import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import KayakingPage from "./pages/KayakingPage";
import ScrapingPage from "./pages/ScrapingPage";

function App() {
  const params = new URLSearchParams(window.location.search);
  const target = params.get("project");
  const navigate = useNavigate();

  useEffect(() => {
    if (target === "kayaking") {
      window.history.replaceState({}, document.title, window.location.pathname);
      navigate("/projects/kayaking", { replace: true });
    }

    if (target === "scraping") {
      window.history.replaceState({}, document.title, window.location.pathname);
      navigate("/projects/scraping", { replace: true });
    }
  }, [target, navigate]);

  return (
    <div className="min-h-screen flex flex-col bg-transparent text-zinc-100">
      <NavigationBar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/kayaking" element={<KayakingPage />} />
          <Route path="/projects/scraping" element={<ScrapingPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
