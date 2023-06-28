
<script>
import AppCard from './AppCard.vue';
import { store } from '../store.js'
export default {
    components: {
        AppCard,
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template lang="">
    <div class="container">
        <div class="row">
            <div class="col">
              <div class="content d-flex justify-content-center">
                <div v-for="movie in store.MovieList" :key="movie" class="card-container d-flex flex-wrap justify-content-center">
                    <AppCard :Moviecard= "movie" />
                </div>
              </div>

            </div>
        </div>
        
    </div>
</template>


<style lang="scss" scoped>
.content {

    flex-wrap: wrap;
}
</style>