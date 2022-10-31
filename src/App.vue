<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
  html { 
    overflow-y: auto !important
  }

  body {
    margin: 0px;
  }

  * {
    box-sizing: border-box !important;
  }

</style>
