Vue.createApp({
	data() {
		return { s: '' };
	},
	watch: {
		s(input) {
			console.log(input);
		}
	}
}).mount('#app');
