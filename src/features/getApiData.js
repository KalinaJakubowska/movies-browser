import axios from 'axios';

export const getApiData = async (link) => {
    let response;
    await axios.get(link)
        .then(data => response = data)
        .catch(() => console.log("error"))
    return response.data;
};