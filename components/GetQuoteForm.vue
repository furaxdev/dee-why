<template>
  <form class="form">
    <v-text-field
      dark
      color="#eca419"
      outlined
      v-model="name"
      :error-messages="nameErrors"
      label="Name"
      required
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field
      dark
      color="#eca419"
      outlined
      v-model="email"
      :error-messages="emailErrors"
      label="E-mail"
      required
      @blur="$v.email.$touch()"
    ></v-text-field>
    <v-text-field dark color="#eca419" outlined v-model="phone" label="Phone" required></v-text-field>
    <v-textarea color="#eca419" dark label="Enter Your Message" outlined required v-model="message"></v-textarea>

    <v-checkbox
      v-model="checkbox"
      :error-messages="checkboxErrors"
      label="Do you want to submit?"
      required
      @change="$v.checkbox.$touch()"
      @blur="$v.checkbox.$touch()"
    ></v-checkbox>

    <v-btn class="mr-4" @click="submit">submit</v-btn>
    <v-btn @click="clear">clear</v-btn>
  </form>
</template>


<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],

  validations: {
    name: { required },
    email: { required, email },
    checkbox: {
      checked(val) {
        return val;
      },
    },
  },

  data: () => ({
    name: "",
    email: "",
    phone: "",
    message: "",
    checkbox: false,
  }),

  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked && errors.push("You must agree to continue!");
      return errors;
    },
    selectErrors() {
      const errors = [];
      if (!this.$v.select.$dirty) return errors;
      !this.$v.select.required && errors.push("Item is required");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;

      !this.$v.name.required && errors.push("Name is required.");
      return errors;
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
    submit() {
      const a = this.$v.$touch();
      if (this.$v.$pending || this.$v.$error) return;
      console.log("sss");
    },
    clear() {
      this.$v.$reset();

      this.name = "";
      this.email = "";
      this.phone = "";
      this.message = "";
      this.checkbox = false;
    },
  },
};
</script>



<style lang="scss">
.form {
  color: white;

  input,
  label,
  .v-input {
    color: white !important;
  }
}
</style>