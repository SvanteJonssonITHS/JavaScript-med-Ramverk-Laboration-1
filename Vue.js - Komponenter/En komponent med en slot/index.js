const app = Vue.createApp({});

app.component('my-button', {
	template: '<button><slot>Klicka här</slot></button>'
});

app.mount('#app');
