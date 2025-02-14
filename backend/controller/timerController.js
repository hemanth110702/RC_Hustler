const Timer = require('../model/timerModel');

const createTimer = async (req, res) => {
  const timer = new Timer({
    count: 0,
    lastUpdated: Date.now()
  });

  try {
    const savedTimer = await timer.save();
    res.send(savedTimer);
  } catch (err) {
    res.status(400).send(err);
  }
};


const updateTimer = async (req, res) => {
  try {
    const updatedTimer = await Timer.findOneAndUpdate(
      {},
      { $currentDate: { updatedAt: true } },
      { new: true }
    );
    res.send(updatedTimer);
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = { createTimer, updateTimer };
