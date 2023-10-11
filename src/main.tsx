import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Resume from "./routes/Resume";
import NavigationBar from "./components/NavigationBar"


const root = createRoot(document.getElementById("root")!);

root.render(
  <HashRouter>
  <NavigationBar />

    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/resume" element={ <Resume/> } />
      </Routes>
  </HashRouter>
);