import { reactive } from 'vue';
export const store = reactive({
    ApiUrl: 'https://api.themoviedb.org/3/search/multi?api_key=dbae5037364fe3d00e272e1f6e877380&query=',
    ImageUrl: 'https://image.tmdb.org/t/p/w342/',
    searchMovie: '',
    MovieList: [],
})