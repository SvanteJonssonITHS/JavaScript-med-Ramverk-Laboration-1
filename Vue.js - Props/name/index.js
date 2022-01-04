const app = Vue.createApp({});

app.component('greet', {
	props: ['name'],
	template: 'Välkommen, {{this.name}}!'
});

app.mount('#app');
