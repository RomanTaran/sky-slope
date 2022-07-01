const ApiError = require('../utils/ApiError');
const httpStatus = require('http-status');

const auth=() => (req, res, next)=> {
    const authorizationHeader = req?.headers?.authorization;
    if (!authorizationHeader) {
      return next(new ApiError(httpStatus.UNAUTHORIZED, 'Please authenticate'));
    }
    return next();
};

module.exports = auth;
