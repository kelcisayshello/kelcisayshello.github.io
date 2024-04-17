import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Resume from "./routes/Resume";
import Contact from "./routes/Contact"
import Studio from "./routes/Studio"

const root = createRoot(document.getElementById("root")!);

root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/studio" element={<Studio />} />
    </Routes>
  </HashRouter>
);