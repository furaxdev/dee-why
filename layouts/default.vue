<template>
  <v-app class="super">
    <Navbar />
    <v-main>
      <nuxt />
    </v-main>

    <v-footer color="#323c34" dark class="font-weight-medium" height="80">
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} —
        <strong>DEE WHY CLEANING SERVICES</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  mounted() {
    console.log(this.$router);
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/5f3fd112cc6a6a5947adb06c/default";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  },
};
</script>
<style lang="scss" scoped>
.super {
  background-color: #ede4d3;
}
</style>