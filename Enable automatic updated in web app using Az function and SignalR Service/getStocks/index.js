module.exports = async function (context, req, stocks) {
  context.log(stocks);
  context.res.body = stocks;
};
