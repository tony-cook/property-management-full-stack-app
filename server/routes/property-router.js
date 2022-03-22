const express = require('express');

const PropertyCtrl = require('../controllers/property-ctrl');

const router = express.Router();

router.get('/properties/all', PropertyCtrl.getProperties);

module.exports = router;
