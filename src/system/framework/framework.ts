import SystemConstants from "../constants/system";
import ConfigLoader from "../loaders/config-loader";
import Server from "../server/server";
import clog from "../utils/clog/clog";

class Framework
{
	appConfig: any = null;
	server = new Server();
	start() {		
		clog.blue('Starting framework version : '+ SystemConstants.SystemVersion);		
		this.appConfig = ConfigLoader.loadPathsConfig();
		clog.yellow(this.appConfig);
		this.server.start();
	}
}

export default Framework;