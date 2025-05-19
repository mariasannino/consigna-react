import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Episodes from "./pages/Episodes";
import Locations from "./pages/Locations";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import EpisodeDetail from "./components/episode/EpisodeDetail";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/episodes/:id" element={<EpisodeDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
