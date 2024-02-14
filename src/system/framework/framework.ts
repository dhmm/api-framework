import SystemConstants from "../constants/system";
import Server from "../server/server";
import clog from "../utils/clog/clog";

class Framework
{
	server = new Server();
	start() {		
		clog.blue('Starting framework version : '+ SystemConstants.SystemVersion);		
		this.server.start();
	}
}

export default Framework;