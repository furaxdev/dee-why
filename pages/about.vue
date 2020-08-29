<template>
  <div class="main">
    <div class="title">
      <h1 class="kelson text-pri">About US</h1>
    </div>

    <v-container class="section-des mx-auto px-10">
      <div section-des-content v-html="html"></div>
    </v-container>

    <NewsletterContact></NewsletterContact>
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    let collection = context.$fireStore.collection("about");
    let html = "";
    const documents = await collection.get();

    documents.forEach((doc) => {
      html = html + doc.data().html;
    });

    return {
      html: html || "",
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
  background: url("../assets/svg/light-pattern.svg");

  background-attachment: fixed;
  margin-top: 95px;
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
.section-des {
  margin-top: -60px;
  width: 90vw;
  max-width: 1300px;
  min-height: 100vh;
  background-color: #ffffff;
  text-align: center;

  img {
    display: block;
    max-width: 100%;
    margin: auto;
  }
}
</style>