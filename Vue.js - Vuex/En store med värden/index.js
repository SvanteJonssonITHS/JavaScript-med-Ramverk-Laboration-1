const app = Vue.createApp({});

const state = {
	string: 'String',
	number: 0,
	boolean: true
};

const store = Vuex.createStore({ state });

app.use(store);

app.mount('#app');
