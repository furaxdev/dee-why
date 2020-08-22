export default {
  async nuxtServerInit({ commit }, { $fireStore }) {
    const dbref = $fireStore.collection("basedata");
    let doc = await dbref.doc("siteDetails").get();
    commit("SET_SITE_DATA", doc.data());
  }
};
