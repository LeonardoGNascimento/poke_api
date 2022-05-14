import React, { useEffect, useState } from "react";
import { Button, Col, Form, FormControl, Row } from "react-bootstrap";
import IReponsePokemon from "./interface/IResponsePokemon";
import api from "../../services/api";
import { Card } from "../../components/Card";

export const BuscarPokemons = () => {

  let [pokemon, setPokemons] = useState<IReponsePokemon>();
  let [buscaPokemon, setBuscaPokemons] = useState<number>(1);
  let [desabilitarBotao, setDisabled] = useState<boolean>(true);

  useEffect(() => {
    getPokemon()

    if(buscaPokemon <= 1){
      setDisabled(true)
    }

    if(buscaPokemon > 1){
      setDisabled(false)
    }    

  }, [buscaPokemon])

  const handleSubmit = (e:any) => {
    e.preventDefault();
    let pokemonBusca = e.target.buscaPokemon.value;
    pokemonBusca = pokemonBusca == ''? '1': pokemonBusca.toLowerCase()
    setBuscaPokemons(pokemonBusca)
  }

  const getPokemon = async () => {
    const {data} = await api.get(`pokemon/${buscaPokemon}`)
    setPokemons(data)
  }

  const avancarPokemon = () => setBuscaPokemons(buscaPokemon + 1)
  const voltarPokemon = () => setBuscaPokemons(buscaPokemon - 1)

  return (
  <>
    <div className="d-flex justify-content-center mt-5">
      <Row>
        <Card
          name={pokemon?.name}
          sprites={pokemon?.sprites.front_default}
          weight={pokemon?.weight}
          id={pokemon?.id}
          types={pokemon?.types[0].type.name}
        />
      </Row>
    </div>

    <Form onSubmit={handleSubmit}>
      <div className="d-flex justify-content-center mt-2">
        <Col md={4}>
          <FormControl type="text" name="buscaPokemon" id="" placeholder="Digite o nome ou o número do Pokemon"/>
        </Col>
      </div>
      <div className="d-flex justify-content-center mt-2">
        <Button variant="danger" type="submit">
          Buscar Pokemon
        </Button>
      </div>
      <div className="d-flex justify-content-center mt-2">
        <Button variant="warning" type="button" className="m-2" onClick={voltarPokemon} disabled={desabilitarBotao}>
          Voltar
        </Button>
        <Button variant="warning" type="button" className="m-2" onClick={avancarPokemon}>
          Avançar
        </Button>
      </div>
    </Form>

  </>
  )
}