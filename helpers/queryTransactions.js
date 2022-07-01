const axios = require('axios');
const url = require('../config/config');

const getTransactionsListQuery = (token, parameters = {}) => {
  const {
    filters='',
    sorts='',
    page = 1,
    pageSize = 5,
    isArchived = false,
    isDeleted = false,
    type = 'File'
  } = parameters;
  const config = {
    method: 'get',
    url: `${url.fileServiceUrl}/files?filters=${filters}&sorts=${sorts}&page=${page}&pageSize=${pageSize}&isArchived=${isArchived}&isDeleted=${isDeleted}&type=${type}`,
    headers: {
      'Authorization': `${token}`
    },
  };

  return axios(config)
}
const getTransactionQuery = (token, id) => {
  const config = {
    method: 'get',
    url: `${url.fileServiceUrl}/files/${id}`,
    headers: {
      'Authorization': `${token}`
    },
  };

  return axios(config)
}

module.exports = {
  getTransactionsListQuery,
  getTransactionQuery
};
