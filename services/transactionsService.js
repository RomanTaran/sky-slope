const queryTransactions = require('../helpers/queryTransactions');
const queryMLS = require('../helpers/queryMLS');
const transactionsDTO = require('../utils/transactionsDTO');

const getTransactionsList = async (token, params) => {
  const response = await queryTransactions.getTransactionsListQuery(token, params);
  const idsArray = response?.data?.result?.files.map(({id}) => id);
  const transactionsList = [];
  idsArray.forEach((item) => {
    transactionsList.push(queryTransactions.getTransactionQuery(token, item));
  });
  const data = await Promise.all(transactionsList);
  const transactions = data.map(({data}) => {
    return data.result
  });
  const mlsNumbersArr = transactions.map(({mlsNumber}) => mlsNumber);
  const mlsList = [];
  mlsNumbersArr.forEach((item) => {
    mlsList.push(queryMLS(item))
  })
  const mlsData = await Promise.all(mlsList);
  const mlsResponse = mlsData.map(({data}) => data.data);
  return transactionsDTO(response.data?.result, mlsResponse);
};

const getTransaction = async (token, id) => {
  const response = await queryTransactions.getTransactionQuery(token, id);
  const {mlsNumber} = response.data?.result || {};
  const mlsResponse = await queryMLS(mlsNumber);
  return {...response.data?.result, "mls": mlsResponse?.data?.data?.getListingsByMlsNumber};
};

module.exports = {
  getTransactionsList,
  getTransaction
}
