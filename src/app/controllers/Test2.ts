import Controller from "../../system/core/Controller";

class Test2 extends Controller {
	constructor(app:any) {
		super(app);
	}
	//test/route1
	route1(req: any, res: any) {
		res.send("test2/route1 -> with method: "+this.getMethod()+" and route: "+this.getRoute());
	}
	//test/route2
	route2(req: any, res: any) {
		res.send("test2/route2 -> with method: "+this.getMethod()+" and route: "+this.getRoute());
	}
}
module.exports = Test2;