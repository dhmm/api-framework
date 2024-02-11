import ConsoleLogger from "../framework/utils/console-logger/consoleLogger";

const express = require('express');
const app = express();


class Server
{
	consoleLogger = new ConsoleLogger()
	port = 3000
	start() {
		this.consoleLogger.LogMagenta('Server starting at port '+this.port);
		app.listen(this.port)
	}
}

export default Server;