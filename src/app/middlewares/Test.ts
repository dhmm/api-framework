class Test {
	run(req:any, res:any, next:any) {
		console.log('test middleware');
		next();		
	}
}
module.exports = Test;
