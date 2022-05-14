import React from "react"
import "./style.css";
import { ICard } from "./interface/ICard"

export const Card = (pokemon: ICard) => {
  return(
    <div id="card" className="d-flex flex-column">
      <div id="cardTitle" className="align-middle">
        <h2>{pokemon?.name}</h2>
      </div>
      <div id="cardBody">
          <img id="pokemonArt" src={pokemon?.sprites}/>
      </div>
      <div id="cardfooter">
        <p>Peso: {pokemon?.weight}</p>
        <p>N°: {pokemon?.id}</p>
        <p>Tipo: {pokemon?.types}</p>
      </div>
    </div>
  )
}