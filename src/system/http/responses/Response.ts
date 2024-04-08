//File : system/http/responses/Response.ts

class Response
{
    status:number;    
    data: object|null;
    error: string|null;
    errors: object|null;

    constructor(res:any, status=201,  data = null, error = "", errors = null) {
        this.status = status;
        this.data = data;
        this.error = error;
        this.errors = errors;
        return res.status(this.status).json(this);
    }
}

export default Response;