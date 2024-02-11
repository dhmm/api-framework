import Server from "../server/server";
import ConsoleLogger from "./utils/console-logger/consoleLogger";

class Framework
{
	version = '1.0.0-alpha'
	consoleLogger = new ConsoleLogger()
	server = new Server();
	start() {		
		this.consoleLogger.LogBlue('Starting framework version : '+ this.version);		
		this.server.start();
	}
}

export default Framework;