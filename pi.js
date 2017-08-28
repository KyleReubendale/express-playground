'use strict';

var express = require('express');
var router = express.Router();
var pi = Math.PI;

router.get('/math/pi', function(req, res){
  res.send(Math.PI.toString());
});

module.exports = router;
