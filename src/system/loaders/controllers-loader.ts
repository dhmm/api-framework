//File : system/loaders/controllers-loader.ts

import clog from "../utils/clog/clog";

class ControllersLoader
{
	static async loadControllers(pathsConfig: any, envConfig: any): Promise<any>
	{
		if(envConfig.debug) {
			clog.blue('BEGIN: ControllersLoader->loadControllers');
		}
		const controllers = new Array<String>() ;

		const fs = require('fs');
		const files:Array<String> = fs.readdirSync(pathsConfig.controllersDir);	

		files.forEach( (file) => {
			let extension  = file.split('.').pop();
			if(extension == 'ts')
			{
				let fileName = file.split('.').shift();
				controllers.push(pathsConfig.controllersDir+'/'+fileName+'.ts');
			}
		});
		if(envConfig.debug) {
			clog.yellow(controllers);
		}
		return controllers;
	}
}

export default ControllersLoader;