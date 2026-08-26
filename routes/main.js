const express = require('express')
const router = express.Router()

const {login,dashboard} = require('../controllers/main.js')
const authMiddleware = require('../middleware/dashboard')

router.route('/dashboard').get(dashboard)
router.route('/login').post(login)

module.exports = router