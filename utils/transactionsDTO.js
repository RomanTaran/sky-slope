const transactionsDTO = (transactionsList, mls) => {
  const filesWithMls = transactionsList.files.map((item, index) => {
    return {...item, "mls": mls[index]['getListingsByMlsNumber']}
  });
  return {...transactionsList, "files": filesWithMls};
}

module.exports = transactionsDTO;
