const axios = require('axios');
const templatesUrl = require('../config/config');

const getTemplatesListQuery = (token, parameters = {}) => {
  const {
    filters='',
    sorts='',
    page = 1,
    pageSize = 3,
    isArchived = false,
    isDeleted = false,
  } = parameters;
  const config = {
    method: 'get',
    url: `${templatesUrl.fileServiceUrl}/files?filters=${filters}&sorts=${sorts}&page=${page}&pageSize=${pageSize}&isArchived=${isArchived}&isDeleted=${isDeleted}&type=Template`,
    headers: {
      'Authorization': `${token}`
    },
  };

  return axios(config)
}

module.exports={
  getTemplatesListQuery
}
