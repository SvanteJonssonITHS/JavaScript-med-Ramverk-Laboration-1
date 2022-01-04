const app = Vue.createApp({});

app.component('greet', {
	props: {
		playerName: {
			type: String,
			default: 'Anonym'
		}
	},
	template: 'Välkommen, {{this.playerName}}!'
});

app.mount('#app');
