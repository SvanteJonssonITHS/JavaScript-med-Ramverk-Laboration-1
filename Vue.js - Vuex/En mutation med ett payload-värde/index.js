const app = Vue.createApp({});

const state = {
	string: 'String',
	number: 0,
	boolean: true
};

const mutations = {
	changeNumber(state, amount) {
		state.number += amount;
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
	template: '<div>{{ number }}</div><input v-model="input"><input type="button" value="Change number" @click="onClick">',
	methods: {
		onClick() {
			this.$store.commit('changeNumber', parseInt(this.input));
		}
	},
	data() {
		return {
			input: this.$store.state.number
		};
	}
});

app.mount('#app');
