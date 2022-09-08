<template>
  <div class="gros-block">
    <div class="d-flex justify-content-end">
      <div class="mx-4 mt-2 img"><NuxtLink to="/"><img src="@/assets/images/INFO.png" alt="logo"></NuxtLink></div>
      <div class="mx-4 mt-2  me-auto"><NuxtLink to="/" class="style">Accueil</NuxtLink></p></div>
      <div class="mx-4 mt-2  me-auto"><NuxtLink to="/news" class="style">News</NuxtLink></p></div>
    </div>
    <div class="text-center">
      <input id="searchbar" onkeyup="" type="text" name="search" placeholder="Search animals.." class="rounded-pill border-0 search-consol">
    </div>
    <div class="d-flex justify-content-end">
      <div class="mt-4 mr-4">
        <img src="@/assets/images/logo-facebook.png" alt="logo-facebook" class="logo">
        <img src="@/assets/images/logo-insta.png" alt="logo-insta" class="logo">
        <img src="@/assets/images/logo-twitter.png" alt="logo-twitter" class="logo">
        <img src="@/assets/images/logo-tiktok.png" alt="logo-tiktok" class="logo">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  .logo{
    width: 30px;
    margin-left: 1vh;
    margin-right: 1vh;
  }
  .gros-block {
    background-color: #1F7093;
    height: 20vh;
    position: relative;
  }
  .search-consol {
    width: 45vw;
    height: 5vh;
  }
  a {
    color: white;
  }
  .img {
    width: 215px;
    position: absolute;
    left: 0;
  }
  .img img{
    width: 215px;
  }


</style>