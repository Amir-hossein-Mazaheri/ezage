import axios from "axios";
import { headers } from "./common";

const unsplashSearch = axios.create({
  baseURL: `https://api.unsplash.com/search/photos`,
  headers,
});

export default unsplashSearch;
