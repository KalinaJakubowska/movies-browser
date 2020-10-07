import axios from 'axios';

export const getPopularMovies = async () => {
    let response;
    await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=c09290276e151ca70a95c0fe106ed759&language=en-US&page=1")
        .then(data => response = data)
        .catch(() => console.log("error"))
    return response.data;
};