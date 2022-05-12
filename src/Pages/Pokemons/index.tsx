import React, { useEffect, useState } from "react";
import { Button, Col, Form, FormControl, Row } from "react-bootstrap";
import IReponsePokemon from "../../interface/IResponsePokemon";
import api from "../../services/api";
import "./style.css";

const Pokemons = () => {

  let [pokemon, setPokemons] = useState<IReponsePokemon>();
  let [buscaPokemon, setBuscaPokemons] = useState<Number>(1);

  const getPokemon = async () => {
    api.get(`pokemon/${buscaPokemon}`).then((response) => setPokemons(response.data))
  }

  const handleSubmit = (e:any) => {
    e.preventDefault();
    let pokemonBusca = e.target.buscaPokemon.value;
    pokemonBusca = pokemonBusca == ''? '1': pokemonBusca
    setBuscaPokemons(pokemonBusca)
  }

  useEffect(() => {
    getPokemon()
  }, [buscaPokemon])

  return (
  <>
    <div className="d-flex justify-content-center mt-5">
      <Row>
        <div id="card" className="d-flex flex-column">
          <div id="cardTitle" className="align-middle">
            <h2>{pokemon?.name}</h2>
          </div>
          <div id="cardBody">
              <img id="pokemonArt" src={pokemon?.sprites.other.dream_world.front_default}/>
          </div>
          <div id="cardfooter" className="">
            <p>Peso: {pokemon?.weight}</p>
            <p>N°: {pokemon?.id}</p>
            <p>Tipo: {pokemon?.types[0].type.name}</p>
          </div>
        </div>
      </Row>
    </div>

    <Form onSubmit={handleSubmit}>
      <div className="d-flex justify-content-center mt-2">
        <Col md={3}>
          <FormControl type="text" name="buscaPokemon" id=""/>
        </Col>
      </div>
      <div className="d-flex justify-content-center mt-2">
        <Button variant="danger" type="submit">
          Buscar Pokemon
        </Button>
      </div>
    </Form>

  </>
  )
}

export default Pokemons;