import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        movieData: [],
        loading: false,
        movieId: undefined,
    },
    reducers: {
        setMovie: (state, { payload: id }) => {
            state.loading = true;
            state.movieId = id;
        },
        fetchMovieSuccess: (state, { payload: movieData }) => {
            state.movieData = movieData;
            state.loading = false;
        },
        fetchMovieError: state => {
            state.loading = false;
        },
    },
});

export const {
    setMovie,
    fetchMovieSuccess,
    fetchMovieError,
} = movieSlice.actions;
export const selectMovieData = state => state.movie.movieData;
export const selectLoading = state => state.movie.loading;

export default movieSlice.reducer;