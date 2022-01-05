const app = Vue.createApp({
	created() {
		fetch('https://avancera.app/cities/')
			.then((response) => response.json())
			.then((result) => {
				this.cities = result;
			});
	},
	data() {
		return {
			cities: null
		};
	}
});

const City = {
	template: '<h1>{{name}}</h1><p>{{population}}</p>',
	created() {
		this.$watch(
			() => this.$route.cityId,
			() => {
				fetch(`https://avancera.app/cities/${this.$route.params.cityId}`)
					.then((response) => response.json())
					.then((result) => {
						this.name = result.name;
						this.population = result.population;
					});
			},
			{ immediate: true }
		);
	},
	data() {
		return {
			name: null,
			population: null
		};
	}
};

const routes = [
	{
		component: City,
		path: '/:cityId'
	}
];

const router = VueRouter.createRouter({
	history: VueRouter.createWebHashHistory(),
	routes
});

app.use(router);

app.mount('#app');
