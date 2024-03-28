import Test2 from "../controllers/Test2";
let test2 = new Test2();

module.exports =  [
	[ 'GET' , '/test2/route1' , test2.route1 ],
	[ 'GET' , '/test2/route2' , test2.route2 ],
];