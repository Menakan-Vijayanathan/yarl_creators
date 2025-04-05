// routes/pricingRoutes.js
const express = require('express');
const {
  getPricingPlans,
  addPricingPlan,
  deletePricingPlan,
  updatePricingPlan,
} = require('../Controller/PriceController');

const router = express.Router();

router.get('/get', getPricingPlans);
router.post('/post', addPricingPlan);
router.delete('/delete/:id', deletePricingPlan); // ✅ FIXED
router.put('/update/:id', updatePricingPlan);   // ✅ FIXED

module.exports = router;
