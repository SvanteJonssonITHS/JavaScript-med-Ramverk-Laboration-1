Vue.createApp({
	data() {
		return {
			userName: ''
		};
	},
	methods: {
		onClick() {
			console.log(this.userName);
		}
	}
}).mount('#app');
