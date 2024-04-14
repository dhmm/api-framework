import PathsConfig from "../../app/config/paths";
import EnvConfig from "../config/env-config";
import clog from "../utils/clog/clog";
const path = require('path');

class MiddlewaresLoader
{
	static async loadMiddlewares(): Promise<any> {
		if(EnvConfig.config.debug) {
			clog.blue('BEGIN: MiddlewaresLoader->loadMiddlewares');
		}
		//Middlewares object to return
		let middlewares: {[type:string]: Object} = {} ;

		const fs = require('fs');
		const files:Array<String> = fs.readdirSync(PathsConfig.MiddlewaresDir);	

		files.forEach( (file) => {
			let extension  = file.split('.').pop();
			if(extension == 'ts')
			{
				let fileName = path.parse(file).name;
				let key = path.parse(file).name;		
				const middlewareClass = require(PathsConfig.AbsMiddlewaresDir+'/'+fileName+'.ts');
				middlewares[key] = new middlewareClass().run;
			}
		});
		return middlewares;
	}
}

export default MiddlewaresLoader;