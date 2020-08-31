<template>
  <div style="position:absolute;width:100%;z-index:2222 ">
    <v-app-bar height="35px" color="#eca419" class>
      <nav class="d-flex text-pri center align-center text-center">
        <a href="/" target="_blank" color="#000" class="social-links">
          <v-icon medium>mdi-cellphone-android</v-icon>
          <v-btn text class="text-pri" :href="'tel:'+contact.phone">{{contact.phone}}</v-btn>
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
        <v-row class="div flex-row">
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <a :href="social.facebook" target="_blank" color="#000" class="social-links">
            <v-icon medium="true">mdi-facebook</v-icon>
          </a>
          <v-spacer></v-spacer>

          <a :href="social.instagram" target="_blank" color="#000" class="social-links">
            <v-icon medium="true">mdi-instagram</v-icon>
          </a>
          <v-spacer></v-spacer>

          <a :href="social.twitter" target="_blank" color="#000" class="social-links">
            <v-icon medium="true">mdi-twitter</v-icon>
          </a>
          <v-spacer></v-spacer>

          <a :href="social.pinterest" target="_blank" color="#000" class="social-links">
            <v-icon medium="true">mdi-pinterest</v-icon>
          </a>
        </v-row>
      </nav>
    </v-app-bar>
    <v-app-bar
      height="60px"
      class="px-0"
      :elevation="scrollPos >20 ?24 : 0"
      id="navbar"
      :style="navStyle"
    >
      <nav class="d-flex center align-center">
        <v-toolbar-title>
          <nuxt-link
            to="/"
            class="kelson-bold text-white text-uppercase"
            style="font-size:2rem"
          >{{name}}</nuxt-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>

        <v-row class="navigation kelson d-none d-md-flex flex-row align-center">
          <nuxt-link to="/" class="nav-link">Home</nuxt-link>
          <v-spacer></v-spacer>
          <nuxt-link to="/about" class="nav-link">About</nuxt-link>
          <v-spacer></v-spacer>
          <div>
            <nuxt-link to="/services" class="nav-link" id="service">Services</nuxt-link>

            <v-menu :open-on-hover="true" activator="#service" :offset-y="true">
              <v-list color="#323c34" class="kelson">
                <v-list-item v-for="service in $store.state.services" :key="service.name">
                  <v-list-item-title class="d-nav-link-item">
                    <nuxt-link class="d-nav-link" :to="'/services/'+service.name">{{service.title}}</nuxt-link>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>

          <v-spacer></v-spacer>
          <nuxt-link to="/contact" class="nav-link">Contact</nuxt-link>
          <v-spacer></v-spacer>

          <nuxt-link
            to="/contact#getquote"
            class="kelson btn-quote pa-2 rounded"
            style="font-size:1.2rem"
          >Get Free quote</nuxt-link>
        </v-row>

        <div class="burger-wrapper">
          <svg
            stroke="#ede4d3"
            fill="#ede4d3"
            stroke-width="0"
            viewBox="0 0 512 512"
            class="d-md-none block burger"
            height="2.5rem"
            width="2.5rem"
            xmlns="http://www.w3.org/2000/svg"
            @click="togglenav"
          >
            <path
              d="M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z"
            />
          </svg>
        </div>
      </nav>
    </v-app-bar>
    <div
      class="absolute mobile-nav-wrapper right-0"
      :class="isNavOpen ? 'open' : ''"
      @click.self="togglenav"
    >
      <div class="relative mobile-nav" :class="isNavOpen ? 'open' : ''">
        <ul>
          <li class="m-nav-link-item">
            <div aria-label="Close">
              <svg
                viewBox="0 0 24 24"
                focusable="false"
                role="presentation"
                aria-hidden="true"
                class="btn-close"
                height="20px"
                @click="togglenav"
                fill="#ede4d3"
              >
                <path
                  d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
                />
              </svg>
            </div>
          </li>
          <li class="m-nav-link-item">
            <nuxt-link
              to="/"
              class="m-nav-link kelson text-uppercase"
              @click.native="isNavOpen = false"
            >Home</nuxt-link>
          </li>
          <li class="m-nav-link-item">
            <nuxt-link
              to="/about"
              class="m-nav-link kelson text-uppercase"
              @click.native="isNavOpen = false"
            >About</nuxt-link>
          </li>
          <li class="m-nav-link-item">
            <nuxt-link
              to="/services"
              class="m-nav-link kelson text-uppercase"
              @click.native="isNavOpen = false"
            >Services</nuxt-link>
          </li>
          <li class="m-nav-link-item">
            <nuxt-link
              to="/contact"
              class="m-nav-link kelson text-uppercase"
              @click.native="isNavOpen = false"
            >Contact</nuxt-link>
          </li>
        </ul>

        <div class="d-flex flex-column mx-5 mt-7">
          <v-row class="flex-column">
            <v-spacer></v-spacer>
            <div class="d-flex">
              <a :href="social.facebook" target="_blank">
                <v-icon medium="true" class="m-social-links">mdi-facebook</v-icon>
              </a>
              <v-spacer></v-spacer>
              <a :href="social.instagram" target="_blank">
                <v-icon medium="true" class="m-social-links">mdi-instagram</v-icon>
              </a>
              <v-spacer></v-spacer>
              <a :href="social.twitter" target="_blank">
                <v-icon medium="true" class="m-social-links">mdi-twitter</v-icon>
              </a>
              <v-spacer></v-spacer>
              <a :href="social.pinterest" target="_blank">
                <v-icon medium="true" class="m-social-links">mdi-pinterest</v-icon>
              </a>
            </div>
            <v-spacer></v-spacer>
            <div></div>
          </v-row>
          <div class="d-flex mt-7">
            <v-spacer></v-spacer>
            <nuxt-link
              to="/contact#getquote"
              class="kelson btn-quote pa-2 rounded"
              style="font-size:1.2rem"
              @click.native="isNavOpen = false"
            >Get Free quote</nuxt-link>
            <v-spacer></v-spacer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.addEventListener("scroll", () => {
      this.scrollPos = window.scrollY;
    });
  },
  computed: {
    name() {
      return this.$store.state.siteData.siteDetails.name;
    },
    social() {
      return this.$store.state.siteData.social;
    },
    contact() {
      return this.$store.state.siteData.contact;
    },
    navStyle() {
      let styles = {
        backgroundColor: "#323c34 !important",
      };
      if (this.$router.currentRoute.path == "/") {
        styles = {
          backgroundColor: "transparent !important",
        };
      }

      if (this.scrollPos >= 35) {
        styles = {
          backgroundColor: "#323c34 !important",
          position: "fixed",
          top: 0,
        };
      }
      this.stylesdata = styles;
      return this.stylesdata;
    },
  },
  data() {
    return {
      isNavOpen: false,
      scrollPos: 0,
    };
  },
  methods: {
    togglenav() {
      this.isNavOpen = !this.isNavOpen;
    },
  },
  watch: {
    $route() {
      this.isNavOpen = false;
      this.scrollPos = Math.random();
    },
  },
};
</script>

