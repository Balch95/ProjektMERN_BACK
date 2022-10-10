const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/FullStackApp',  {useNewUrlParser: true, useUnifiedTopology: true});


const schemaEventList = new mongoose.Schema({
    nameEvent: {type: String, required: true}
})
 
module.exports = mongoose.model('Event', schemaEventList)

