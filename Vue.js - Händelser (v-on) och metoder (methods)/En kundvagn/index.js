Vue.createApp({
	computed: {
		total() {
			return Object.values(this.products).reduce((accumulator, value) => accumulator + value.price * value.quantity, 0);
		}
	},
	data() {
		return {
			products: {
				'dd3ce0a3-1d30-4e3e-bcec-7095590019d9': {
					name: 'Jacket',
					price: 200,
					quantity: 0
				},
				'faf68d1f-8f3e-4668-891c-56118cc330f4': {
					name: 'Pants',
					price: 100,
					quantity: 0
				},
				'dd2bb41e-7f0a-4cb8-884b-588f9457dd54': {
					name: 'Shoes',
					price: 100,
					quantity: 0
				}
			}
		};
	},
	methods: {
		addToCart(productId) {
			this.products[productId].quantity++;
		}
	}
}).mount('#app');
