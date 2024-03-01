//File : system/framework/framework.ts
import SystemConstants from "../constants/system";
import ConfigLoader from "../loaders/config-loader";
import ControllersLoader from "../loaders/controllers-loader";
import Server from "../server/server";
import clog from "../utils/clog/clog";

class Framework
{
	pathsConfig: any = null;
  envConfig: any = null;
	server = new Server();
	controllers:any = null;

	async start() {		
		clog.magenta('Starting framework version : '+ SystemConstants.SystemVersion);		
		this.pathsConfig = ConfigLoader.loadPathsConfig();
		clog.yellow(this.pathsConfig);
    try {
      let jsonConfig = await ConfigLoader.loadEnvConfig(this.pathsConfig);
      this.envConfig = JSON.parse(jsonConfig);  
			
			this.controllers = await ControllersLoader.loadControllers(this.pathsConfig, this.envConfig);
    }
    catch {
      this.envConfig = null;
      clog.red("ERROR : Cannot load application CONFIG file");
    }
		clog.yellow(this.envConfig);

		this.server.start(this.envConfig);
	}
}

export default Framework;