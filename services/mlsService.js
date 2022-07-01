const queryMLS = require('../helpers/queryMLS');

const getMlsObject = async ({mlsNumber}) => {
  const response = await queryMLS(mlsNumber);
  return response.data;
};

module.exports = {
  getMlsObject
}
