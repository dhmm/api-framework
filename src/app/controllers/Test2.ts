class Test2
{
    //test/route1
    route1(req:any, res:any) {
        res.send("test2/route1");
    }
    //test/route2
    route2(req:any, res:any) {
			res.send("test2/route2");
    }
}
export default Test2;