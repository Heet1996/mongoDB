const mongoose=require('mongoose');
var Schema=mongoose.Schema
var BlogSchema=new Schema({
	title:String,
	content:String,
	comments:[{type:Schema.Types.ObjectId,
			   ref:'comment'	
			}]
});
var BlogPost=mongoose.model('blogpost',BlogSchema);
module.exports=BlogPost;
