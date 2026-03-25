const express = require('express')
const router = express.Router()

const {login,dashboard} = require('../controllers/main')
const { route } = require('express/lib/router')

router.route('/dashboard').get(dashboard)
router.route('/login').post(login)

module.exports = router