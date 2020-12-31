import creds from "../creds/creds";
import axios from "axios";

const KEY = creds.youtubeAPI.key;

export default axios.create({
  baseURL: "https:www.googleapis.com/youtube/v3",
  params: {
    key: KEY,
    part: "snippet",
    type: "video",
    maxResults: 5,
  },
});
