const mongoose=require('mongoose');
const assert=require('assert');
var User=require('../src/user');
var BlogPost=require('../src/blogpost_schema');
var Comment=require('../src/comment_schema');
describe("Association",()=>{
	let joe,blogPost,comment;
	beforeEach((done)=>{
	 joe=new User({name:'joe'});
	 blogPost=new BlogPost({title:'Javascript is great',content:'JS will be the ruler'});
     comment= new Comment({comment:'Hey Good post'});
	 joe.blogposts.push(blogPost);
	 blogPost.comments.push(comment);
	 comment.user_comment=joe;
	Promise.all([joe.save(),blogPost.save(),comment.save()])
		.then(()=>{done()});
	});



it("saves the relation between user and blogpost",(done)=>{


User.findOne({name:'joe'})
	.populate('blogposts')
	.then((user)=>{
	    assert(user.blogposts[0].title==='Javascript is great');
		done();
	});
});	
it("populates all the data",(done)=>{


User.findOne({name:'joe'})
	.populate({
		path:'blogposts',
		populate:{
			model:'comment',
			path:'comments',
			populate:{
				model:'user',
				path:'user_comment'
				}
			}
	})
	.then((user)=>{
	    assert(user.blogposts[0].title==='Javascript is great');
	    assert(user.blogposts[0].comments[0].comment==='Hey Good post');
	    assert(user.blogposts[0].comments[0].user_comment.name==='joe');
		done();
	});
});
});