import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        popularMovies: [],
        loading: false,
    },
    reducers: {
        fetchPopularMovies: state => {
            state.loading = true;
        },
        fetchPopularMoviesSuccess: (state, { payload: popularMovies }) => {
            state.popularMovies = popularMovies;
            state.loading = false;
        },
        fetchPopularMoviesError: state => {
            state.loading = false;
        },
    },
});

export const {
    fetchPopularMovies,
    fetchPopularMoviesSuccess,
    fetchPopularMoviesError,
} = moviesSlice.actions;
export const selectPopularMovies = state => state.movies.popularMovies;
export const selectLoading = state => state.movies.loading;

export default moviesSlice.reducer;