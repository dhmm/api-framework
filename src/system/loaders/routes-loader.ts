//File : system/loaders/routes-loader.ts
import PathsConfig from "../../app/config/paths";
import HttpMethods from "../http/HttpMethods";
import clog from "../utils/clog/clog";

class RoutesLoader {
	static async loadRoutes(app: any | null, controllers: any, envConfig: any) {

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

							if (envConfig.debug) {
								clog.red('Binding route '+route+' to controller '+controller+'.'+funcToRun);
							}					

							switch (httpMethodType.toLowerCase()) {
								case HttpMethods.GET:
									app.get(route, (req: any, res: any) => {
										controllers[controller][funcToRun](req, res)
									});
									break;
								case HttpMethods.POST:
									app.post(route, (req: any, res: any) => {
										controllers[controller][funcToRun](req, res)
									});
									break;
								case HttpMethods.PUT:
									app.put(route, (req: any, res: any) => {
										controllers[controller][funcToRun](req, res)
									});							
									break;
								case HttpMethods.PATCH:
									app.patch(route, (req: any, res: any) => {
										controllers[controller][funcToRun](req, res)
									});									
									break;
								case HttpMethods.DELETE:
									app.delete(route, (req: any, res: any) => {
										controllers[controller][funcToRun](req, res)
									});									
									break;
								case HttpMethods.OPTIONS:
									app.options(route, (req: any, res: any) => {
										controllers[controller][funcToRun](req, res)
									});									
									break;
								case HttpMethods.HEAD:
									app.head(route, (req: any, res: any) => {
										controllers[controller][funcToRun](req, res)
									});									
									break;

							}
						});
					}
					// console.log(funcs[0]);
					//wotking : app.use(require(PathsConfig.AbsRoutesDir+PathsConfig.DS+file));		
				}
			}
		});
	}
}
export default RoutesLoader;