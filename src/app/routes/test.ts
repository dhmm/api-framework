import Test from "../controllers/Test";
let test = new Test();

module.exports =  [
	[ 'GET' , '/test/route1' , (req:any,res:any)=> test.route1(req,res) ],
	[ 'GET' , '/test/route2' , test.route2 ],
];