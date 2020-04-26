import axios from "axios";

const covid19Brazil = axios.create({
  baseURL: "https://covid19-brazil-api.now.sh",
});

const covid19Global = axios.create({
  baseURL: "https://pomber.github.io/",
});

export { covid19Brazil, covid19Global };
