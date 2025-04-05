// controllers/pricingController.js
const Pricing = require('../Model/PriceModel');

// Get all pricing plans
exports.getPricingPlans = async (req, res) => {
  try {
    const pricingPlans = await Pricing.find();
    res.json(pricingPlans);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add a new pricing plan
exports.addPricingPlan = async (req, res) => {
  try {
    const newPlan = new Pricing(req.body);
    await newPlan.save();
    res.status(201).json(newPlan);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};