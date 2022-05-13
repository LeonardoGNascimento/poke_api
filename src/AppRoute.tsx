import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { BuscarPokemons } from "./Pages/BuscarPokemons";

export const AppRoute = () => {
  return(
    <Router>
        <Route path="/buscar" element={<BuscarPokemons/>}/>
        <Route path="/buscars" element={<BuscarPokemons/>}/>
    </Router>
  )
}