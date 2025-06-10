import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Episodes from "./pages/Episodes";
import Locations from "./pages/Locations";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import EpisodeDetail from "./components/episode/EpisodeDetail";
import LocationDetail from "./components/location/LocationDetails";
import CharacterDetails from "./components/character/CharacterDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/characters/:id" element={<CharacterDetails />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/episodes/:id" element={<EpisodeDetail />} />
          <Route path="/locations/:id" element={<LocationDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
