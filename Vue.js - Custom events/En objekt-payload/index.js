app.component('controls', {
	data() {
		return {
			input: null
		};
	},
	methods: {
		onClick() {
			this.$emit('start-game', {
				userName: this.input,
				credits: 100
			});
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
