<template>
  <div class="main">
    <div class="title">
      <h1 class="kelson text-pri">Contact</h1>
    </div>
    <div class="contact" id="getquote">
      <v-row class="why-us">
        <v-col cols="12" md="6" class="why-choose-us-wrapper">
          <v-row justify="center" class="content why-choose-us my-10 mx-auto">
            <v-col>
              <GetQuoteForm></GetQuoteForm>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="6" class="what-we-offer-wrapper">
          <v-col align="center" class="content py-auto what-we-offer">
            <v-col class="my-10">
              <h2>Email</h2>
              <p>{{contact.email}}</p>
            </v-col>
            <v-divider></v-divider>
            <v-col class="my-10">
              <h2>Phone</h2>
              <p>{{contact.phone}}</p>
            </v-col>
            <v-divider></v-divider>

            <v-col class="my-10">
              <h2>Location</h2>
              <p>{{contact.location}}</p>
            </v-col>
          </v-col>
        </v-col>

        <v-icon x-large class="contact-showoff d-none d-md-block">mdi-mail</v-icon>
      </v-row>
    </div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.520957770661!2d151.28655901594047!3d-33.747201420190976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12aa825a616fc3%3A0x7c655eb1c01d2990!2sLismore%20Ave%2C%20Dee%20Why%20NSW%202099%2C%20Australia!5e0!3m2!1sen!2snp!4v1598568945157!5m2!1sen!2snp"
      frameborder="0"
      style="border:0;"
      aria-hidden="false"
      tabindex="0"
      class="map"
    ></iframe>

    <NewsletterContact></NewsletterContact>
  </div>
</template>

<script>
export default {
  computed: {
    contact() {
      return this.$store.state.siteData.contact;
    },
  },
};
</script>

<style lang="scss" scoped>
.map {
  width: 100%;
  height: 600px;
  margin-top: -150px;
}
.contact {
  padding-top: 90px;
  position: relative;
  width: 90%;
  max-width: 1300px;
  margin: auto;
  margin-top: -90px;
}
.why-us {
}
.title {
  height: 300px;
  text-align: center;
  position: relative;
  h1 {
    text-transform: uppercase;
    font-size: 3rem;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.main {
  background: url("../assets/svg/light-pattern.svg");

  background-attachment: fixed;
  margin-top: 95px;
}
.what-we-offer-wrapper {
  background: #eca419;
  position: relative;

  min-height: 700px;
}
.what-we-offer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.why-choose-us-wrapper {
  background: #3c3a34;
}

.content {
  max-width: 650px;
  width: 90%;

  li {
    list-style: initial;
  }
  h2 {
    font-size: 30px;
    color: #3c3a34;
  }
  p {
    font-size: 20px;
    color: #3c3a34;
  }
}
.why-choose-us {
  color: #ede4d3;
}

.contact-showoff {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  background: #fff;
  border-radius: 50%;
}
</style>

