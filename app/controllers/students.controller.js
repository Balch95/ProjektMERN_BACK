const Student = require('../model/Student');

function studentList(cb){
    Student.find().lean().exec(function(err, students){
        if(err){
            cb(err)
        } else{
            cb(null, students)
        }
    });
};

function addStudent (data, cb){
    let newStudent = new Student(data);
    newStudent.save(function(err, student){
        if(err){
            cb(err);
        }else{
            cb(null, student)
        }
    });
};


function updateStudent(id, data, cb){
    Student.updateOne({_id: id}, data, function(err, student){
        if(err){
            cb(err);
        } else{
            cb(null, student);
        }
    })
}


function removeStudent(id, cb){
    Student.deleteOne({_id: id}, function(err, student){
        if(err){
            cb(err);
        } else {
            cb(null, student)
        }
    });
};


module.exports = {
    list: studentList,
    add: addStudent,
    update: updateStudent,
    remove: removeStudent,
}