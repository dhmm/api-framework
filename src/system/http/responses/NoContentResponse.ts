//File : system/http/responses/AcceptedResponse.ts
import Response from "./Response";

class NoContentResponse extends Response
{
    constructor(res:any) {
        super(res, 204);        
    }
}
export default NoContentResponse