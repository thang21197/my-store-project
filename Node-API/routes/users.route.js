var express = require('express')
var router = express.Router();
var controller= require('../controller/users.controller');

router.get('/',controller.getUsers);

module.exports=router
