<template>
  <div>
    <p>début header</p>
    <Language />
    <h1>choisir sa bière</h1>
    <div class="main_menu">
      <p>name</p>
      <p>style</p>
    </div>
    <p>fin header</p>
  </div>

</template>

<script>
import Language from "./Language.vue";
export default {
  name: "App",
  components: {
    Language,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, p{
    color: white;
  }
  .main_menu {
    display: flex;
    justify-content: space-around;
  }
</style>
