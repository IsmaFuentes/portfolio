import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import KayakingPage from "./pages/KayakingPage";

function App() {
  const params = new URLSearchParams(window.location.search);
  const target = params.get("project");
  const navigate = useNavigate();

  useEffect(() => {
    if (target === "kayaking") {
      window.history.replaceState({}, document.title, window.location.pathname);
      navigate("/projects/kayaking", { replace: true });
    }
  }, [target, navigate]);

  return (
    <div className="bg-gradient-to-br from-blue-950 via-black to-cyan-950 text-white min-h-screen flex flex-col">
      <NavigationBar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/kayaking" element={<KayakingPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
