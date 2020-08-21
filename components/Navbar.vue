<template>
  <div>
    <v-app-bar height="40px" color="#eca419">
      <nav class="flex text-pri center align-center text-center">
        <a href="/" target="_blank" color="#000" class="social-links">
          <v-icon medium>mdi-cellphone-android</v-icon>
          <span class="text-pri">+61 999999999999</span>
        </a>

        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <div class="div flex">
          <a href="/" target="_blank" color="#000" class="social-links">
            <v-icon medium="true">mdi-facebook</v-icon>
          </a>
          <v-spacer></v-spacer>

          <a href="/" target="_blank" color="#000" class="social-links">
            <v-icon medium="true">mdi-instagram</v-icon>
          </a>
          <v-spacer></v-spacer>

          <a href="/" target="_blank" color="#000" class="social-links">
            <v-icon medium="true">mdi-twitter</v-icon>
          </a>
          <v-spacer></v-spacer>

          <a href="/" target="_blank" color="#000" class="social-links">
            <v-icon medium="true">mdi-pinterest</v-icon>
          </a>
        </div>
      </nav>
    </v-app-bar>
    <v-app-bar height="80px" color="#323c34" class="px-0">
      <nav class="flex center align-center">
        <v-toolbar-title>
          <nuxt-link to="/" class="kelson-bold text-white text-2xl">DEE WHY</nuxt-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <div class="navigation kelson flex hidden d-md-flex">
          <nuxt-link to="/" class="nav-link">Home</nuxt-link>
          <v-spacer></v-spacer>
          <nuxt-link to="/about" class="nav-link">About</nuxt-link>
          <v-spacer></v-spacer>
          <nuxt-link to="/services" class="nav-link">Services</nuxt-link>
          <v-spacer></v-spacer>
          <nuxt-link to="/Contact" class="nav-link">Contact</nuxt-link>
        </div>

        <v-spacer></v-spacer>

        <nuxt-link
          to="/"
          class="kelson btn-quote hidden d-md-block p-2 rounded"
          style="font-size:1.2rem"
        >Get Free quote</nuxt-link>
      </nav>

      <svg
        stroke="#eca419"
        fill="#eca419"
        stroke-width="0"
        viewBox="0 0 512 512"
        class="d-md-none block burger"
        height="2.5rem"
        width="2.5rem"
        xmlns="http://www.w3.org/2000/svg"
        @click="opennav"
      >
        <path
          d="M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z"
        />
      </svg>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  methods: {
    opennav() {
      console.log("open");
    },
  },
};
</script>

<style lang='scss' scoped>
.burger {
  cursor: pointer;
  transition: all ease-in-out 0.5s;
  &:hover {
    fill: #fff;
  }
}
.v-icon {
  //   background-color: #323c34;
  color: rgba($color: #000000, $alpha: 0.8) !important;

  transition: all ease-in-out 0 0.5s;
  &:hover {
    color: #fff !important;
  }
}
.btn-quote {
  background-color: #eca419;
  color: #323c34 !important;
  transition: all 0.5s ease-in-out;

  &:hover {
    color: #fff !important;
  }
}
nav {
  width: 1200px;
  max-width: 80vw;
  margin: auto;
}
.nav-link {
  position: relative;
  color: white;
  font-size: 1.2rem;
  font-weight: 500;
  text-transform: uppercase;
  &::after {
    transition: bottom ease 0.25s, background-color ease 0.25s;
    content: "";
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: 0px;
    left: 0;
    background: transparent;
  }
  &:hover::after {
    bottom: -5px;
    background-color: #eca419;
  }
  &.nuxt-link-exact-active::after {
    content: "";
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: -5px;
    background-color: #eca419;
    left: 0;
  }
}
</style>