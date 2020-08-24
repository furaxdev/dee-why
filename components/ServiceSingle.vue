<template>
  <v-col cols="12" md="6" lg="4">
    <v-card class="mx-auto" max-width="540px" width="94%">
      <v-img
        class="white--text align-end justify-center"
        height="260px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      ></v-img>

      <v-card-text class="pa-7">
        <h2 class="about-title kelson text-uppercase my-4">{{title}}</h2>

        <h3
          class="text-des text-basic"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum impedit doloremque laboriosam, nesciunt accusantium sed similique iure sit aperiam? Possimus vel voluptates consequuntur deleniti perspiciatis assumenda exercitationem ipsum necessitatibus quod.</h3>
      </v-card-text>

      <v-card-actions class="pa-7">
        <v-btn color="#323c34" class="read-more kelson uppercase" text>Read more .....</v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.read-more {
  border: 3px solid #eca419;
  border-radius: 0% !important;
}
.text-des {
  font-weight: normal;
}
</style>