# api-framework
My API framework ( version: dev-1.0.0-alpha )

## Supported HTTP Methods
Supported HTTP methods are :
1. GET
2. POST
3. PUT
4. PATCH
5. DELETE
6. OPTIONS
7. HEAD
We can use The HttpMethods class where we have all method definitions

## Defining Routes
We can define our routes in a separated route file for each controller. Let's assume that we have a controller named Test.
We can define our routes in the "routes" folder with name test.ts as exists :
```
module.exports =  [
	[ 'GET' 	 ,	'/test/route' , 'Test' , 'route' ],	
	[ 'POST'	 ,	'/test/route' , 'Test' , 'route' ],	
	[ 'PUT' 	 ,	'/test/route' , 'Test' , 'route' ],	
	[ 'PATCH'  , 	'/test/route' , 'Test' , 'route' ],	
	[ 'DELETE' , 	'/test/route' , 'Test' , 'route' ],	
	[ 'OPTIONS', 	'/test/route' , 'Test' , 'route' ],	
	[ 'HEAD'	 , 	'/test/route' , 'Test' , 'route' ],	
];
```
At each line we have 
1. HTTP Method... ( GET, POST, PATCH, PUT, DELETE, OPTIONS, HEAD )
2. Route
3. Controller's class name
4. The function which we want to run in our controller

## Using Controllers
### Starter code of the controller
The starter code of the controller must be :
```
import Controller from "../../system/core/Controller";

class Test extends Controller {
	constructor(app:any) {
		super(app);
	}
}
module.exports = Test;
```
### Creating route function
Let's add a function in the controller
```
import Controller from "../../system/core/Controller";

class Test extends Controller {
	constructor(app:any) {
		super(app);
	}

	//test/route
	route(req: any, res: any) {		
		res.send("RETURNER STRING...");
	}
}
module.exports = Test;
```
### getMethod()
With this.getMethod() we can get the method fo thre request. ( GET, POST etc.)

### getRoute()
With this.getRoute we will get the route of the request. For example /test/route
