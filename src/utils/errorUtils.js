const errorMap = new Map();
errorMap.set(400, `Bad Request`);
errorMap.set(401, `Unauthorized`);
errorMap.set(403, `Forbidden`);
errorMap.set(404, `Not Found`);
errorMap.set(405, `Method Not Allowed`);
errorMap.set(408, `Request Timeout`);
errorMap.set(415, `Unsupported Media Type`);
errorMap.set(500, `Internal Server Error`);
errorMap.set(501, `Not Implemented`);
errorMap.set(502, `Bad Gateway`);
errorMap.set(503, `Service Unavailable`);
errorMap.set(505, `HTTP Version Not Supported`);

export function getMessage(code) {
    return errorMap.get(code);
}

export function errorHandler(error) {
    console.error(error);
    if(error.response) {
        let status = error.response.status;
        let message = error.message;
        let redirectPath = "/error/" + status + "?msg=" + message;
        window.location.assign(redirectPath);
    }
}