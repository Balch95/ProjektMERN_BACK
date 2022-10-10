const City = require('../model/City')

function citiesList(cb){
    City.find().lean().exec(function(err, cities){
        if(err){
            cb(err)
        } else{
            cb(null, cities)
        }
    });
};

module.exports = {
    list: citiesList,
}