//File : system/loaders/routes-loader.ts
import PathsConfig from "../../app/config/paths";
import HttpMethods from "../http/HttpMethods";
import clog from "../utils/clog/clog";

class RoutesLoader {
	static async loadRoutes(app: any | null, controllers: any, middlewares: any, envConfig: any) {

		if (envConfig.debug) {
			clog.blue('BEGIN: RoutesLoader->loadRoutes');
		}

		let fs = require('fs');
		let path = require('path');

		fs.readdirSync(PathsConfig.RoutesDir).forEach((file: any) => {
			let route = PathsConfig.RoutesDir + PathsConfig.DS + file;
			if (envConfig.debug) {
				if (path.extname(route) == '.ts') {
					clog.cyan('==> NEXT ROUTE :' + route);
				}
			}
			if (fs.existsSync(route)) {
				if (path.extname(route) == '.ts') {
					if (envConfig.debug) {
						clog.cyan('>>> LOADING ROUTE :' + route);
					}
					const routes = require(PathsConfig.AbsRoutesDir + PathsConfig.DS + file);

					if (envConfig.debug) {
						clog.magenta("Loaded routes are :")
						clog.magenta(routes);
					}

					if (routes) {
						routes.forEach((routeDefinition: any) => {
							let httpMethodType = routeDefinition[0];
							let route = routeDefinition[1];
							let controller = routeDefinition[2].toLowerCase();
							let funcToRun = routeDefinition[3];
							let middlewaresToRun = routeDefinition[4];

							if (envConfig.debug) {
								clog.red('Binding route ' + route + ' to controller ' + controller + '.' + funcToRun);
							}

							//Load middlewares to functions array to be able to use as middleware on a route
							let middlewareFuncs: any = [];
							if (middlewaresToRun != undefined && middlewaresToRun != null) {
								if (envConfig.debug) {
									clog.green('Route ' + route + ' has the following middlewares');
								}
								middlewaresToRun.forEach((middleware: any) => {
									middlewareFuncs.push(middlewares[middleware]);

									if (envConfig.debug) {
										clog.green(middleware);
									}
								});
							}


							switch (httpMethodType.toLowerCase()) {
								case HttpMethods.GET:
									if (middlewaresToRun != undefined && middlewaresToRun != null) {
										app.get(route, middlewareFuncs, (req: any, res: any) => {
											controllers[controller][funcToRun](req, res);
										});
									}
									else {
										app.get(route, (req: any, res: any) => {
											controllers[controller][funcToRun](req, res);
										});
									}
									break;
								case HttpMethods.POST:
									if (middlewaresToRun != undefined && middlewaresToRun != null) {
										app.post(route, middlewareFuncs, (req: any, res: any) => {
											controllers[controller][funcToRun](req, res)
										});
									} else {
										app.post(route, (req: any, res: any) => {
											controllers[controller][funcToRun](req, res)
										});
									}
									break;
								case HttpMethods.PUT:
									if (middlewaresToRun != undefined && middlewaresToRun != null) {
										app.put(route, middlewareFuncs, (req: any, res: any) => {
											controllers[controller][funcToRun](req, res)
										});
									} else {
										app.put(route, (req: any, res: any) => {
											controllers[controller][funcToRun](req, res)
										});
									}
									break;
								case HttpMethods.PATCH:
									if (middlewaresToRun != undefined && middlewaresToRun != null) {
										app.patch(route, middlewareFuncs, (req: any, res: any) => {
											controllers[controller][funcToRun](req, res)
										});
									} else {
										app.patch(route, (req: any, res: any) => {
											controllers[controller][funcToRun](req, res)
										});
									}
									break;
								case HttpMethods.DELETE:
									if (middlewaresToRun != undefined && middlewaresToRun != null) {
										app.delete(route, middlewareFuncs, (req: any, res: any) => {
											controllers[controller][funcToRun](req, res)
										});
									} else {
										app.delete(route, (req: any, res: any) => {
											controllers[controller][funcToRun](req, res)
										});
									}
									break;
								case HttpMethods.OPTIONS:
									if (middlewaresToRun != undefined && middlewaresToRun != null) {
										app.options(route, middlewareFuncs, (req: any, res: any) => {
											controllers[controller][funcToRun](req, res)
										});
									} else {
										app.options(route, (req: any, res: any) => {
											controllers[controller][funcToRun](req, res)
										});
									}
									break;
								case HttpMethods.HEAD:
									if (middlewaresToRun != undefined && middlewaresToRun != null) {
										app.head(route, middlewareFuncs, (req: any, res: any) => {
											controllers[controller][funcToRun](req, res)
										});
									} else {
										app.head(route, (req: any, res: any) => {
											controllers[controller][funcToRun](req, res)
										});
									}
									break;

							}
						});
					}
				}
			}
		});
	}
}
export default RoutesLoader;