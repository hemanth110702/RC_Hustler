const Joi = require('joi');
const Coin = require('../model/coinModel');

const createCoin = async(req, res) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    network_power: Joi.number().required(),
    avg_duration: Joi.number().required(),
    block_reward: Joi.number().required(),
    one_RLT_Eq: Joi.number().required(),
    discounts: Joi.array().items(Joi.number()).required(),
    min_withdrawal: Joi.number().required()
  });

  const {error} = schema.validate(req.body);
  if(error) return res.status(400).send(error.details[0].message);

  const coin = new Coin({
    name: req.body.name,
    network_power: req.body.network_power,
    avg_duration: req.body.avg_duration,
    block_reward: req.body.block_reward,
    one_RLT_Eq: req.body.one_RLT_Eq,
    discounts: req.body.discounts,
    min_withdrawal: req.body.min_withdrawal
  });

  try {
    const savedCoin = await coin.save();
    res.send(savedCoin);
  } catch(err) {
    res.status(400).send(err);
  }
};

module.exports = {createCoin};