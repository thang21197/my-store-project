var express = require('express');
var router = express.Router();
var client=require('../data')
/* GET users listing. */

router.get('/', function(req, res, next) {
    var data=[];  
    client.connect(err => {
    const collection = client.db("my-store").collection("users");
    collection.find().forEach((value,key)=>{
      data.push(value)
    },()=>{
      client.close();
      res.send(data);
      })
  });
  // res.send('respond with a resource');
});

module.exports = router;
