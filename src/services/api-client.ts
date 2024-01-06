import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "caeed0a370ee4171ac89b05524d23253",
  },
});

export default apiClient;
