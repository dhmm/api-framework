//File : system/http/responses/CreatedResponse.ts
import Response from "./Response";

class CreatedResponse extends Response
{
    constructor(res:any) {
        super(res, 201);        
    }
}
export default CreatedResponse