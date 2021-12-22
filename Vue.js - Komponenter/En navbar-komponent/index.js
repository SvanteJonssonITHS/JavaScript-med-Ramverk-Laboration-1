const app = Vue.createApp({});

app.component('navbar', {
	template: '<nav><a href="#">1</a><a href="#">2</a><a href="#">3</a></nav>'
});

app.mount('#app');
