import axios from "axios";

const accessKey = "DW2mdGUB6YXMuHmnC5dZlsh5rq4F6Y37qMpnDbGS0js";

const unsplashSearch = axios.create({
  baseURL: `https://api.unsplash.com/search/photos`,
  headers: {
    Authorization: "Client-ID " + accessKey,
  },
});

export default unsplashSearch;
