const catchAsync = require('../utils/catchAsync');
const httpStatus = require('http-status');
const formsService = require('../services/formsService')

const getFormsList = catchAsync(async (req, res) => {
  const data = await formsService.getFormsList(req.headers.authorization, req.query);
  res.status(httpStatus.OK).send(data);
});

module.exports = {
  getFormsList
}
