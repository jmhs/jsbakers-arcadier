const express = require('express')
const router = express.Router()
const categoriesController = require('../controllers/categories_controller')

router.get('/', categoriesController.list)

module.exports = router
