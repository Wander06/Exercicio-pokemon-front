"use client";
import { useState } from "react";
import { usePokemonSearch } from "../api/pokemonApi";
import Image from "next/image";
import { getColors } from "./colorsPokemon";

export const PokemonSearch = () => {
  const [name, setName] = useState("");
  const { pokemonData, error, searchPokemon } = usePokemonSearch();

  const handleClickButton = () => {
    searchPokemon(name.toLowerCase());
  };

  return (
    <div className="h-full flex flex-col items-center ">
      <div className="bg-blue-100 flex items-center p-4 rounded-md mt-5">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite o nome do Pokémon"
          className="mr-2 px-4 py-2 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-700"
        />
        <button
          onClick={handleClickButton}
          className="px-4 py-2 rounded-md bg-gray-300 text-gray-800 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          Pesquisar
        </button>
      </div>

      {pokemonData && !error && (
        <div className="bg-red-500 p-4 rounded-md mt-4 h-3/4 w-3/12 min-h-80 min-w-96 flex flex-col items-center justify-between border-8 border-red-600 overflow-auto">
          <h1 className="text-4xl text-center text-yellow-300">
            {pokemonData.name.charAt(0).toUpperCase() +
              pokemonData.name.slice(1)}
          </h1>
          <div
            className="w-3/4 h-3/6 min-h-56 min-w-56 flex justify-center items-center border-2 border-black"
            style={{
              backgroundImage: `url('/fundo1.jpeg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Image
              src={pokemonData.image}
              alt={pokemonData.name}
              width={200}
              height={200}
            />
          </div>
          <div className="w-full">
            <div className="flex flex-wrap">
              <span className="text-white m-1">Types:</span>{" "}
              {pokemonData.types.map((type, index) => (
                <span
                  key={index}
                  className={`px-2 py-1 mx-1 rounded text-white border border-black ${getColors(
                    type
                  )}`}
                >
                  {type}
                </span>
              ))}
            </div>
            <div className="mt-2 flex flex-wrap">
              <span className="text-white m-1">Weaknesses:</span>{" "}
              {pokemonData.weakness.map((type, index) => (
                <span
                  key={index}
                  className={`px-2 py-1 m-1 rounded text-white border border-black ${getColors(
                    type
                  )}`}
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {error && !pokemonData && (
        <div className="bg-red-900 p-4 rounded-md mt-4">
          <p className="text-white">{error}</p>
        </div>
      )}
    </div>
  );
};
