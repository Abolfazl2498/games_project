import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "bebc73b57f4540c3912c32b29af27c93",
  },
});
