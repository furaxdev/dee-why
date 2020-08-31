
    <template>
  <v-footer color="#323c34" dark class="font-weight-medium">
    <v-card color="#323c34" flat tile class="white--text text-center" width="100%">
      <v-card-text>
        <v-btn class="mx-4 white--text" :href="social.facebook" target="_blank" icon>
          <v-icon size="24px">mdi-facebook</v-icon>
        </v-btn>
        <v-btn class="mx-4 white--text" :href="social.instagram" target="_blank" icon>
          <v-icon size="24px">mdi-instagram</v-icon>
        </v-btn>
        <v-btn class="mx-4 white--text" :href="social.twitter" target="_blank" icon>
          <v-icon size="24px">mdi-twitter</v-icon>
        </v-btn>
        <v-btn class="mx-4 white--text" :href="social.pinterest" target="_blank" icon>
          <v-icon size="24px">mdi-pinterest</v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} —
        <strong>DEE WHY CLEANING SERVICES</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>


<script>
export default {
  computed: {
    social() {
      return this.$store.state.siteData.social;
    },
  },
};
</script>

