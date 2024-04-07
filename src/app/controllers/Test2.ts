import Controller from "../../system/core/Controller";

class Test2 extends Controller {
	constructor() {
		super();
	}
	//test/route1
	route1(req: any, res: any) {
		res.send("test2/route1");
	}
	//test/route2
	route2(req: any, res: any) {
		res.send("test2/route2");
	}
}
module.exports = Test2;