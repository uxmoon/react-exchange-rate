import axios from "axios";

export default axios.create({
  baseURL: "https://api.exchangeratesapi.io/v1/",
});
