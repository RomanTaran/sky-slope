const catchAsync = require('../utils/catchAsync');
const httpStatus = require('http-status');
const transactionsService = require('../services/transactionsService')

const getTransactionsList = catchAsync(async (req, res) => {
  const data = await transactionsService.getTransactionsList(req.headers.authorization, req.query);
  res.status(httpStatus.OK).send(data);
 });

const getTransaction = catchAsync(async (req, res) => {
  const data = await transactionsService.getTransaction(req.headers.authorization, req.params.id);
  res.status(httpStatus.OK).send(data);
});

module.exports = {
  getTransactionsList,
  getTransaction
}
