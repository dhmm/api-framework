// import Test from "../controllers/Test"

// module.exports = (app) => { 
//     let testController = new Test();
//     app.get('/test/route1' , testController.route1);
// }


module.exports=function(app){
    app.get('/',function(req,res){
       res.send('/ called successfully...');
    });
  }