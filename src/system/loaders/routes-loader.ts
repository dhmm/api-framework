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
							app.use(require(PathsConfig.AbsRoutesDir+PathsConfig.DS+file));							
						}
					}
			});			
    }
}
export default RoutesLoader;