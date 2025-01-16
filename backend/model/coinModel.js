const mongoose = require('mongoose');

const coinSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  network_power: {
    type: mongoose.Types.Decimal128,
    required: true
  },
  avg_duration: {
    type: Number,
    required: true
  },
  block_reward: {
    type: mongoose.Types.Decimal128,
    required: true
  },
  one_RLT_Eq: {
    type: mongoose.Types.Decimal128,
    required: true
  },
  discounts: {
    type: [Number], 
    required: true
  },
  min_withdrawal: {
    type: mongoose.Types.Decimal128,
    required: true
  }
});

const Coin = mongoose.model('Coin', coinSchema);

module.exports = Coin;