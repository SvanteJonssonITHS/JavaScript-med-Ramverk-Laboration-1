const app = Vue.createApp({});

app.component('greet', {
	props: {
		playerName: {
			type: String,
			required: true
		}
	},
	template: 'Välkommen, {{this.playerName}}!'
});

app.mount('#app');
