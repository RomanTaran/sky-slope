const queryTemplates = require('../helpers/queryTemplates');

const getTemplatesList = async (token, params) => {
  const response = await queryTemplates.getTemplatesListQuery(token, params);
  return response.data.result;
};

module.exports = {
  getTemplatesList
}
