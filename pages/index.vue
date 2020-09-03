<template>
  <div>
    <HeroSection></HeroSection>
    <IndexServices class="services my-10 py-10" :services="$store.state.services"></IndexServices>
    <div class="about-section">
      <v-row align="center" justify="center" class="about-row">
        <v-col class="text-center" cols="12">
          <h2>{{aboutdes}}</h2>
        </v-col>
      </v-row>
    </div>

    <div>
      <v-row class="why-us">
        <v-col cols="12" md="6" class="why-choose-us-wrapper">
          <v-row
            justify="center"
            justify-md="end"
            class="content why-choose-us my-10 ml-auto mr-auto ml-md-auto mr-md-0"
          >
            <v-col>
              <h2>Why Choose Us</h2>

              <p class="text-why-us">
                Dee Why Cleaning Services is dedicated to helping you create a clean environment in your business. We have many years of experience in the industry and our highly skilled team of cleaners provide professional cleaning services so that you don’t have to do it yourself.
                Our skilled cleaning agents are here for you seven days a week whenever required. We can tailor our cleaning services to suite your individual requirements. If you have a cleaning emergency, we can arrange help within 2–24 hours. The major reasons to choose our service are :
              </p>

              <li>High standard cleaning service.</li>
              <li>Open communicarion to CLients</li>
              <li>Cost-effective cleaning solutions</li>
              <li>Skilled and reliable staffs</li>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="6" class="what-we-offer-wrapper">
          <v-row
            justify-md="start"
            justify="center"
            class="content my-10 what-we-offer ml-auto mr-auto mr-md-auto ml-md-0"
          >
            <v-col>
              <h2>What we offer to our Clients</h2>

              <p>We provide our clients with a comprehensive cleaning service. We pride ourselves on networking with industry suppliers to ensure we are up-to-date with tailored cleaning services to fit with our clients’ cleaning requirements with the latest trends and cleaning products. We offer sound, environmentally friendly products that fit your cleaning budget. We care about you and our environmet</p>

              <li>Corporate & Social Responsibility</li>
              <li>Quality Assurance & Checks</li>
              <li>Environmental Awareness</li>
              <li>Recycling Importance</li>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>

    <NewsletterContact></NewsletterContact>
  </div>
</template>

<script>
export default {
  computed: {
    aboutdes() {
      return this.$store.state.siteData.aboutdes;
    },
  },
};
</script>

<style lang="scss">
.about-section {
  background: url("https://s7.gifyu.com/images/blueimg.jpg") center center;
  min-height: 400px;
  padding: 20px;
  position: relative;
}
.services,
.about-row {
  max-width: 1300px;
  width: 90vw;
  margin: auto;
}
.about-row {
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h2 {
    color: #ede4d3;
  }
}
</style>



<style lang="scss" scoped>
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
