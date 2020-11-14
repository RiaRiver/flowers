export const getItemTotalPrice = order => order.price * order.count;

export const formatCurrencyUSD = sum => sum.toLocaleString('en-US',
  { style: 'currency', currency: 'USD' });