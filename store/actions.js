export default {
  async nuxtServerInit({ commit }, { $fireStore }) {
    const dbref = $fireStore.collection("basedata");
    let basedatacollection = await dbref.get();

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
    let services2 = services.filter(service => service.show == true);

    let basedata = {};
    basedatacollection.forEach(doc => {
      basedata[doc.id] = doc.data();
    });
    const aboutdoc = await $fireStore
      .collection("about")
      .doc("description")
      .get();

    basedata.aboutdes = aboutdoc.data().des;

    commit("SET_SITE_DATA", basedata);
    commit("SET_SERVICES_DATA", services2);
  }
};
