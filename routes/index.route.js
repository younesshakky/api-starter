const express = require('express');
const router = express.Router();
const mainCtrl = require('../controllers/index')
const usersRoutes = require('./users/users.route')

router.use('', usersRoutes)

/** 
 * @api GET /api
*/
router.get('/', mainCtrl.welcome)

module.exports = router;
