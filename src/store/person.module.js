import ApiService from "../common/api.service";
import { FETCH_PERSON } from "./actions.type";
import { SET_PERSON, SET_ERROR} from "./mutations.type";

const state = {
  errors: null,
  person: {},
};

const actions = {
  [FETCH_PERSON](context, url) {    
    return new Promise((resolve) => {
      ApiService.getByUrl(url) 
        .then((response) => {      
          resolve(response.data);
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response?.data?.errors);
        });
    });
  }
};

const mutations = {
  [SET_ERROR](state, error) {
    state.errors = error;
  },
  [SET_PERSON](state, person) {  
    console.log("state.person")  
    state.person = person;    
    state.errors = {};
  }
};

export default {
  state,
  actions,
  mutations
};