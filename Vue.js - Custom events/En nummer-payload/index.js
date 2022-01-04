app.component('controls', {
	methods: {
		onClick() {
			this.$emit('start-game', 100);
		}
	},
	template: '<input type="button" value="Start" @click="onClick"/>'
});
