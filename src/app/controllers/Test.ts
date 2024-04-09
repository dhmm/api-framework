import Controller from "../../system/core/Controller";
import HttpMethods from "../../system/http/HttpMethods";
import Response from "../../system/http/responses/Response";
import { NotFoundResponse, OKResponse } from "../../system/http/responses/Responses";

class Test extends Controller {
	constructor(app: any) {
		super(app);
	}

	//test/route1
	route1(req: any, res: any) {
		let request = this.getRequest(req);
		console.log(request);
		console.log(request.getParam('age'));
		console.log(this.getGetVar('getvar'));
		console.log(this.getPostVar('var1'));


		//res.send("test/route1 -> with method: "+this.getMethod()+" and route: "+this.getRoute());
		let headerVar1 = this.getHeaderParam('headervar1');
		console.log(headerVar1);
		let headerVar1_2 = this.getRequest(req).getHeader('headervar1');
		console.log(headerVar1_2);
		let headers: any = [
			["h1", "v1"],
			["h2", "v2"],
		];

		console.log('OUR COOKIE : '+this.getRequest(req).getCookie('CookieKey1'));	
		console.log('ALl COOKIES');
		console.log(this.getRequest(req).cookies);
		
		
		let cookies: any = 
		[
			['cookie-1' , 'cookie 1 value'],
			['cookie-2' , 'cookie 2 value'],
		]
		return new OKResponse(res, headerVar1, "", null, headers, cookies);
	}
	//test/route2
	route2(req: any, res: any) {
		res.send("test/route2 -> with method: " + this.getMethod() + " and route: " + this.getRoute());
	}

	//ALL METHODS
	route(req: any, res: any) {
		if (this.getMethod() != HttpMethods.OPTIONS && this.getMethod() != HttpMethods.HEAD) {
			console.log(this.getGetVar('var1'));
			res.send("test/route -> with method: " + this.getMethod() + " and route: " + this.getRoute());
		} else {
			console.log('*********************************');
			console.log(this.getMethod());
			console.log('*********************************');
			res.end();
		}
	}
}
module.exports = Test;
