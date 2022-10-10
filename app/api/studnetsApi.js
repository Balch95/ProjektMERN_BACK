const express = require('express');

const router = express.Router();

const studentList = require('../controllers/students.controller')

router.get('/all', function(req, res){
    studentList.list(function(err, student){
        if(err) {
            res.status(404);
            res.json({
                error: "Students don't exist"
            })
        } else {
            res.json(student)
        }
    });
});

router.post('/addstudent', function(req, res){
    studentList.add(req.body, function(err, student){
        if(err) {
            res.status(404);
            res.json({
                error: "Stundent not add"
            });
        } else {
            res.json(student);
        }
    })
});

router.put('/updatestudent/:id', function(req,res){
    studentList.update(req.params.id, req.body, function(err, student){
        if(err){
            res.status(404);
            res.json({
                error: "Student not update"
            })
        } else {
            res.json({
                message: "Student update"
            })
        }
    })
});

router.delete('/remove/:id', function(req, res){
    studentList.remove(req.params.id, function(err, student){
        if(err) {
            res.status(404);
            res.json({
                error: "Student not remove"
            });
        } else {
            res.json({
                message: `Student remove`
            });
        }
    });
     
});

module.exports = router;