const app = Vue.createApp({});

app.component('cities', {
	data() {
		return {
			cities: null
		};
	},
	async created() {
		this.cities = await (await fetch('https://avancera.app/cities/')).json();
	},
	template: '<ul><li v-for="city in cities" :key="city.id">{{ city.name }}</li></ul>'
});

app.mount('#app');
