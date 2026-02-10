import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import KayakingPage from "./pages/KayakingPage";

function App() {
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
