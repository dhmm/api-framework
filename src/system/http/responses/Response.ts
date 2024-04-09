//File : system/http/responses/Response.ts

class Response
{
    status:number;    
    data: object|null;
    error: string|null;
    errors: object|null;
		headers: any|null;
		cookies: any|null;

    constructor(res:any, status=200,  data:any = null, error:string = "", errors:any = null, headers:any = null, cookies:any = null) {
        this.status = status;
        this.data = data;
        this.error = error;
        this.errors = errors;
				this.headers = headers;
				this.cookies = cookies;
							
				this.#sendResponse(res);
    }
		#sendResponse(res:any)
		{
			let responseData = 
			{
				status: this.status,  
				data: this.data,
				error: this.error,
				errors: this.errors,
			};			
			if(this.headers!=null) {
				this.headers.forEach( (header:any) => {
					res.set(header[0], header[1]);
				});
			}
			if(this.cookies!=null) {
				this.cookies.forEach( (cookie:any) => {						
					res.cookie(cookie[0], cookie[1], { expires: new Date(Date.now() + 900000), httpOnly: true })
				});
			}
			return res.status(this.status).json(responseData);
		}
}

export default Response;