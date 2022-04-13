<template>
  <v-app>
    <!-- <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar> -->

    <v-main>
      <!-- <HelloWorld/> -->
      <!-- <v-layout class="my-8">
        <v-flex xs4 class="mx-auto">
          <v-btn outlined @click="changeThemeColor('#000000')" class="my-2" color="#000000">Hitam</v-btn>
          <v-btn outlined @click="changeThemeColor('#f58442')" class="my-2" color="#f58442">Oren</v-btn>
        </v-flex>
      </v-layout>
      <v-layout class="my-8">
        <v-flex xs4 class="mx-auto">
          <v-text-field outlined label="Username"></v-text-field>
          <v-btn color="primary" block>Save</v-btn>
        </v-flex>
      </v-layout> -->
      <!-- <navigation-drawer/> -->
      <nuxt-child />
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'IndexPage',

  components: {
    // HelloWorld,
  },

  data: () => ({
  }),
  mounted() {
    if(localStorage.linkBaru == null){
       this.$store.dispatch('news/fetchArtikel');
    }
    else if(localStorage.linkBaru !== localStorage.link )
    { 
       this.$store.commit('news/setURL', localStorage.linkBaru)
      //  console.log(this.$store.state.link)
       this.$store.dispatch('news/fetchArtikel');
    }

    // this.$store.dispatch('news/fetchArtikelDenganSeach')
    
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
