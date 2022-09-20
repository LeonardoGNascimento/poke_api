import { useEffect, useState } from "react";
import api from "../../../services/api";
import IReponsePokemon from "../interface/IResponsePokemon";

export function usePokemon() {
  const [pokemon, setPokemons] = useState<IReponsePokemon>();
  const [buscaPokemon, setBuscaPokemons] = useState<string>("1");

  useEffect(() => {
    getPokemon();
  }, [buscaPokemon]);

  const getPokemon = async () => {
    const nomePokemon = buscaPokemon ? buscaPokemon : "1";

    const { data } = await api.get(`pokemon/${nomePokemon}`);

    setPokemons(data);
  };

  return {
    pokemon,
    getPokemon,
    setBuscaPokemons,
    setPokemons,
  };
}
