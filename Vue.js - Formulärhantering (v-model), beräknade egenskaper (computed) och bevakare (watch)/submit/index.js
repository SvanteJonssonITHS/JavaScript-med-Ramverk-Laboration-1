Vue.createApp({
	data() {
		return {
			userName: '',
			message: null
		};
	},
	methods: {
		onSubmit(e) {
			e.preventDefault();
			console.log(e);
			this.message = `Välkommen, ${this.userName}!`;
		}
	}
}).mount('#app');
