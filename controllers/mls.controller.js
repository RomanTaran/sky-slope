const catchAsync = require('../utils/catchAsync');
const httpStatus = require('http-status');
const mlsService = require('../services/mlsService')

const getMlsObject = catchAsync(async (req, res) => {
  const data = await mlsService.getMlsObject(req.query);
  res.status(httpStatus.OK).send(data);
});

module.exports = {
  getMlsObject
}
