<template>
  <div>
    <HeroSection></HeroSection>
    <IndexServices class="services my-10 py-10"></IndexServices>
    <div class="about-section">
      <v-row align="center" justify="center" class="about-row">
        <v-col class="text-center" cols="12">
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ut expedita odio nulla molestias non tempora ad quod? Earum deleniti, error velit accusantium sunt aspernatur nulla enim delectus corrupti asperiores?</h2>
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

              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat itaque consequuntur mollitia inventore minima earum neque molestiae laboriosam, optio voluptates facilis esse officiis est ullam fugiat quisquam voluptate accusantium aliquam!</p>

              <p
                class="text-why-us"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti tenetur est accusamus quasi beatae, autem vel repudiandae. Earum quod aperiam nemo minima libero magnam ea quae a laborum, ratione expedita!</p>

              <li>service Lorem ipsum dolor sit amet.</li>
              <li>service Lorem ipsum dolor sit amet.</li>
              <li>service Lorem ipsum dolor sit amet.</li>
              <li>service Lorem ipsum dolor sit amet.</li>
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

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugiat aliquam ea, perferendis voluptatem sequi error omnis ipsa at laboriosam, corporis earum corrupti et optio dignissimos doloribus consequatur, sit suscipit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, dolores nihil, tempore autem enim ducimus, error minima nobis deserunt quod reprehenderit corporis perspiciatis suscipit labore facilis quae aspernatur porro ullam.
              </p>
            </v-col>
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



<style lang="scss">
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
