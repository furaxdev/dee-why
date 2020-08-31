<template>
  <div>
    <h1 class="kelson text-uppercase text-center text-sec title-service mb-10">Our Services</h1>
    <v-row justify="center" align="center">
      <Service
        v-for="service in servicestoshow"
        :title="service.title"
        :key="service.name"
        :des="service.des"
        :thumbnail="service.thumbnail"
        :name="service.name"
      ></Service>
    </v-row>

    <v-row justify="center" class="mt-10">
      <v-btn color="#323c34" dark class="read-more kelson" nuxt to="services">ALL SERVICES</v-btn>
    </v-row>
  </div>
</template>

<script>
import Service from "./ServiceSingle";
export default {
  components: {
    Service,
  },
  props: {
    services: {
      type: Array,
    },
  },
  computed: {
    servicestoshow() {
      let servicesarray = [];
      for (let i = 0; i <= 5; i++) {
        if (this.services[i]) {
          servicesarray.push(this.services[i]);
        }
      }
      return servicesarray;
    },
  },

};
</script>

<style lang="scss" scoped>
.title-service {
  font-size: 3rem;
}
.read-more {
  width: 94%;
  padding: 0;
  font-size: 18px;
}
</style>