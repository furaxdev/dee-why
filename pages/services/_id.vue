<template>
  <div class="main">
    <div class="divider"></div>
    <div class="title">
      <h1 class="kelson text-white">Service title</h1>
    </div>

    <v-container class="section-des mx-auto px-10">
      <div section-des-content></div>
    </v-container>

    <NewsletterContact></NewsletterContact>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main {
  margin-top: 95px;
}
.title {
  background-image: url("../../assets/svg/green-pattern.svg");
  background-repeat: repeat-x;
  background-size: 1018px;
  background-color: #323c34;
  height: 300px;
  text-align: center;
  position: relative;
  h1 {
    text-transform: uppercase;
    font-size: 3rem;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.section-des {
  margin-top: -60px;
  width: 90vw;
  max-width: 1300px;
  height: 100vh;
  background-color: #ffffff;
  text-align: center;

  position: relative;

  img {
    display: block;
    max-width: 100%;
    margin: auto;
  }
}
.divider {
  height: 5px;
  background-color: #eca419;
}
</style>