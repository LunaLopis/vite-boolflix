
<script>
import { store } from '../store'
export default {
    data() {
        return {
            store
        }
    },
    props: {
        Moviecard: Object
    },
    methods: {
        fullstar() {
            let fullstar = Math.ceil(this.Moviecard.vote_average / 2)
            console.log(fullstar)
            return fullstar
        },
        emptystar() {
            let emptystar = 5 - this.fullstar()
            return emptystar
        }
    },

    mounted() {
        this.fullstar()
        this.emptystar()
    },

}
</script>

<template >
    <div>
        <div class="card-movie">
            <div class="card-main text-width"
                :style="{ 'background-image': `url(${store.ImageUrl}${Moviecard.poster_path})` }">
                <div class="info">
                    <h5>titolo:{{ Moviecard.name || Moviecard.title }}</h5>
                    <p> Nome originale:{{ Moviecard.original_name || Moviecard.original_title }}</p>
                    <span v-for="fullstar in fullstar()" :key="fullstar">
                        <i class="fa-solid fa-star" style="color: #FDCF00;"></i>
                    </span>
                    <span v-for="emptystar in emptystar()" :key="emptystar">
                        <i class="fa-regular fa-star" style="color: #FDCF00;"></i>
                    </span>
                    <div>
                        <span>lingua originale:{{ Moviecard.original_language }} </span>
                        <img :src="`../../node_modules/flagpack/flags/1x1/${Moviecard.original_language}.svg`" alt="">
                    </div>
                    <div>
                        <span>
                            descrizione:{{ Moviecard.overview }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.card-movie {
    background-color: black;
    border: 1px solid black;
    width: 20rem;
    height: 100%;
    overflow-y: auto;
}

.card-main {
    height: 500px;
}

.info {
    display: none;
}

.card-movie:hover .info {
    background-color: black;
    display: block;
    color: white;
    height: 100%;
}
</style>