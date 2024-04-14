//File : system/server/server.ts
import EnvConfig from "../config/env-config";
import clog from "../utils/clog/clog";

class Server {
	app: any | null;
	port: number;

	constructor() {
		this.app = null;
		this.port = 3000;
	}
	start(app: any) {
		if (EnvConfig.config.port !== null) {
			this.port = EnvConfig.config.port;
		}
		this.app = app;
		clog.magenta('Server starting at port ' + this.port);
		this.app.listen(this.port)
	}
}

export default Server;