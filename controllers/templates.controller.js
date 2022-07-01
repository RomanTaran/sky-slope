const catchAsync = require('../utils/catchAsync');
const httpStatus = require('http-status');
const templatesService = require('../services/templatesService')

const getTemplatesList = catchAsync(async (req, res) => {
  const data = await templatesService.getTemplatesList(req.headers.authorization, req.query);
  res.status(httpStatus.OK).send(data);
});

module.exports = {
  getTemplatesList
}
