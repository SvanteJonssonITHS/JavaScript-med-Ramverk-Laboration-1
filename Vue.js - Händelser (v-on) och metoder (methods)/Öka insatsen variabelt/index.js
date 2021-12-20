Vue.createApp({
	methods: {
		increase(amount) {
			this.value += amount;
		}
	},
	data() {
		return {
			value: 1
		};
	}
}).mount('#app');
