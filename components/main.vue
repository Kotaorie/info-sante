<template>
    <div class="d-flex block mx-auto">
        <div class="container text-center " v-for="info in news.slice(-3).reverse()" >
            <NuxtLink :to="(`/news/${info.id}`)"><div class="cadre d-flex mx-auto"><img :src="require(`@/assets/images/${info.image}`)" alt="" class="image "></div></NuxtLink>
            <h3>{{info.title}}</h3>
        <p>{{info.description}}</p>
        </div>
    </div>
</template>

<script>
     import { mapState } from "vuex"
     export default {
        computed: { 
           ...mapState([
            'news'
           ]) 
        }
        
    }
</script>

<style scoped>
    .image{
        height: 100%;
    }
    .block{
        width: 60vw;
    }
    .cadre{
        width: 15vw;
        height: 20vh;
        overflow: hidden;
        align-items: center;
        justify-content: center;
        border-radius: 25px;
    }

</style>