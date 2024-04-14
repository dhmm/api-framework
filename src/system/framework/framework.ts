//File : system/framework/framework.ts
import PathsConfig from "../../app/config/paths";
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
	controllers: Object = {};	
	middlewares: Object = {};
	server = new Server();	

	async start() {		
		clog.magenta('Starting framework version : '+ SystemConstants.SystemVersion);
    
		//Log Paths config values
		PathsConfig.LogPaths();

		//Load Environment configuration
		await EnvConfig.loadEnvConfig();		
		clog.yellow(EnvConfig.config);		

		//Load Controllers
		this.controllers = await ControllersLoader.loadControllers(app);

		//Load middleware
		this.middlewares = await MiddlewaresLoader.loadMiddlewares();		

		//Load routes
		await RoutesLoader.loadRoutes(app, this.controllers, this.middlewares)				
		
		//Start server
		this.server.start(app);
	}
}

export default Framework;