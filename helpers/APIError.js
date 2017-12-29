const httpStatus = require('http-status');

class ExpendableError extends Error {
  constructor(message, status) {
    super(message, status)
    this.message = message;
    this.code = httpStatus[status];
    this.status = status || 500
  }
}


class APIError extends ExpendableError {
  constructor(message, status) {
    super(message, status)
  }
}

const apiError = new APIError('something went wrong')

console.log(apiError.status)