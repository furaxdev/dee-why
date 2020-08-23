<template>
  <div>
    <div
      class="HeroSection"
      :style="{
        background: `linear-gradient(270deg, rgba(70,70,70,0.6), rgba(131, 92, 15, 0.603)) ,url('https://s7.gifyu.com/images/hero-image-2.jpg') `,
        backgroundColor: '#464646'
      }"
    >
      <div class="showcase align-center text-center d-flex flex-column">
        <h1>
          <span class="title-text kelson-bold">DEE WHY</span>
          <br />
          <span class="title-text kelson-bold">CLEANING SERVICES</span>
        </h1>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <div class="d-flex flex-row buttons">
          <v-btn color="#eca419" :elevation="24" x-large>Contact Us</v-btn>
          <v-spacer></v-spacer>

          <v-btn color="#323c34" :elevation="24" x-large dark>Get Quote</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "3",
    };
  },
};
</script>

<style lang="scss" scoped>
.HeroSection {
  position: relative;
  height: 100vh;
  width: 100vw;
  background-size: cover !important;
  background-position-x: 60% !important;
  background-repeat: no-repeat;
  color: rgba(131, 92, 15, 0.603);
  clip-path: polygon(0 0, 100% 0, 100% 80vh, 0 100%);
}
.showcase {
  width: max-content;
  min-height: 30%;
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
.buttons {
  min-width: 60%;
}
</style>
