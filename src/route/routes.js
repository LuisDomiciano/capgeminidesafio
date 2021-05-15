const express = require('express')
const router = express()
const controller = require('../controller/advertisementController')

router.get('/anuncios', controller.index)
router.put('/anuncios/:id', controller.update)
router.post('/anuncios', controller.create)

module.exports = router
