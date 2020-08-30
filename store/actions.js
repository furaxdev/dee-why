export default {
  async nuxtServerInit({ commit }, { $fireStore }) {
    const dbref = $fireStore.collection("basedata");
    let doc = await dbref.doc("siteDetails").get();

    let services = [];
    for (let i = 1; i <= 15; i++) {
      let collection = $fireStore.collection("service" + i);
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

    commit("SET_SITE_DATA", doc.data());
    commit("SET_SERVICES_DATA", services);
  }
};
