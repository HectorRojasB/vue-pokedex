import axios from "axios";
import { store } from "@/store";

const baseUrl = "https://pokeapi.co/api/v2/";
export const getPokemons = () => {
  return axios.get(`${baseUrl}pokemon?limit=100`).then((response) => {
    response.data.results.forEach((singleRequest: any) => {
      getPokemonDetails(singleRequest.url);
    });
  });
};

export const getPokemonDetails = (url: string) => {
  return axios.get(url).then((response) => {
    store.pokemons.push(response.data);
  });
};
