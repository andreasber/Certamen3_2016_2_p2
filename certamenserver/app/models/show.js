var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ShowSchema   = new Schema({
    name: String
});

module.exports = mongoose.model('Show', ShowSchema);