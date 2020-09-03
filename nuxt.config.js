const firebase = require("firebase");

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: "Dee Why Cleaning Services",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Dee Why Cleaning Services is a cleaning service provider based on dee why australia . We provide qualit cleaning services to our clients "
      }
    ],

    link: [
      {
        href:
          "https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css",
        rel: "stylesheet"
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: ["@/assets/css/main.scss"],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/vuetify"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      "@nuxtjs/firebase",
      {
        config: {
          apiKey: "AIzaSyC7j6Ye1qmM3WB_Fb2QdSYo_ypVkyxsBJE",
          authDomain: "dee-why.firebaseapp.com",
          databaseURL: "https://dee-why.firebaseio.com",
          projectId: "dee-why",
          storageBucket: "dee-why.appspot.com",
          messagingSenderId: "103213222565",
          appId: "1:103213222565:web:d70f3111e1dfa3204a5b4c",
          measurementId: "G-BHVBQMME48"
        },
        services: {
          firestore: true
        }
      }
    ]
  ],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */

  vuetify: {
    treeshake: true
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    transpile: ["vuetify"]
  },
  generate: {
    routes: async function() {
      firebase.initializeApp({
        apiKey: "AIzaSyC7j6Ye1qmM3WB_Fb2QdSYo_ypVkyxsBJE",
        authDomain: "dee-why.firebaseapp.com",
        databaseURL: "https://dee-why.firebaseio.com",
        projectId: "dee-why",
        storageBucket: "dee-why.appspot.com",
        messagingSenderId: "103213222565",
        appId: "1:103213222565:web:d70f3111e1dfa3204a5b4c",
        measurementId: "G-BHVBQMME48"
      });
      let db = firebase.firestore();

      let routes = [];

      let services = [];
      for (let i = 1; i <= 15; i++) {
        let collection = db.collection("service" + i);
        let coll = {};
        let html = "";
        const documents = await collection.get();
        documents.forEach(doc => {
          coll[doc.id] = doc.data();
        });
        for (let i = 0; i < 10; i++) {
          let html2 = "";
          if (coll[i]) {
            html2 = coll[i].html || "";
          }
          html = html + html2;
        }
        services.push({
          name: "service" + i,
          title: coll.basedata.title || "",
          thumbnail: coll.basedata.thumbnail || "",
          des: coll.basedata.des || "",
          show: coll.basedata.show || false,
          html: html
        });
      }
      let services2 = services.filter(service => service.show == true);

      services2.forEach(service => {
        routes.push("/services/" + services2.name);
      });

      return routes;
    }
  }
};
