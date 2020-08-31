<template>
  <div class="main">
    <div class="title">
      <h1 class="kelson text-pri">About US</h1>
    </div>

    <v-container class="section-des mx-auto pa-8 pa-md-16">
      <div class="section-des-content" v-html="html"></div>
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

    let coll = {};
    documents.forEach((doc) => {
      coll[doc.id] = doc.data();
    });

    for (let i = 0; i < 10; i++) {

        let html2 = "";
        if (coll[i]) {
          html2 = coll[i].html || "";
        }
        html = html + html2;

    }

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