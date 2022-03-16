const express = require('express');
const router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    // res.json({
    //     "msg": "hello y'all 🖐"
    // },
    // );
    res.send("msg :hello y'all 🖐");
});

module.exports = router;