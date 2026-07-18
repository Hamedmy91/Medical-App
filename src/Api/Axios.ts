//
import axios from "axios";

const api = axios.create({
  baseURL: "https://prescripto-server.greatstack.in/api",
  timeout: 5000,
});

export { api };
