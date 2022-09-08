<template>
    <div class="block mx-auto mt-5">
    <ul class="lien" 
    v-for="toto in news">
       <NuxtLink :to="(`/news/${toto.id}`)"><li>{{toto.title}}</li></NuxtLink>
    </ul>
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
   .lien {
      max-width: 15vw;
   }
   .block{
      width: fit-content;
   }

</style>