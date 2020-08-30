import state from "./state.";

export default {
  SET_SITE_DATA(state, data) {
    state.siteData = data;
  },
  SET_SERVICES_DATA(state ,data){
    state.services = data
  }
};
