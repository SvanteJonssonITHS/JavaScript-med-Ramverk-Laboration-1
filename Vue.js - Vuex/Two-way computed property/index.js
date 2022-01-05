const app = Vue.createApp({});

const state = {
	string: 'String'
};

const mutations = {
	updateString(state, amount) {
		state.string = amount;
	}
};

const store = Vuex.createStore({ state, mutations, strict: true });

app.use(store);

app.component('some-component', {
	computed: {
		message: {
			get() {
				return this.$store.state.string;
			},
			set(value) {
				this.$store.commit('updateString', value);
			}
		}
	},
	template: '<h1>{{string}}</h1><textarea v-model="string"></textarea>',
	data() {
		return {
			string: ''
		};
	},
	created() {
		this.string = this.message;
	},
	watch: {
		string() {
			this.$store.commit('updateString', this.string);
		},
		message() {
			this.string = this.message;
		}
	}
});

app.mount('#app');
