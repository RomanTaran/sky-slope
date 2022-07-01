const axios = require('axios');
const formsUrl = require('../config/config');

const getFormsListQuery = (token, parameters = {}) => {
  const {
    filters='',
    sorts='',
    page = 1,
    pageSize = 3,
  } = parameters;
  const config = {
    method: 'get',
    url: `${formsUrl.formServiceUrl}/form-versions?api-version=2.0&filters=${filters}&sorts=${sorts}&page=${page}&pageSize=${pageSize}`,
    headers: {
      'Authorization': `${token}`
    },
  };

  return axios(config)
}

module.exports={
  getFormsListQuery
}
