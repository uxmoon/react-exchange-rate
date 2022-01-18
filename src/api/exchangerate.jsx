import axios from "axios";

export default axios.create({
  baseURL: "http://api.exchangeratesapi.io/v1/",
});
