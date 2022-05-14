import axios from "axios";

export function getSingleQuote() {
  return axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
}