const app = Vue.createApp({});

app.component('greet', {
	props: ['playerName'],
	template: 'Välkommen, {{this.playerName}}!'
});

app.mount('#app');
