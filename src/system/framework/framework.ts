import SystemConstants from "../constants/system";
import Server from "../server/server";
import ConsoleLogger from "../utils/console-logger/consoleLogger";

class Framework
{
	consoleLogger = new ConsoleLogger()
	server = new Server();
	start() {		
		this.consoleLogger.LogBlue('Starting framework version : '+ SystemConstants.SystemVersion);		
		this.server.start();
	}
}

export default Framework;