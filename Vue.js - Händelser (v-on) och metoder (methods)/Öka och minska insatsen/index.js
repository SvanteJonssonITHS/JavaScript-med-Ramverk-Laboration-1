Vue.createApp({
	methods: {
		increase() {
			this.value++;
		},
		decrease() {
			this.value--;
		}
	},
	data() {
		return {
			value: 1
		};
	}
}).mount('#app');
