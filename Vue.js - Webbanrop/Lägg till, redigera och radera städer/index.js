Vue.createApp({
	async created() {
		this.cities = await this.getCities();
	},
	data() {
		return {
			cities: null,
			formButtonValue: 'Add city!',
			cityName: '',
			cityPopulation: null,
			cityId: '',
			newCity: true,
			activeCity: undefined
		};
	},
	methods: {
		async addCity(e) {
			e.preventDefault();
			const city = {
				name: this.cityName,
				population: parseInt(this.cityPopulation)
			};
			this.cities = await (
				await fetch('https://avancera.app/cities/', {
					body: JSON.stringify(city),
					headers: { 'Content-Type': 'application/json' },
					method: 'POST'
				})
			).json();
			this.cityName = '';
			this.cityPopulation = null;
		},
		async editCity(e) {
			e.preventDefault();
			const city = {
				name: this.cityName,
				population: parseInt(this.cityPopulation)
			};
			await (
				await fetch(`https://avancera.app/cities/${this.cityId}`, {
					body: JSON.stringify(city),
					headers: {
						'Content-Type': 'application/json'
					},
					method: 'PATCH'
				})
			).json();
			this.cities = await this.getCities();
			this.cityName = '';
			this.cityPopulation = null;
		},
		async deleteCity(id) {
			await fetch(`https://avancera.app/cities/${id}`, { method: 'DELETE' });
			this.cities = await this.getCities();
		},
		async updateForm(id) {
			const city = await (await fetch(`https://avancera.app/cities/${id}`)).json();
			this.cityName = city.name;
			this.cityPopulation = city.population;
			this.cityId = id;
			this.newCity = false;
		},
		async getCities() {
			return await (await fetch('https://avancera.app/cities/')).json();
		}
	}
}).mount('#app');
