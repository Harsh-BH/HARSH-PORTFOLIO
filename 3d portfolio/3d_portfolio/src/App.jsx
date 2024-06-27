import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, About, Projects, Contact } from "./Pages";

export default function App() {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/projects" element={<Projects />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  );
}
