import SystemConstants from "../constants/system";
import ConfigLoader from "../loaders/config-loader";
import Server from "../server/server";
import clog from "../utils/clog/clog";

class Framework
{
	pathsConfig: any = null;
    envConfig: any = null;
	server = new Server();
	async start() {		
		clog.blue('Starting framework version : '+ SystemConstants.SystemVersion);		
		this.pathsConfig = ConfigLoader.loadPathsConfig();
		clog.yellow(this.pathsConfig);
        try {
            let jsonConfig = await ConfigLoader.loadEnvConfig(this.pathsConfig);
            this.envConfig = JSON.parse(jsonConfig);            
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