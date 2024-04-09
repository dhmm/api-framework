import Response from "./Response";
//200
class OKResponse extends Response
{
    constructor(res:any, data = null, error = "", errors = null) {
        super(res, 200, data, error, errors);        
    }
}
//201
class CreatedResponse extends Response
{
    constructor(res:any, data = null, error = "", errors = null) {
        super(res, 201, data, error, errors);        
    }
}
//202
class AcceptedResponse extends Response
{
    constructor(res:any, data = null, error = "", errors = null) {
        super(res, 202, data, error, errors);        
    }
}
//204
class NoContentResponse extends Response
{
    constructor(res:any, data = null, error = "", errors = null) {
        super(res, 204, data, error, errors);        
    }
}
//400
class BadRequest extends Response
{
    constructor(res:any, data = null, error = "", errors = null) {
        super(res, 400, data, error, errors);        
    }
}
//401
class UnauthorizedResponse extends Response
{
    constructor(res:any, data = null, error = "", errors = null) {
        super(res, 401, data, error, errors);
    }
}
//403
class ForbiddenResponse extends Response
{
    constructor(res:any, data = null, error = "", errors = null) {
        super(res, 403, data, error, errors);
    }
}
//404
class NotFoundResponse extends Response
{
    constructor(res:any, error = "Not found") {
        super(res, 404, null, error, null);
    }
}
export {
    OKResponse,
    CreatedResponse,
    AcceptedResponse, 
    NoContentResponse,
    BadRequest,
    UnauthorizedResponse,
    ForbiddenResponse,
    NotFoundResponse
}