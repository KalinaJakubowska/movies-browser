import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        popularMovies: [],
        loading: false,
        activePage: 1,
        numberPages: undefined,
    },
    reducers: {
        fetchPopularMovies: state => {
            state.loading = true;
        },
        fetchPopularMoviesSuccess: (state, { payload: popularMovies }) => {
            state.popularMovies = popularMovies.results;
            state.numberPages = popularMovies.total_pages;
            state.loading = false;
        },
        fetchPopularMoviesError: state => {
            state.loading = false;
        },
        setActivePage: (state, { payload: pageNumber }) => {
            state.activePage = pageNumber;
        },
    },
});

export const {
    fetchPopularMovies,
    fetchPopularMoviesSuccess,
    fetchPopularMoviesError,
    setActivePage,
} = moviesSlice.actions;
export const selectPopularMovies = state => state.movies.popularMovies;
export const selectLoading = state => state.movies.loading;
export const selectActivePage = state => state.movies.activePage;
export const selectNumberPages = state => state.movies.numberPages;

export default moviesSlice.reducer;