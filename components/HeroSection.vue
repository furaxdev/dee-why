<template>
  <div>
    <v-row align="center" justify="center" class="HeroSection">
      <v-col class="showcase">
        <v-col class="brand_name">
          <v-row align="center" justify="center">
            <h1 class="title-text kelson-bold">DEE WHY</h1>
          </v-row>
          <v-row justify="center">
            <h1 class="title-text kelson-bold">CLEANING SERVICES</h1>
          </v-row>
        </v-col>

        <v-row justify="space-around" class="d-flex flex-row buttons">
          <v-spacer></v-spacer>
          <v-btn color="#eca419" :elevation="24" x-large nuxt to="/services">Our Services</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="#323c34" :elevation="24" x-large dark>Get Quote</v-btn>
          <v-spacer></v-spacer>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.HeroSection {
  background: linear-gradient(
      270deg,
      rgba(70, 70, 70, 0.6),
      rgba(131, 92, 15, 0.603)
    ),
    url("https://s7.gifyu.com/images/hero-image-2.jpg");
  background-color: #464646;
  position: relative;
  height: 700px;
  width: 100vw;
  background-size: cover !important;
  background-position-x: 60% !important;
  background-repeat: no-repeat;

  //   clip-path: polygon(0 0, 100% 0, 100% 80vh, 0 100%);
}
.showcase {
  width: max-content;
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  padding: 0;
}
.title-text {
  font-size: 4.5rem;
  color: #ede4d3;
  @media screen and (max-width: 1350px) {
    font-size: 4rem;
  }
  @media screen and (max-width: 1000px) {
    font-size: 3.5rem;
  }
  @media screen and (max-width: 800px) {
    font-size: 3rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 2.2rem;
  }
}
.brand_name {
  margin-top: 60px;
}
.buttons {
  margin-top: 20px;
}
</style>