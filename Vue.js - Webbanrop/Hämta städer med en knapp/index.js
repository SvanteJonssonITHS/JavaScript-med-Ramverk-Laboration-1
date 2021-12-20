Vue.createApp({
	data() {
		return { cities: null };
	},
	methods: {
		async fetchCities() {
			this.cities = await (await fetch('https://avancera.app/cities/')).json();
		}
	}
}).mount('#app');
