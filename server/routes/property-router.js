const express = require('express')

const PropertyCtrl = require('../controllers/property-ctrl')

const router = express.Router()

router.get('/propertys/all', PropertyCtrl.getPropertys)

module.exports = router