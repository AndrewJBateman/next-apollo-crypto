// fetch and return data

import Nomics from 'nomics'

const nomics = new Nomics({
  apiKey: process.env.API_KEY
})

const resolvers = {
  Query: {
    getCryptos: async (_, args) => {
      const cryptos = await nomics.currenciesTicker()
      return cryptos.slice(0, 40)
    },

    getCryptoDetails: async (_, args) => {
      const { cryptoid, interval } = args

      const fetchCryptoDetails = await nomics.currenciesTicker({
        ids: [`${cryptoid}`.toUpperCase()],
        interval: [`${interval}`]
      })
      return fetchCryptoDetails[0][`${interval}`]
    }
  }
}

export default resolvers