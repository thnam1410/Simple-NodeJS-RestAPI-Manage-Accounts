const express = require('express');
const router = express.Router();
const Account = require('../models/account');
const validate = require('../middlewares/account.validate');
const controller = require('../controllers/account.controller');
//Get all
router.get('/', controller.getAll)
//Get one
router.get('/:id', validate.getAccount, controller.getOne)
//Create one
router.post('/',validate.checkValidAccountInformationToCreate, controller.createOne);
//Update one
router.patch('/:id', validate.getAccount , controller.updateOne)
//Delete one
router.delete('/:id', validate.getAccount ,controller.deleteOne)



module.exports = router;