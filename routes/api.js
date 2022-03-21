const express = require('express');
const router = express.Router();
const Position = require('../db');


/* GET users listing. */
router.get('/', (req, res,next)=>{

    Position.aggregate().near({
            near: {
                    'type': 'Point',
                    'coordinates': [parseFloat(req.query.lng), parseFloat(req.query.lat)] },
            maxDistance: 1000000,
            spherical: true,
            distanceField: "dis"
        }
    ).then(function(postion){
        res.send(postion);
    });


    // Position.find({}, function(err, postion) { // FIXME: need to be removed
    //     res.json(postion);
    // });

})

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

module.exports = router;