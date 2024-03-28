import Test from "../controllers/Test";
let test = new Test();

module.exports =  [
	[ 'GET' , '/test/route1' , test.route1 ],
	[ 'GET' , '/test/route2' , test.route2 ],
];