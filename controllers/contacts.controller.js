const catchAsync = require('../utils/catchAsync');
const httpStatus = require('http-status');
const contactsService = require('../services/contactsService')

const getContacts = catchAsync(async (req, res) => {
  const data = await contactsService.getContacts(req.headers.authorization, req.params.id);
  res.status(httpStatus.OK).send(data);
})

const addContacts = catchAsync(async (req, res) => {
  const data = await contactsService.addContacts(req.headers.authorization, req.body);
  res.status(httpStatus.OK).send(data);
})

module.exports = {
  getContacts,
  addContacts,
}
