import SystemConstants from "../constants/system";
import ConfigLoader from "../loaders/config-loader";
import Server from "../server/server";
import clog from "../utils/clog/clog";

class Framework
{
	pathsConfig: any = null;
    envConfig: any = null;
	server = new Server();
	start() {		
		clog.blue('Starting framework version : '+ SystemConstants.SystemVersion);		
		this.pathsConfig = ConfigLoader.loadPathsConfig();
		clog.yellow(this.pathsConfig);
        this.envConfig = ConfigLoader.loadEnvConfig(this.pathsConfig);
		clog.yellow(this.envConfig);

		this.server.start();
	}
}

export default Framework;