const app = Vue.createApp({});

app.component('greet', {
	props: {
		playerName: {
			type: String,
			default: 'Anonym',
			validator(value) {
				return value != '';
			}
		}
	},
	template: 'Välkommen, {{this.playerName}}!'
});

app.mount('#app');
