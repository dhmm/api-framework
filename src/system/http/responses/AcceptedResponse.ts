//File : system/http/responses/AcceptedResponse.ts
import Response from "./Response";

class AcceptedResponse extends Response
{
    constructor(res:any) {
        super(res, 202);        
    }
}
export default AcceptedResponse