import axios from "axios";
import { headers } from "./common";

const unsplash = axios.create({
  baseURL: `https://api.unsplash.com/photos`,
  headers,
});

export default unsplash;
