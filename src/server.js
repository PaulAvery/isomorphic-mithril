import Koa from 'koa';
import Views from './server/Views';

class Isomorphic extends Koa {
	constructor() {
		super();
		this.views = new Views();
	}

	mount(frame, defaultRoute, routes) {
		this.views.setDefault(defaultRoute);
		this.views.setRoutes(routes);
		this.views.setFrame(frame);

		this.use(this.views.middleware());
	}

	listen(...args) {
		let server = super.listen(...args);
		this.views.setServer(server);

		return server;
	}
}

export default Isomorphic;
