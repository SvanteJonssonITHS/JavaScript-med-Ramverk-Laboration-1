const app = Vue.createApp({});

const state = {
	string: 'String',
	number: 0,
	boolean: true
};

const store = Vuex.createStore({ state });

app.use(store);

app.component('some-component', {
	computed: {
		number() {
			return this.$store.state.number;
		}
	},
	template: '<div>{{ number }}</div>'
});

app.mount('#app');
