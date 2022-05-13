import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BuscarPokemons } from "./Pages/BuscarPokemons";

export const AppRoute = () => {
  return(
    <Router>
      <Routes>
        <Route path="/buscar" element={<BuscarPokemons/>}/>
      </Routes>
    </Router>
  )
}