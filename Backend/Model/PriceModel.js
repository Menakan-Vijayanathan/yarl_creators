// models/pricingModel.js
const mongoose = require('mongoose');

const pricingSchema = new mongoose.Schema({
  type: String,
  monthlyPriceUSD: String,
  yearlyPriceUSD: String,
  monthlyPriceAUD: String,
  yearlyPriceAUD: String,
  capabilities: Array,
  features: Array
});

module.exports = mongoose.model('Price', pricingSchema);