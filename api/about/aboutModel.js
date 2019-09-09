var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AboutSchema = new Schema({
    name: {
        type: String
    },

    title: {
        type: String
    },
    description: {
        type: String
    },
    x: {
        type: Number,
        default:15

    },
    y: {
        type: Number,
        default:25

    },
    img: {
        type: String,

    }
});

module.exports = mongoose.model('about', AboutSchema)


