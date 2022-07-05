<template>
  <v-app>
    <v-container>
      <Topbar />

      <Main />
    </v-container>

    <footer-panel/>
  </v-app>
</template>

<script>
import Main from "./Main.vue";
import Topbar from "./components/Topbar.vue";
import FooterPanel from './components/Panels/FooterPanel.vue';
export default {
  name: "App",
  components: { Main, Topbar, FooterPanel },

  created() {
    this.$vuetify.theme.dark = true;
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&family=Source+Sans+Pro:wght@200;300;400;600&display=swap");

.v-application {
  background: var(--v-bgbg-base) !important;
  font-family: 'Source Sans Pro';
}
</style>