var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Comment = require('../models/comment');

var MessageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Not long enough!"],
    minlength: 2
  },
  content: {
    type: String,
    required: [true, "Not long enough!"],
    minlength: 2
  },
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true });

var Message = mongoose.model('Message', MessageSchema);
module.exports = Message;
