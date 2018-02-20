const mongoose=require('mongoose');
var User=require('../src/user');
var BlogPost=require('../src/blogpost_schema');
var Comment=require('../src/comment_schema');
describe("Association",()=>{
	let joe,blogPost,comment;
	beforeEach((done)=>{
	 joe=new User({name:'joe'});
	 blogPost=new BlogPost([{title:'Javascript is great',content:'JS will be the ruler'}]);
	 comment= new Comment({comment:'Hey Good post'});
	joe.blogposts.push(blogPost);
	blogPost.comments.push(comment);
	comment.user_comment=joe;
	Promise.all([joe.save(),blogPost.save(),comment.save()])
		.then(()=>{done()});
	});



it.only("saves the relation between user and blogpost",(done)=>{
User.findOne({name:'joe'})
	.then((user)=>{
		console.log(user);
		done();
	});
});	

});