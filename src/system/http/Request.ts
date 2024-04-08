class Request
{
    #app:any;
    baseUrl:string;
    ip:string;
    route:string;
    method:string;
    isSecure:boolean;
    params:any;

    constructor(req:any)
    {        
        this.#app = req.app;
        this.baseUrl = req.baseUrl;
        this.ip = req.ip;
        this.route = req.baseUrl + req.path;
        this.method = req.method;
        this.isSecure = req.secure;
        this.params = req.params;
    }

    getParam(paramName:string)
    {
        return this.params[paramName];
    }
}
export default Request;