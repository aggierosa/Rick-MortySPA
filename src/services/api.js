import axios from "axios";

export const sparmapi = axios.create({
  baseURL: "https://sparmapi.herokuapp.com",
});

export const rmapi = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});
