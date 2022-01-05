const app = Vue.createApp({});

const state = {
	string: 'String',
	number: 0,
	boolean: true
};

const mutations = {
	changeNumber(state) {
		state.number += 1;
	}
};

const store = Vuex.createStore({ state, mutations });

app.use(store);

app.component('some-component', {
	computed: {
		number() {
			return this.$store.state.number;
		}
	},
	template: '<div>{{ number }}</div><input type="button" value="Change number" @click="onClick">',
	methods: {
		onClick() {
			this.$store.commit('changeNumber');
		}
	}
});

app.mount('#app');
