Vue.createApp({
	methods: {
		increase() {
			this.value++;
		}
	},
	data() {
		return {
			value: 1
		};
	}
}).mount('#app');
