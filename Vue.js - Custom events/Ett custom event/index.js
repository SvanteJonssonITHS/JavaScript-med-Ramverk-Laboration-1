app.component('controls', {
	methods: {
		onClick() {
			this.$emit('start-game');
		}
	},
	template: '<input type="button" value="Start" @click="onClick"/>'
});
