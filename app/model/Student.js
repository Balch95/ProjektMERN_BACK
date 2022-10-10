const mongoose = require("mongoose");

// const {CitySchema} = require('./City')

mongoose.connect('mongodb://localhost:27017/FullStackApp',  {useNewUrlParser: true, useUnifiedTopology: true});

const schemaAddStudent = new mongoose.Schema ({
    name: {type: String, required: true},
    event:{type: String, require: true},
    city: {type: String, require: true}
},  { timestamps: true });

 
module.exports = mongoose.model('Student', schemaAddStudent)



