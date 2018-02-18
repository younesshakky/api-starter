const mongoose = require('mongoose')
const userSchema = require('../models/user.model')
const User = mongoose.model('users', userSchema)

