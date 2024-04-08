//File : system/http/responses/CreatedResponse.ts
import Response from "./Response";

class UnauthorizedResponse extends Response
{
    constructor(res:any) {
        super(res, 401, null, "Unaothorized" , null);           
    }
}
export default UnauthorizedResponse