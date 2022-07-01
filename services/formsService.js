const queryForms = require('../helpers/queryForms');

const getFormsList = async (token, params) => {
  const response = await queryForms.getFormsListQuery(token, params);
  return response.data.result;
};

module.exports = {
  getFormsList
}
