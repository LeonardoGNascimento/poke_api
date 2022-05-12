import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pokemons from "./Pages/Pokemons";

const AppRoute = () => {
  return(
    <Router>
      <Routes>
        <Route path="/buscar" element={<Pokemons/>}/>
      </Routes>
    </Router>
  )
}

export default AppRoute;