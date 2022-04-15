class Response {
    response(res, message, status_code, status, data) {
        return res.status(status_code).send({
            status, message, data
        }).end()
    }
    internalServerError(res, message  = 'Whoops...An Error Occured', data = []) {
        return this.response(res, message, 500, false, data)
    }
    sendError(res, {message, status_code = 400, data = null}) {
        return this.response(res, message, status_code, false, data)
    }

    sendSuccess(res, {message, status_code =200, data = null}) {
        return this.response(res, message, status_code, true, data)
    }
}

const response = ()  => {
    return new Response()
}
module.exports = response()
