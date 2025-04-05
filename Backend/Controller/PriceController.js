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
    return res.status(201).json(newPlan);  // ✅ Return here to avoid further execution
  } catch (err) {
    console.error('Error adding pricing plan:', err);
    return res.status(500).json({ error: err.message });
  }
};


// Update a pricing plan by ID
exports.updatePricingPlan = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPlan = await Pricing.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedPlan) return res.status(404).json({ message: 'Plan not found' });

    return res.status(200).json({
      message: 'Plan updated successfully',
      data: updatedPlan,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// Delete a pricing plan by ID
exports.deletePricingPlan = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPlan = await Pricing.findByIdAndDelete(id);
    if (!deletedPlan) return res.status(404).json({ message: 'Plan not found' });

    return res.status(200).json({ message: 'Plan deleted successfully' });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
