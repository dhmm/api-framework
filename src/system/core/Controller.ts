//File : system/core/controller.ts
import HttpMethods from "../http/HttpMethods";

class Controller
{
	#app:any;
	#req:any;
	#res:any;

	#route:string = "";
	#method:string = "";

	constructor(app:any) {
		this.#app = app;
		
		this.#app.use( (req:any,res:any, next:any) => {
			this.#req = req;
			this.#res = res;			
			this.#route = req.baseUrl + req.path;
			this.#method = req.method.toLowerCase();			
			next();
		});
	}

	getMethod():string {
		return this.#method;
	}
	getRoute():string {
		return this.#route;
	}
	getGetVar(variableName:string):string {
		let value="";
		switch(this.#method)
		{
			case HttpMethods.GET:
				value = this.#req.query[variableName];
				break;
			case HttpMethods.POST:
				value = this.#req.body[variableName];
				break;
		}		
		return value;
	}
}

export default Controller;