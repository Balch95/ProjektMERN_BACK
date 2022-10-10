const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/FullStackApp',  {useNewUrlParser: true, useUnifiedTopology: true});



const schemaCitiesList = new mongoose.Schema({
    cityName: {type: String, required: true}
})


module.exports = mongoose.model('City', schemaCitiesList);
