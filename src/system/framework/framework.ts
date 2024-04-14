//File : system/framework/framework.ts
import EnvConfig from "../config/env-config";
import SystemConstants from "../constants/system";
import ConfigLoader from "../loaders/config-loader";
import ControllersLoader from "../loaders/controllers-loader";
import MiddlewaresLoader from "../loaders/middlewares-loader";
import RoutesLoader from "../loaders/routes-loader";
import Server from "../server/server";
import clog from "../utils/clog/clog";

const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
class Framework
{
	pathsConfig: any = null;
  envConfig: any = null;
	controllers: Object = {};	
	middlewares: Object = {};
	server = new Server();	

	async start() {		
		clog.magenta('Starting framework version : '+ SystemConstants.SystemVersion);
    
		//Load paths configurations		
		this.pathsConfig = ConfigLoader.loadPathsConfig();
		clog.yellow(this.pathsConfig);

		//Load Environment configuration
		await EnvConfig.loadEnvConfig();
		this.envConfig = EnvConfig.config;
		clog.yellow(this.envConfig);		

		//Load Controllers
		this.controllers = await ControllersLoader.loadControllers(app, this.envConfig);

		//Load middleware
		this.middlewares = await MiddlewaresLoader.loadMiddlewares(this.envConfig);		

		//Load routes
		await RoutesLoader.loadRoutes(app, this.controllers, this.middlewares, this.envConfig)				
		
		//Start server
		this.server.start(app, this.envConfig);
	}
}

export default Framework;