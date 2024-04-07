//File : system/loaders/controllers-loader.ts
import PathsConfig from "../../app/config/paths";
import clog from "../utils/clog/clog";
const path = require('path');

class ControllersLoader
{
	static async loadControllers(app:any, envConfig: any): Promise<any>
	{
		if(envConfig.debug) {
			clog.blue('BEGIN: ControllersLoader->loadControllers');
		}
		//Controllers object to return
		let controllers: {[type:string]: Object} = {} ;

		const fs = require('fs');
		const files:Array<String> = fs.readdirSync(PathsConfig.ControllersDir);	

		files.forEach( (file) => {
			let extension  = file.split('.').pop();
			if(extension == 'ts')
			{
				let fileName = path.parse(file).name;
				let key = path.parse(file).name.toLowerCase();			
				const controllerClass = require(PathsConfig.AbsControllersDir+'/'+fileName+'.ts');
				controllers[key] = new controllerClass(app);
			}
		});
		if(envConfig.debug) {
			clog.yellow(controllers);
		}
		return controllers;
	}
}

export default ControllersLoader;