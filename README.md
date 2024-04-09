# api-framework
My API framework ( version: **dev-1.0.0-alpha** )

## Supported HTTP Methods
Supported HTTP methods are :
1. GET
2. POST
3. PUT
4. PATCH
5. DELETE
6. OPTIONS
7. HEAD
We can use the static **HttpMethods** class where we have all method definitions like this :
```
HttpMethods.POST
```

## Defining Routes
In the **routes** folder we can define route files with .ts extension. 
Best practice is to use route file for each controller to keep files sizes smaller.
If we have a controller named **Test** we should have a route file named **test.ts**
We can define our routes in this file as exists :
```
module.exports =  [
	[ 'GET'     ,   '/test/route' , 'Test' , 'route' ],	
	[ 'POST'    ,   '/test/route' , 'Test' , 'route' ],	
	[ 'PUT'     ,   '/test/route' , 'Test' , 'route' ],	
	[ 'PATCH'   ,   '/test/route' , 'Test' , 'route' ],	
	[ 'DELETE'  ,   '/test/route' , 'Test' , 'route' ],	
	[ 'OPTIONS' ,   '/test/route' , 'Test' , 'route' ],	
	[ 'HEAD'    ,   '/test/route' , 'Test' , 'route' ],	
];
```
Each line have a single route. The parameters of the route are:

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
We can define a route functin in our controller liek this.
```
import Controller from "../../system/core/Controller";

class Test extends Controller {
    constructor(app:any) {
	    super(app);
	}

	//Our function is here for route -> test/route
	route(req: any, res: any) {		
		res.send("RETURNER STRING...");
	}
}
module.exports = Test;
```
## Controller methods
### getMethod()
We get the request's method. ( GET, POST, PATCH etc.)

### getRoute()
With this.getRoute we will get the route of the request. For example /test/route

### getGetVar(variableName:string)
We get the query string (GET) params from the URL 
For example if we have domain.com?var1=value1&var2=value2 etc...
WE can
```
this.getGetVar('var1');
```

### getPostVar(variableName:string)
With this.getPostVar(varName) we can get posted variables.

## Request
In our route functions we can call the method **getRequest** to get the Request class

### getRequest(req:any)
```
let request = this.getRequest(req)
```
### getParam(paramName:string)
We can get the parameters from the url
```
this.getRequest().getParam('age')
```