import Controller from "../../system/core/Controller";

class Test extends Controller {
	test1var : string;

	constructor() {
		super();
		this.test1var = "test1var value";
	}
	//test/route1
	route1(req: any, res: any) {
		console.log(this.method);
		res.send("test/route1 -> ");
	}
	//test/route2
	route2(req: any, res: any) {
		res.send("test/route2");
	}
	//POST test/route3
	route3(req:any, res:any) {
		res.send("POST: test/route3")
	}
}
module.exports = Test;
export default Test;
