const fetch = require('node-fetch');

fetchCityAmount = async () => {
	const response = await fetch('https://avancera.app/cities/');
	const data = await response.json();

	console.log(data.length);
};

fetchCityAmount();
