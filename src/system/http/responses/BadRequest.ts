//File : system/http/responses/CreatedResponse.ts
import Response from "./Response";

class BadRequest extends Response
{
    constructor(res:any) {
        super(res, 400);        
    }
}
export default BadRequest