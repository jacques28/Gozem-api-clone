const express = require('express');
const router = express.Router();
const Position = require('../db');



/* GET users listing. */
router.get('/', (req, res,next)=>{

    Position.geoNear(
        {type:'Point', coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
        {maxDistance: 100000, spherical: true}
    ).then(function(postion){
        res.send(postion);
    });


})


// router.post('/', (req, res) => {
//   var uPosition = new Position ({
//     name: req.body.position,
//
//   });
//
//   uPosition.save( (err) => {
//     if (err) {
//       res.type('html').status(500);
//       res.send('Error: ' + err);
//     }
//     else {
//       res.send('GOOD JOB', {Position : uPosition});
//     }
//   } );
//
// });


router.post('/', function(req, res, next) {
    Position.create(req.body).then(function (postion){
      res.send(postion);
    }).catch(next);

});


router.delete('/:id', function(req, res, next) {
  Position.findByIdAndDelete({_id:req.params.id}).then(function (position) {
    res.send(position);
  })
  res.send('resource well deleted');
});








// router.post('/', async function(req, res, next) {
//   try {
//     let uPosition = new uPosition(req.body);
//     const createuPosition = await uPosition.save();
//     res.json(createuPosition);
//     console.log(req.body); // NEED TO BE REMOVED
//   } catch (error) {
//   next(error);
//   }
//
// });


module.exports = router;
