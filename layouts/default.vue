<template>
  <v-app>
    <Navbar />
    <v-main class="main">
      <nuxt />
    </v-main>

    <!--Start of Tawk.to Script-->
    <script type="text/javascript">
  var Tawk_API = Tawk_API || {},
    Tawk_LoadStart = new Date();
  (function() {
    var s1 = document.createElement("script"),
      s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = "https://embed.tawk.to/5f3fd112cc6a6a5947adb06c/default";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode.insertBefore(s1, s0);
  })();
    </script>
    <!--End of Tawk.to Script-->
  </v-app>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.main {
  width: 1200px;
  max-width: 90vw;
  margin: auto;
}
</style>