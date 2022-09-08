<template>
    <div class="card">
        <img :src="require(`@/assets/images/${card.image || 'maladie.png'}`)" alt="" class="image">
        <h3 class="header">
            {{card.title}}
        </h3>
        <p class="snippet">{{card.snippet}}</p>
    </div>
</template>

<script>
    export default {
        props: ['card']
    }
</script>

<style scoped>

</style>