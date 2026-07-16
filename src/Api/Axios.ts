//

import axios from "axios";

const api = axios.create({
  baseURL: "https://prescripto-server.greatstack.in/api/doctor/list",
  timeout: 5000,
});
