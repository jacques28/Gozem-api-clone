const express = require('express');
const router = express.Router();
const uPosition = require('db.js');



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', async function(req, res, next) {
  try {
    let uPosition = new uPosition(req.body);
    const createuPosition = await uPosition.save();
    res.json(createuPosition);
    console.log(req.body); // NEED TO BE REMOVED
  } catch (error) {
  next(error);
  }

});


module.exports = router;
