var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new mongoose.Schema({
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
  message: {type: mongoose.Schema.Types.ObjectId, ref: 'Message'}
}, {timestamps: true });

var CommentModel = mongoose.model('Comment', CommentSchema);
var Comment = {schema: CommentSchema, model:CommentModel};
module.exports = Comment;
