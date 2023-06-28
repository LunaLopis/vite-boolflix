
<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppSearchBar from './components/searchBar.vue';
import AppMovieList from './components/AppMovieList.vue';
import { store } from './store.js'
export default {
  components: {
    AppHeader,
    AppSearchBar,
    AppMovieList
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    searchMovie() {
      if (store.searchMovie !== '') {
        let myUrl = store.ApiUrl + store.searchMovie
        console.log(myUrl)
        axios.get(myUrl).then((response) => {
          store.MovieList = response.data.results;
        }
        )
      }
    }
  },
}
</script>



<template lang="">
  <div>
<AppHeader />
<AppSearchBar @search=searchMovie />
<AppMovieList />
  </div>
</template>


<style lang="scss">
@use './styles/general.scss' as *;
</style>
