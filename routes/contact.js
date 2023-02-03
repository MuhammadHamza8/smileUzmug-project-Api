const express = require('express');

const router = express.Router()

const contact_controller = require('../controllers/contact');

//All Routes
//Post Method
router.post('/post', contact_controller.postContact)

//Get all Method
router.get('/getAll', contact_controller.getAll)

//Get by ID Method
router.get('/getOne/:id', contact_controller.getOne)

//Update by ID Method
router.patch('/update/:id',contact_controller.update)
//Delete by ID Method
router.delete('/delete/:id', contact_controller.delete)

module.exports = router;
