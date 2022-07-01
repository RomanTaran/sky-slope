const queryContacts = require('../helpers/queryContacts');

const getContacts = async (token, id) => {
  const response = await queryContacts.getContactsQuery(token, id);
  return response.data.result;
};

const addContacts = async (token,data) => {
  const response = await queryContacts.addContactsQuery(token, data);
  return response.data;
};

module.exports = {
  getContacts,
  addContacts,
}
