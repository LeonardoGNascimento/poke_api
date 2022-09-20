import { ICard } from "./interface/ICard";
import { Container, CardArt, CardBody, CardFooter, CardTitle } from "./style";

export const Card = ({ name, sprites, weight, id, types }: ICard) => {
  return (
    <Container>
      <CardTitle>
        <h1>{name}</h1>
      </CardTitle>
      <CardBody>
        <CardArt id="pokemonArt" src={sprites} />
      </CardBody>
      <CardFooter>
        <p>Peso: {weight}</p>
        <p>N°: {id}</p>
        <p>Tipo: {types}</p>
      </CardFooter>
    </Container>
  );
};