<style lang='scss' scoped>
#navbar {
  transition: all ease-in 0.5s;
}

.btn-close {
  height: 16px;
  cursor: pointer;
  transition: all ease-in-out;
  &:hover {
    fill: #eca419;
  }
  transform: translateX(-2rem);
}
.mobile-nav-wrapper {
  z-index: 40000;
  position: fixed;
  top: 0px;
  left: 600vw;
  width: 100vw;
  height: 100vh;
  background: rgba($color: #fff, $alpha: 0.6);

  &.open {
    left: 0;
  }
}
.mobile-nav {
  transition: all 0.7s ease-in-out;
  position: fixed;
  float: right;
  outline: currentcolor none 0px;
  max-width: 28rem;
  width: 100%;

  background-color: rgb(50, 60, 52);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 7px 14px 0px,
    rgba(0, 0, 0, 0.07) 0px 3px 6px 0px;
  will-change: opacity, transform;

  height: 100vh;
  top: 0;
  right: -28rem;
  padding: 2rem;

  &.open {
    right: 0;
  }
}
.burger {
  cursor: pointer;
  transition: all ease-in-out 0.5s;
  &:hover {
    fill: #eca419;
  }
}
.v-icon {
  //   background-color: #323c34;
  color: rgba($color: #323c34, $alpha: 1);
  transition: all ease-in-out 0 0.5s;
  &:hover,
  &.m-social-links:hover {
    color: #ede4d3 !important;
  }
  &.m-social-links {
    color: #eca419 !important ;
  }
}
.btn-quote {
  background-color: #eca419;
  color: #323c34 !important;
  transition: all 0.5s ease-in-out;

  &:hover {
    color: #ede4d3 !important;
  }
}
nav {
  width: 1200px;
  max-width: 80vw;
  margin: auto;
}
.nav-link {
  position: relative;
  color: #ede4d3;
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
.m-nav-link-item {
  color: #ede4d3;
  margin-bottom: 1.5rem;
  padding: 12px;
  min-height: 40px;
  &:not(:first-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    transition: all 0.4s ease;
    &:hover {
      border-bottom: 1px solid #eca419;
      background: rgba($color: #eca419, $alpha: 0.14);
      color: #eca419 !important;
    }
  }
}
.m-nav-link {
  color: inherit;
  letter-spacing: -0.004em;
  line-height: 1.39;
  font-weight: 500;
  font-size: 24px;
  cursor: pointer;
  padding-left: 2.5rem;
}

.d-nav-link-item {
  color: #ede4d3;
  margin-bottom: 1rem;

  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.4s ease;
  &:hover {
    color: #eca419 !important;
  }
  padding: 10px;
}

.d-nav-link {
  color: inherit;

  font-size: 1.2rem;
  cursor: pointer;
  padding: 2px;
}
.services-list {
  transition: all 1s ease;
}
</style>