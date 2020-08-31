<template>
  <div class="main">
    <div class="divider"></div>
    <div class="title">
      <h1 class="kelson text-white">{{title}}</h1>
    </div>

    <v-container class="section-des mx-auto pa-8 pa-md-16">
      <div class="section-des-content" v-html="html"></div>
    </v-container>

    <NewsletterContact></NewsletterContact>
  </div>
</template>

<script>
export default {
  validate(context) {
    let a = [];
    for (let i = 1; i <= 15; i++) {
      a.push(`service${i}`);
    }
    if (a.includes(context.route.params.id)) {
      return true;
    }
    return false;
  },

  asyncData(context) {
    let service = context.store.state.services.filter(
      (service) => service.name == context.route.params.id
    );

    return {
      html: service[0].html,
      title: service[0].title,
    };
  },
  data() {
    return {
      html: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.main {
  margin-top: 95px;
}
.title {
  background-image: url("../../assets/svg/green-pattern.svg");
  background-repeat: repeat-x;
  background-size: 1018px;
  background-color: #323c34;
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
.section-des {
  margin-top: -60px;
  width: 90vw;
  max-width: 1300px;
  min-height: 100vh;
  background-color: #ffffff;
  text-align: center;

  position: relative;
}
img {
  width: 100%;
  margin: auto;
}
.divider {
  height: 5px;
  background-color: #eca419;
}
</style>