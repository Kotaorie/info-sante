<template>
  <div>
  <Header/>
  <p class="titre mt-5">Nos derniere news :</p>
  <div class="mt-5">
    <Main/>
  </div>
  <NuxtLink class="bt mx-auto mt-5" to="/news">Toutes nos News</NuxtLink>
  </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.titre {
  margin-left: 22vw;
  width: fit-content;
  font-size: 2.5rem;
}
.bt {
  display: flex;
  color: white;
  border-radius: 25px;
  background-color: #1f7093;
  width: 15vw;
  height: 5vh;
  border: 0;
  transition: all 0.5s;
  justify-content: center;
  align-items: center;
}
.bt:hover{
  background-color: white;
  color: #1f7093;
  border: 1px solid #1f7093;
  transition: all 0.5s;
  text-decoration: none;
}
</style>