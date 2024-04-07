//File : system/framework/framework.ts
import SystemConstants from "../constants/system";
import ConfigLoader from "../loaders/config-loader";
import ControllersLoader from "../loaders/controllers-loader";
import RoutesLoader from "../loaders/routes-loader";
import Server from "../server/server";
import clog from "../utils/clog/clog";

const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

class Framework
{
	pathsConfig: any = null;
  envConfig: any = null;
	controllers: Object = {};
	server = new Server();	

	async start() {		
		clog.magenta('Starting framework version : '+ SystemConstants.SystemVersion);
    
		//Load paths configurations		
		this.pathsConfig = ConfigLoader.loadPathsConfig();
		clog.yellow(this.pathsConfig);

		//Load Environment configuration
		try {
			let jsonConfig = await ConfigLoader.loadEnvConfig(this.pathsConfig);
			this.envConfig = JSON.parse(jsonConfig);  					
		}
		catch {
			this.envConfig = null;
			clog.red("ERROR : Cannot load application CONFIG file");
		}
		clog.yellow(this.envConfig);

		//Load Controllers
		this.controllers = await ControllersLoader.loadControllers(app, this.envConfig);

		//Load routes
		await RoutesLoader.loadRoutes(app, this.controllers, this.envConfig)				
		
		//Start server
		this.server.start(app, this.envConfig);
	}
}

export default Framework;