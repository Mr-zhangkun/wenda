var mongoose = require('./mongoose.js');


var queSchema = new mongoose.Schema({

});

var queModel = mongoose.model('ques', queSchema);
module.exports = queModel;
