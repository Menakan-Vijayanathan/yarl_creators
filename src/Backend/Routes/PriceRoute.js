// routes/pricingRoutes.js
const express = require('express');
const { getPricingPlans, addPricingPlan } = require('../Controller/PriceController');
const router = express.Router();

router.get('/', getPricingPlans);
router.post('/', addPricingPlan);

module.exports = router;