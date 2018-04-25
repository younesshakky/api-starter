const express = require('express');
const router = express.Router();
const userCtrl = require('../../controllers/users/index')

router.post('/signup', userCtrl.createUser)

module.exports = router;
