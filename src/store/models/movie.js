
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

        async getMoviesLimit(i) {
            const data = await fetch('http://localhost:8080/movie/limit?limit='+ i)
                .then(res => res.json())
                .catch(error => console.log('Authorization failed: ' + error.message));
            this.setData(data.data)
        }
    }),
};