//File : system/core/controller.ts
import Request from "../http/Request";

class Controller {
	#app: any;
	#req: any;
	#res: any;
	#route: string = "";
	#method: string = "";

	constructor(app: any) {
		this.#app = app;
		this.#app.use((req: any, res: any, next: any) => {
			this.#req = req;
			this.#res = res;
			this.#route = req.baseUrl + req.path;
			this.#method = req.method.toLowerCase();
			next();
		});
	}
	getRequest(req: any) {
		return new Request(req);
	}
	getMethod(): string {
		return this.#method;
	}
	getRoute(): string {
		return this.#route;
	}
	getGetVar(variableName: string) {
		return this.#req.query[variableName];
	}
	getPostVar(variableName: string) {
		return this.#req.body[variableName];
	}
	getHeaderParam(headerParam: string) {
		return this.#req.headers[headerParam];
	}
	getCookie(cookieKey:string)
	{
		return this.#req.cookies[cookieKey];
	}
}

export default Controller;