app.component('controls', {
	data() {
		return {
			input: null
		};
	},
	methods: {
		onClick() {
			this.$emit('start-game', this.input);
		}
	},
	emits: ['start-game'],
	template: `
	<div>
		<input type="text" v-model="input"/>
		<input type="button" value="Start" @click="onClick"/>
	</div>
	`
});
