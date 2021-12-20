Vue.createApp({
	data() {
		return {
			buttonText: 'Surprise me!',
			textInput: '',
			randomColor: true,
			result: {
				hex: '',
				rgb: '',
				hsl: '',
				error: ''
			}
		};
	},
	watch: {
		textInput(input) {
			if (input.length > 5) {
				this.buttonText = 'Convert please!';
				this.randomColor = false;
			} else {
				this.buttonText = 'Surprise me!';
				this.randomColor = true;
			}
		}
	},
	methods: {
		async fetchColor(e) {
			e.preventDefault();
			if (this.randomColor) {
				this.result = await (await fetch('https://x-colors.herokuapp.com/api/random')).json();
			} else {
				let conversion = await (await fetch(`https://x-colors.herokuapp.com/api/hex2rgb?value=${this.textInput}`)).json();
				this.result = conversion;
				conversion = await (await fetch(`https://x-colors.herokuapp.com/api/hex2hsl?value=${this.textInput}`)).json();
				this.result.hsl = conversion.hsl;
			}
			console.log(this.result);
		}
	}
}).mount('#app');
