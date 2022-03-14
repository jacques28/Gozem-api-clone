var express = require('express');
var router = express.Router();

const positions = [1,2,3,4];

 let findNearestPerson= ()=>{

}



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
