const express = require('express')
const router = express()
const controller = require('../controller/advertisementController')

router.get('/anuncios', controller.index)
router.put('/anuncios/:id', controller.update)
router.post('/anuncios', controller.create)
router.delete('/anuncios/:id', controller.remove)

module.exports = router
