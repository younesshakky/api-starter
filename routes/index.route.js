const express = require('express');
const router = express.Router();
const mainCtrl = require('../controllers/index')

/** 
 * @api GET /api
*/
router.get('/', mainCtrl.welcome)

module.exports = router;
