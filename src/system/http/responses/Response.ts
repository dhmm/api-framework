//File : system/http/responses/Response.ts

class Response
{
    status:number;    
    data: object|null;
    error: string|null;
    errors: object|null;

    constructor(res:any, status=200,  data:any = null, error:string = "", errors:any = null, headers:any = null) {
        this.status = status;
        this.data = data;
        this.error = error;
        this.errors = errors;
				if(headers!=null) {
					headers.forEach( (header:any) => {
						res.set(header[0], header[1]);
					});
				}
				
        return res.status(this.status).json(this);
    }
}

export default Response;