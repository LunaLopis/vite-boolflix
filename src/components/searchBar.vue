
<script>
import { store } from '../store.js'
export default {
    emits: ['search'],
    data() {
        return {
            store
        }
    },
    methods: {

    },
}
</script>


<template lang="">
    <div class="container">
        <div class="row">
             <div class="col-12">
                 <div class="d-flex">
                    <input type="text" v-model="store.searchMovie" class="form-control" placeholder="search movie" v-on:keyup.enter="$emit('search')">
                 </div>
                 <div>

        </div>
             </div>
        </div>
    </div>

    <div>

    </div>
</template>

<style lang="scss" scoped></style>