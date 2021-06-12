import { gql } from 'apollo-server-micro'

const typeDefs = gql`
  type Crypto {
    id: String!
    currency: String!
    name: String!
    logo_url: String!
    rank: String!
    price: String!
    price_date: String!
    market_cap: String
    circulating_supply: String
    max_supply: String
  }
  type CryptoDetails {
    volume: String!
    price_change: String!
    price_change_pct: String!
    volume_change: String!
    volume_change_pct: String!
    market_cap_change: String!
    market_cap_change_pct: String!
  }
  type Query {
    getCryptos: [Crypto]
    getCryptoDetails(cryptoid: String!, interval: String!): CryptoDetails
  }
`

export default typeDefs