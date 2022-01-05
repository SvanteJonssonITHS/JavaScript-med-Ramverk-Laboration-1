const app = Vue.createApp({});

const Page = {
	template: '<main>Page {{$route.params.page}}</main>'
};

const routes = [
	{
		component: Page,
		path: '/pages/:page'
	}
];

const router = VueRouter.createRouter({
	history: VueRouter.createWebHashHistory(),
	routes
});

app.use(router);

app.mount('#app');
