export const formatCurrency = value => {
  const formatter = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'EUR'
  })
  return formatter.format(value)
}

export const convertToPercentage = value => {
  return (value * 100).toFixed(2) + '%'
}