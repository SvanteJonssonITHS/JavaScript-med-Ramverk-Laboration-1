const app = Vue.createApp({});

app.component('dice', {
	data() {
		return { result: 0 };
	},
	methods: {
		randomNumber() {
			this.result = Math.floor(Math.random() * 6) + 1;
		}
	},
	created() {
		this.randomNumber();
	},
	template: '<input type="button" :value="result" @click="randomNumber"/>'
});

app.mount('#app');
