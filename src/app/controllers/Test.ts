import Controller from "../../system/core/Controller";

class Test extends Controller
{
		constructor() {
			super();
		}
    //test/route1
    route1(req:any, res:any) {			
			console.log('method = '+this.method);	

      res.send("test/route1 -> ");
    }
    //test/route2
    route2(req:any, res:any) {
			res.send("test/route2");
    }
}
export default Test;