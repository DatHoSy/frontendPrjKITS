
export const movie = {
    state: {
        movies: []
    },
    reducers: {
        setData(state, movies) {
            return {
                state,
                movies
            }
        },
    },
    effects: (dispatch) => ({
        async getAll() {
            const data = await fetch('http://localhost:8080/movie/all')
                .then(res => res.json())
                .catch(error => console.log('Authorization failed: ' + error.message));
            this.setData(data.data)
        },

        async getMovieShowCase() {
            const data = await fetch('http://localhost:8080/movie/showcase?limit=12')
                .then(res => res.json())
                .catch(error => console.log('Authorization failed: ' + error.message));
            this.setData(data.data)
        },

        async getMoviesGrid() {
            const data = await fetch('http://localhost:8080/movie/showcase?limit=10')
                .then(res => res.json())
                .catch(error => console.log('Authorization failed: ' + error.message));
            this.setData(data.data)
        }
    }),
};