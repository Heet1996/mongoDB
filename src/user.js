const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const {PostSchema}=require('./post_schema');
const UserSchema=new Schema(
							{
								name:{
									type:String,
									required:[true,'Name is required.'],
									validate:{
										validator:(name)=>name.length>2,
										message:"Name length should be > 2"
									}

								},
								likes:Number,
								post:[PostSchema],
								blogposts:[{type:Schema.Types.ObjectId,
										ref:'blogpost'
											}]
							}
							);
UserSchema.virtual('postCount').get(function (){
return this.post.length;
});
const User=mongoose.model('user',UserSchema);
module.exports=User;