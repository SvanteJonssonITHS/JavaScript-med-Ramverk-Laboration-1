const axios = require('axios').default;

getCityAmount = async () => {
	const response = await axios.get('https://avancera.app/cities/');
	const result = response.data;
	console.log(result.length);
};

getCityAmount();
