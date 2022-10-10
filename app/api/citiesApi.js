const express = require('express')

const router = express.Router();

const eventList = require('../controllers/cities.controller')

router.get('/all', function(req, res){
    eventList.list(function(err, cities){
        if(err) {
            res.status(404);
            res.json({
                error: "Cities don't exist"
            })
        } else {
            res.json(cities)
        }
    });
});

module.exports = router;