<template>
  <div>
    <div class="contact-wrapper">
      <v-row class="contact pa-10" align="center">
        <v-col cols="12" md="6">
          <h2>Contact Us For Best Cleaning Services in Australia</h2>
        </v-col>
        <v-col cols="12" md="6">
          <v-row>
            <v-col cols="12">
              <v-btn color="#eca419" x-large nuxt to="/services">Contact Us</v-btn>
            </v-col>
            <v-col cols="12">
              <v-btn color="#323c34" x-large dark>Call US : +64 9999999999</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>

    <div class="newsletter-wrapper">
      <v-row class="newsletter pa-10" align="center">
        <v-col cols="12" md="6">
          <h2>Subscribe to Our NewsLetter</h2>
        </v-col>
        <v-col cols="12" md="6">
          <v-row>
            <v-col cols="12" lg="6">
              <v-text-field label="Enter Your Email Address" single-line outlined></v-text-field>
            </v-col>
            <v-col cols="12" lg="6">
              <v-btn color="#323c34" x-large dark>Subscribe</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.contact,
.newsletter {
  max-width: 1300px;
  width: 90vw;
  margin: auto;
}
.newsletter-wrapper {
  background-color: #f0f0f0;
}
</style>