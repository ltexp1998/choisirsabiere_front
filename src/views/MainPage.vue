<template>
  <div class="main_page">
    <Header />
    <Footer />
  </div>

</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main_page {
    max-width : 800px;
    margin-left: auto;
    margin-right: auto;
    background-image : url(../assets/img/beer.png);
    background-size : cover;
    background-color : rgba(0,0,255,0.3);
  }
</style>
