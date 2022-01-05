const app = Vue.createApp({});

const Page = {
	template: '<main>Page {{$route.params.page}}</main>'
};

const Page2 = {
	template: '<main>{{$route.params.one + $route.params.two}}</main>'
};

const routes = [
	{
		component: Page,
		path: '/pages/:page'
	},
	{
		component: Page2,
		path: '/:one/:two'
	}
];

const router = VueRouter.createRouter({
	history: VueRouter.createWebHashHistory(),
	routes
});

app.use(router);

app.mount('#app');
