const mongoose = require('mongoose');

const timerSchema = new mongoose.Schema(
  {
    count: {
      type: Number,
      default: 0,
      required: true
    }
  },
  {
    timestamps: true
  });

const Timer = mongoose.model('Timer', timerSchema);

module.exports = Timer;