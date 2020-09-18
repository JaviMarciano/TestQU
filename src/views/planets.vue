<template>
	<div class="layout home header-search">
		<div class="wrapper">
			<section class="body">
				<div class="container">
					<h5 class="mb-3">
						Click on the headers in order to sort displayed planets, paginated
						result should be sorted in backend
					</h5>
					<table class="table table-bordered">
						<thead>
							<tr>
								<th @click="sort('name')">
									<i class="fa fa-fw fa-sort"></i>Name
								</th>
								<th @click="sort('rotation_period')">
									<i class="fa fa-fw fa-sort"></i>Rotation Period
								</th>
								<th @click="sort('orbital_period')">
									<i class="fa fa-fw fa-sort"></i>Orbital Period
								</th>
								<th @click="sort('diameter')">
									<i class="fa fa-fw fa-sort"></i>Diameter
								</th>
								<th @click="sort('climate')">
									<i class="fa fa-fw fa-sort"></i>Climate
								</th>
							</tr>
						</thead>
						<tbody>
							<tr
								class="player-block"
								v-for="(planet, index) in planets"
								:key="index"
								@click="getPerson(planet.residents, planet.name)"
								:class="planet.residents.length > 0 ? 'has-residents' : ''"
							>
								<td>{{ planet.name }}</td>
								<td>{{ planet.rotation_period }}</td>
								<td>{{ planet.orbital_period }}</td>
								<td>{{ planet.diameter }}</td>
								<td>{{ planet.climate }}</td>
							</tr>
						</tbody>
						<tfoot>
							<tr>
								<td colspan="5" style="text-align: center;">
									<nav>
										<ul class="pagination d-flex justify-content-center">
											<li class="page-item" v-show="previous">
												<a class="page-link" href="#" aria-label="Previous">
													<span aria-hidden="true">&laquo;</span>
													<span class="sr-only">Previous</span>
												</a>
											</li>
											<li
												class="page-item"
												v-for="index in count"
												:key="index"
												@click="getPage(index)"
											>
												<a class="page-link" href="#">{{ index }}</a>
											</li>
											<li class="page-item" v-show="next">
												<a class="page-link" href="#" aria-label="Next">
													<span aria-hidden="true">&raquo;</span>
													<span class="sr-only">Next</span>
												</a>
											</li>
										</ul>
									</nav>
								</td>
							</tr>
						</tfoot>
					</table>
					<h5 v-show="residents.length > 0">
						Residents <b>({{ selectedPlanet }})</b>:
					</h5>
					<ul>
						<li
							v-for="(resident, index) in residents"
							:key="index"
							class="person-data mr-3 mb-3"
						>
							<Person :resident="resident"></Person>
						</li>
					</ul>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
import { mapState } from "vuex";
import { FETCH_PLANETS, SORT_PLANETS } from "@/store/actions.type";
import Person from "@/components/person";

export default {
	name: "Planets",
	data() {
		return {
			page: 1,
			selectedPlanet: "",
			residents: [],
		};
	},
	components: {
		Person,
	},
	methods: {
		getPage(page) {
			this.$store.dispatch(FETCH_PLANETS, page);
		},
		sort(sortKey) {
			this.$store.dispatch(SORT_PLANETS, sortKey);
		},
		getPerson(residents, selectedPlanet) {
			this.selectedPlanet = selectedPlanet;
			this.residents = residents;
		},
	},
	mounted() {
		this.$store.dispatch(FETCH_PLANETS, this.page);
	},
	computed: {
		...mapState({
			planets: (state) => state.planet.planets,
			count: (state) => state.planet.count,
			previous: (state) => state.planet.previous,
			next: (state) => state.planet.next,
			errors: (state) => state.planet.errors,
		}),
	},
};
</script>
