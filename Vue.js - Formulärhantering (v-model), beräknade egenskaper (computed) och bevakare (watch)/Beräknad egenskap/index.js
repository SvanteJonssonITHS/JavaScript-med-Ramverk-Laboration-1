Vue.createApp({
	data() {
		return {
			s: ''
		};
	},
	computed: {
		n() {
			return this.s.length;
		}
	}
}).mount('#app');
