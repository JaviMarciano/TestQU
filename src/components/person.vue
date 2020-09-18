<template>
	<div class="card">
		<div class="card-body">
			<p><b>{{person.name}}</b></p>
			<p>{{person.height}}</p>
			<p>{{person.mass}}</p>
			<p>{{person.gender}}</p>
			<br>
		</div>
	</div>
</template>
<script>
import { FETCH_PERSON } from "@/store/actions.type";

export default {
	name: "Person",
	props: {
		resident: {},
	},
	data() {
		return {
			person: {},
		};
	},
	mounted() {
		this.$store.dispatch(FETCH_PERSON, this.resident).then((person)=>{
			this.person = person
		})
	}
};
</script>
