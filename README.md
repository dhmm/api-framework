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

### getRequest(req:any)
Get the request information
```
let request = this.getRequest(req)
```

### getHeaderParam(headerParam: string) 
We get header paramtere with this function
```
this.getHeaderParam('a_token');
```

## Request
In our route functions we can call the method **getRequest** to get the Request class
The **Request** class has the following params that we can access

1. **baseUrl:string** - The base url
2. **ip:string** - The IP address of the request
3. **route:string** The route lile test/route1
4. **method:string** - The HTTP request method
5. **isSecure:boolean** - Http or Https
6. **params:any** - The the params of the request
7. **headers:any** - The request headers in array

## Request methods

### getParam(paramName:string)
We can get the parameters from the url
```
this.getRequest().getParam('age')
```
### 	getHeader(headerParam:string)
We can get header params with this function
```
this.getRequest().getHeader('a_token');
```

## Response
We can return Responses from our route function in our controller
The main class is the **Response** class. The definition of the class has the following properties :
1. **status:number** - The status code of the response
1. **data: object|null** - The data that we wan to send as response
1. **error: string|null** - If we want to send 1 error message we use this
1. **errors: object|null** - If we want to sned multiple errors, like field validations we can use this

### Standart Response 
We can use a standart response (status = 200 ) like this :
```
route1(req: any, res: any) {              
    return new Response(res, statusCode, data, error, errors, headers);
}
```
> **IMPORTANT !!!** It's important to import the framework's Response class because it won't terminate the request
> *import Response from "../../system/http/responses/Response";*

### Sending Header Params in Response
We can define header params in an array like this
```
let headers: any = [
	["h1", "v1"],
	["h2", "v2"],
];
```
Then in any response we can add this array into parameters. For example
```
let headers: any = [
	["h1", "v1"],
	["h2", "v2"],
];

return new OKResponse(res, headerVar1, "", null, headers);
```

### Supported response types
Except the standart Response system support the following responses 
1. OKResponse (200),
```
return new OKResponse(res:any, data = null, error = "", errors = null, headers=null)
```
2. CreatedResponse (201),
```
return new CreatedResponse(res:any, data = null, error = "", errors = null, headers=null)
``` 
3. AcceptedResponse (202), 
```
return new AcceptedResponse(res:any, data = null, error = "", errors = null, headers=null)
```
4. NoContentResponse (204),
```
return new NoContentResponse(res:any, data = null, error = "", errors = null, headers=null)
```
5. BadRequest (400),
```
return new BadRequest(res:any, data = null, error = "", errors = null, headers=null)
```
6. UnauthorizedResponse (401),
```
return new UnauthorizedResponse(res:any, data = null, error = "", errors = null, headers=null)
```
7. ForbiddenResponse (403),
```
return new ForbiddenResponse(res:any, data = null, error = "", errors = null, headers=null)
```
8. NotFoundResponse (404)
```
return new NotFoundResponse(res:any, error = "Not found", headers=null)
```

