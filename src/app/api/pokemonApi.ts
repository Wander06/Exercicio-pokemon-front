import { useState } from "react";
import axios from 'axios';

export const usePokemonSearch = () => {
  const [pokemonData, setPokemonData] = useState<PokemonType | null>(null);
  const [error, setError] = useState<string | null>(null);

  const searchPokemon = async (name: string) => {
    try {
      const response = await axios.get<PokemonType>(`http://localhost:8080/${name}`);
      setError(null);
      setPokemonData(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      setError(`Pokemon '${name}' nao existe na base de dados... Verifique se o nome esta correto`);
      setPokemonData(null);
    }
  };

  return { pokemonData, error, searchPokemon };
};
