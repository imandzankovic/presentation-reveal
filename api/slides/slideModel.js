var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SlidesSchema = new Schema({
    slide: {
        type: String
    }
});

module.exports = mongoose.model('slide', SlidesSchema)

