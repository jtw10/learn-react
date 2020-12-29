import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID qFvqhpke9_gL233ebLSbJC3ksaJzqutrei9VFjXXaeM",
  },
});
