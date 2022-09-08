<template>
    <div>
        <Header/>
        <div class="card mx-auto mt-5 text-center">
            <h3 class="header">{{ news.title }}</h3>
            <img class="image mx-auto mt-5" :src="require(`@/assets/images/${news.image || 'fe1.jpg'}`)" alt="">
            <p class="mt-5">
            {{news.description }}</p>
        </div>
    </div>
</template>

<script>
    import { mapState } from "vuex"
    export default {
        computed: { 
            news() {
                return this.$store.getters.getNewsById(this.$route.params.id)
            }
        }
    }
</script>

<style scoped>
    .card {
        width: auto;
        height: auto;
        border: none;
        overflow: hidden;
        padding: 0;
        cursor: pointer;
    }
    .image {
        width: 40vw;
        border-radius: 0.5rem;
    }
    .header {
        font-size: 1.15rem;
        margin-top: 0.4rem;
    }

</style>