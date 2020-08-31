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
              <v-btn color="#eca419" x-large nuxt to="/contact">Contact Us</v-btn>
            </v-col>
            <v-col cols="12">
              <v-btn
                color="#323c34"
                x-large
                dark
                :href="'tel:'+contact.phone"
              >Call US : {{contact.phone}}</v-btn>
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
              <v-text-field
                label="E-mail"
                single-line
                outlined
                v-model="email"
                :error-messages="emailErrors"
                required
                @blur="$v.email.$touch()"
              ></v-text-field>
            </v-col>
            <v-col cols="12" lg="6">
              <v-btn color="#323c34" x-large dark @click="subscribe">Subscribe</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],

  validations: {
    email: { required, email },
  },
  computed: {
    contact() {
      return this.$store.state.siteData.contact;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
  },
  methods: {
    async subscribe() {
      const a = this.$v.$touch();
      if (this.$v.$pending || this.$v.$error) return;
      await this.$fireStore.collection("newsletters").doc().set({
        email: this.email,
        timestamp: this.$fireStoreObj.FieldValue.serverTimestamp(),
      });
      this.email = "";
      alert("Subscribed to NewsLetter");
    },
  },
  data() {
    return {
      email: "",
    };
  },
};
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