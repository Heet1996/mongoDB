const mongoose=require('mongoose');
var Schema=mongoose.Schema;
var comment_schema=new Schema({
	comment:String,
	user_comment:{
		type:Schema.Types.ObjectId,
		ref:'user'
	}
});
var Comment=mongoose.model('comment',comment_schema);
module.exports=Comment;