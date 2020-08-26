<template>
  <div class="main">
    <div class="title">
      <h1 class="kelson text-pri">Services</h1>
    </div>

    <v-container class="section-des mx-auto px-10">
      <v-row justify="center" align="center">
        <ServiceSingle title="Child Care Services"></ServiceSingle>
        <ServiceSingle title="Child Care Services"></ServiceSingle>
        <ServiceSingle title="Child Care Services"></ServiceSingle>
        <ServiceSingle title="Child Care Services"></ServiceSingle>
        <ServiceSingle title="Child Care Services"></ServiceSingle>
        <ServiceSingle title="Child Care Services"></ServiceSingle>
        <ServiceSingle title="Child Care Services"></ServiceSingle>
        <ServiceSingle title="Child Care Services"></ServiceSingle>
        <ServiceSingle title="Child Care Services"></ServiceSingle>
        <ServiceSingle title="Child Care Services"></ServiceSingle>
      </v-row>
    </v-container>
    <v-divider></v-divider>

    <NewsletterContact></NewsletterContact>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main {
  background: url("../../assets/svg/light-pattern.svg");

  background-attachment: fixed;
  margin-top: 95px;
}
.title {
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

  text-align: center;

  img {
    display: block;
    max-width: 100%;
    margin: auto;
  }
}
</style>