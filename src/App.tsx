import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gradient-to-br from-blue-950 via-black to-cyan-950 text-white min-h-screen flex flex-col">
      <NavigationBar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
