import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pokedex from "./pages/Pokedex";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pokedex />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
