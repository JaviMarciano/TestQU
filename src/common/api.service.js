import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { API_URL } from "@/common/config";

const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = API_URL;
  },

  get(resource, slug = "") {
    return new Promise((resolve, reject) => {
      let res = slug ? `${resource}/${slug}` : resource;
      Vue.axios
        .get(res)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  getByUrl(url) {
    return new Promise((resolve, reject) => {
      Vue.axios
        .get(url)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

export default ApiService;