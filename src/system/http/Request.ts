class Request
{
    #app:any;
    baseUrl:string;
    ip:string;
    route:string;
    method:string;
    isSecure:boolean;
    params:any;
		headers:any;

    constructor(req:any)
    {        
        this.#app = req.app;
        this.baseUrl = req.baseUrl;
        this.ip = req.ip;
        this.route = req.baseUrl + req.path;
        this.method = req.method;
        this.isSecure = req.secure;
        this.params = req.params;
				this.headers = req.headers;
    }

    getParam(paramName:string)
    {
        return this.params[paramName];
    }
		getHeader(headerParam:string)
		{
			return this.headers[headerParam];
		}
}
export default Request;