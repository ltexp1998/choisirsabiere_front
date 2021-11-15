<template>
  <div id="app">
    <MainPage />
  </div>
</template>

<script>
import MainPage from "./views/MainPage.vue";
export default {
  name: "App",
  components: {
    MainPage,
  },
};
</script>

<style>
 body {
   background-color: rgb(44, 44, 44);
 }
</style>
