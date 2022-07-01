const axios = require('axios');
const contactsUrl = require('../config/config');

//https://forms.skyslope.com/api/files/:{ID}/contacts

const getContactsQuery = (token, id) => {
  const config = {
    method: 'get',
    url: `${contactsUrl.fileServiceUrl}/files/${id}/contacts`,
    headers: {
      'Authorization': `${token}`
    },
  };

  return axios(config)
}

const addContactsQuery = (token, body) => {
  const config = {
    method: 'post',
    url: `${contactsUrl.fileServiceUrl}/files/${body.fileId}/contacts`,
    headers: {
      'Authorization': `${token}`
    },
    data: body
  };

  return axios(config)
}

module.exports = {
  getContactsQuery,
  addContactsQuery,
}
