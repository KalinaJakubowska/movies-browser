import axios from "axios";

export const getApiData = (link) => {
  return axios
    .get(link)
    .then((response) => response.data)
    .catch(() => console.log("error"));
};
