import ApiService from "../common/api.service";
import { FETCH_PLANETS, SORT_PLANETS } from "./actions.type";
import { SET_PLANETS, SET_ERROR, SET_SORTED_PLANETS } from "./mutations.type";

const state = {
	errors: null,
	planets: [],
	count: 0,
	next: null,
	previous: null,
};

const actions = {
	[FETCH_PLANETS](context, page) {
		return new Promise(() => {
			ApiService.get(`planets?page=${page}`)
				.then((response) => {
					context.commit(SET_PLANETS, response.data);					
				})
				.catch(({ response }) => {
					context.commit(SET_ERROR, response.data.errors);
				});
		});
	},
	[SORT_PLANETS](context, sortKey) {
    const planets = state.planets;
		planets.sort((a, b) => {
      let compare = 0;
			if (a[sortKey] > b[sortKey]) {
				compare = 1;
			} else if (b[sortKey] > a[sortKey]) {
				compare = -1;
			}
			return compare;
		});
		context.commit(SET_SORTED_PLANETS, planets);
	},
};

const mutations = {
	[SET_ERROR](state, error) {
		state.errors = error;
	},
	[SET_PLANETS](state, planets) {
		state.planets = planets.results;
		state.previous = planets.previous;
		state.next = planets.next;
		state.count = planets.count / planets.results.length;
		state.errors = {};
  },
  [SET_SORTED_PLANETS](state, planets) {
		state.planets = planets;	
	},
};

export default {
	state,
	actions,
	mutations,
};
