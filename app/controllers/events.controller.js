const Event = require('../model/Event')

function eventList(cb){
    Event.find().lean().exec(function(err, events){
        if(err){
            cb(err)
        } else{
            cb(null, events)
        }
    });
};

module.exports = {
    list: eventList,
}