import gql from 'graphql-tag'

export const GET_CRYPTOS = gql`
  {
    getCryptos {
      id
      currency
      name
      logo_url
      rank
      price
      price_date
      market_cap
      circulating_supply
      max_supply
    }
  }
`

export const GET_CRYPTO_DETAILS = gql`
  query getCryptoDetails($cryptoid: String!, $interval: String!) {
    getCryptoDetails(cryptoid: $cryptoid, interval: $interval) {
      volume
      price_change
      price_change_pct
      volume_change
      volume_change_pct
      market_cap_change
      market_cap_change_pct
    }
  }
`