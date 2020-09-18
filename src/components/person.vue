<template>
	<div class="card">
		<div class="card-header">
			<p>
				<b>{{ person.name }}</b>
			</p>
		</div>
		<div class="card-body">
			<p>height: <b>{{ person.height }}</b></p>
			<p>hair color: <b>{{ person.hair_color }}</b></p>
			<p>gender: <b>{{ person.gender }}</b></p>
			<br />
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
		this.$store.dispatch(FETCH_PERSON, this.resident).then((person) => {
			this.person = person;
		});
	},
};
</script>
