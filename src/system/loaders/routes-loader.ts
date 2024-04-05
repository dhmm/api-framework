import PathsConfig from "../../app/config/paths";
import clog from "../utils/clog/clog";

class RoutesLoader
{
    static async loadRoutes(app:any | null, envConfig:any) {
			if(envConfig.debug) {
				clog.blue('BEGIN: RoutesLoader->loadRoutes');
			}

			let fs = require('fs');
			let path = require('path');

			fs.readdirSync(PathsConfig.RoutesDir).forEach( (file:any) => {            
			    let route = PathsConfig.RoutesDir+PathsConfig.DS+file;
					if(envConfig.debug) {
						if(path.extname(route) == '.ts') {
							clog.cyan('==> NEXT ROUTE :'+route);
						}
					}
					if(fs.existsSync(route)){
						if(path.extname(route) == '.ts') {
							if(envConfig.debug) {								
									clog.cyan('>>> LOADING ROUTE :'+route);								
							}
							const routes =  require(PathsConfig.AbsRoutesDir+PathsConfig.DS+file);	
							if(routes) {
								routes.forEach( (routeDefinition:any) => {
									let httpMethodType = routeDefinition[0];
									let routeURL = routeDefinition[1];
									let funcToRun = routeDefinition[2];
									switch(httpMethodType.toLowerCase())
									{
										case 'get' :
											app.get(routeURL, funcToRun);
											break;
										case 'post' :
											app.post(routeURL, funcToRun);
											break;
										case 'put':
											app.put(routeURL, funcToRun);
											break;
										case 'patch':
											app.patch(routeURL, funcToRun);
											break;
										case 'delete':
											app.delete(routeURL, funcToRun);
											break;
										case 'options':
											app.options(routeURL, funcToRun);
											break;
										case 'head':
											app.head(routeURL, funcToRun);
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