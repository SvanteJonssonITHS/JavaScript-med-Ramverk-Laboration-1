Vue.createApp({
	data() {
		return {
			cities: null
		};
	},
	async created() {
		this.cities = await (await fetch('https://avancera.app/cities/')).json();
	}
}).mount('#app');
