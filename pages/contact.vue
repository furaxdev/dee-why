<template>
  <div class="main">
    <div class="title">
      <h1 class="kelson text-pri">About US</h1>
    </div>
    <div class="contact">
      <v-row class="why-us">
        <v-col cols="12" md="6" class="why-choose-us-wrapper">
          <v-row justify="center" justify-md="end" class="content why-choose-us my-10">
            <v-col>
              <GetQuoteForm></GetQuoteForm>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="6" class="what-we-offer-wrapper">
          <v-row justify-md="start" justify="center" class="content my-10 what-we-offer">
            <v-col></v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>

    <NewsletterContact></NewsletterContact>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.contact {
  width: 90%;
  max-width: 1300px;
  margin: auto;
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
  margin-top: 95px;
}
.what-we-offer-wrapper {
  background: #eca419;
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
  }
  p {
    font-size: 20px;
  }
}
.why-choose-us {
  color: #ede4d3;
}
</style>
