import { BrowserRouter, Route, Routes } from "react-router-dom";
import Historical from "./pages/Historical";
import Pokedex from "./pages/Pokedex";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="historical" element={<Historical />} />
        <Route path="/" element={<Pokedex />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
