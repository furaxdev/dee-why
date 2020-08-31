<template>
  <v-col cols="12" md="6" lg="4">
    <v-card
      class="mx-auto card"
      max-width="540px"
      width="94%"
      min-height="500px"
      max-height="500px"
    >
      <v-img class="white--text align-end justify-center" height="260px" :src="thumbnail"></v-img>

      <v-card-text class="pa-7">
        <h2 class="about-title kelson text-uppercase my-4">{{title}}</h2>

        <h3 class="text-des text-basic">{{des.slice(0,65)}}....</h3>
      </v-card-text>

      <v-card-actions class="pa-7">
        <v-btn
          color="#323c34"
          nuxt
          :to="'/services/'+name"
          class="read-more kelson uppercase"
          text
        >Read more .....</v-btn>
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
    des: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    name: {
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
.card {
  height: 100% !important;
}
</style>