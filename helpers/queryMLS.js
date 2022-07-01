const axios = require('axios');

const queryMLS = (mlsNumber) => {
  const data = JSON.stringify({
    query: `query getListingsByMlsNumber (
  $mlsNumber: String,
  $city: String,
  $state: String,
  $states: [String],
  $zipCode: String,
  $latitude: Float,
  $longitude: Float,
  $distance: PositiveInt,
  $distanceUnit: DistanceUnit,
  $searchAllMarkets: Boolean,
  $daysToSearch: PositiveInt,
  $skip: NonNegativeInt,
  $resultSize: PositiveInt,
  $searchType: String,
  $noResultsOnEmptySearchString: Boolean
) {
  getListingsByMlsNumber (
    mlsNumber: $mlsNumber,
    city: $city,
    state: $state,
    states: $states,
    zipCode: $zipCode,
    latitude: $latitude,
    longitude: $longitude,
    distance: $distance,
    distanceUnit: $distanceUnit,
    searchAllMarkets: $searchAllMarkets,
    daysToSearch: $daysToSearch,
    skip: $skip,
    resultSize: $resultSize,
    searchType: $searchType,
    noResultsOnEmptySearchString: $noResultsOnEmptySearchString
    # mlsMarkets: $mlsMarkets
  ) {
      score
    uid
    skyslopeLastUpdateDate
    lastUpdateDate
    # listingStatus
    propertyId
    # displayMlsNumber
    marketName
    displayAddress
    # listDate
    # listingPrice
    # acres
    # annualTax
    
    latitude
    longitude
    # squareFeet
    # daysOnMarket
    photoUrl
    propertyAddress {
    #   streetNumber
    #   streetName
    #   streetType
    #   streetDirection
    #   unitNumber
      city
      state
      zipCode
    }
    # listingAgentSummaryInfo {
    #   agentId
    #   name
    #   phone
    #   officeId
    #   officeName
    #   officePhone
    # }
    # listingAgent {
    #   licenseNumber
    #   firstName
    #   lastName
    # }
    # propertyAttributes {
    #   parcelNumber
    # }
    #photos {
    #    photoUrl
    #}
  }
}`,
    variables: {
      "mlsNumber": `${mlsNumber}`,
      "resultSize": 10,
      "daysToSearch": 1825,
      "searchType": "MONGODB",
      "noResultsOnEmptySearchString": false
    }
  });

  const config = {
    method: 'post',
    url: 'https://integ-mls-service.skyslope.com/',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };

  return axios(config)
}

module.exports = queryMLS;
