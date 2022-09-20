import { Col, FormControl, Row } from "react-bootstrap";
import { Card } from "../../components/Card";
import { usePokemon } from "./hook/usePokemon";
import { BuscaPokemon, CardContainer, Titulo } from "./style";

export const BuscarPokemons = () => {
  const { pokemon, setBuscaPokemons } = usePokemon();

  return (
    <div>
      <Titulo>Pokedex</Titulo>
      <CardContainer>
        <Row>
          {pokemon ? (
            <Card
              name={pokemon.name}
              sprites={pokemon.sprites.front_default}
              weight={pokemon.weight}
              id={pokemon.id}
              types={pokemon.types[0].type.name}
            />
          ) : (
            ""
          )}
        </Row>
      </CardContainer>
      <BuscaPokemon>
        <Col md={4}>
          <FormControl
            type="text"
            name="buscaPokemon"
            id=""
            placeholder="Digite o nome ou o número do Pokemon"
            onChange={(e) => setBuscaPokemons(e.target.value)}
          />
        </Col>
      </BuscaPokemon>
    </div>
  );
};
