import Controller from "../../system/core/Controller";
import HttpMethods from "../../system/http/HttpMethods";

class Test extends Controller {
	constructor(app:any) {
		super(app);
	}

	//test/route1
	route1(req: any, res: any) {		
		res.send("test/route1 -> with method: "+this.getMethod()+" and route: "+this.getRoute());
	}
	//test/route2
	route2(req: any, res: any) {
		res.send("test/route2 -> with method: "+this.getMethod()+" and route: "+this.getRoute());
	}
	
	//ALL METHODS
	route(req:any, res:any) {
		if(this.getMethod() != HttpMethods.OPTIONS && this.getMethod() != HttpMethods.HEAD) {
			console.log(this.getGetVar('var1'));
			res.send("test/route -> with method: "+this.getMethod()+" and route: "+this.getRoute());
		} else {
			console.log('*********************************');
			console.log(this.getMethod());
			console.log('*********************************');
			res.end();
		}
	}
}
module.exports = Test;
