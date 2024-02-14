import clog from "../utils/clog/clog";

const express = require('express');
const app = express();


class Server
{
	port = 3000
	start() {
		clog.magenta('Server starting at port '+this.port);
		app.listen(this.port)
	}
}

export default Server;