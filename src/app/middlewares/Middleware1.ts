import Request from "../../system/http/Request";
import { ForbiddenResponse } from "../../system/http/responses/Responses";

class Middleware1
{
	run(req:any, res:any, next:any) {
		console.log('middleware 1 middleware');
		let request = new Request(req);
		if(request.getParam('age') >= 18 ) {
			next();
		} else {
			return new ForbiddenResponse(res,null,"You are too young");
		}
	}
}

module.exports = Middleware1;