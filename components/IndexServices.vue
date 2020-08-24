<template>
  <div>
    <h1 class="kelson text-uppercase text-center text-sec title-service mb-10">Our Services</h1>
    <v-row justify="center" align="center">
      <Service title="Child Care Services"></Service>
      <Service title="Child Care Services"></Service>
      <Service title="Child Care Services"></Service>
      <Service title="Child Care Services"></Service>
      <Service title="Child Care Services"></Service>
      <Service title="Child Care Services"></Service>
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