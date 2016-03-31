var router = require('express').Router();

router.get('/', function(req, res) {
  res.senfFile('index.html', {root: './'})
});
