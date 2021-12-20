Vue.createApp({
	data() {
		return {
			cities: null,
			name: '',
			population: null
		};
	},
	async created() {
		this.cities = await (await fetch('https://avancera.app/cities/')).json();
	},
	methods: {
		async addCity() {
			const city = {
				name: this.name,
				population: parseInt(this.population)
			};
			this.cities = await (
				await fetch('https://avancera.app/cities/', {
					body: JSON.stringify(city),
					headers: { 'Content-Type': 'application/json' },
					method: 'POST'
				})
			).json();
		}
	}
}).mount('#app');
