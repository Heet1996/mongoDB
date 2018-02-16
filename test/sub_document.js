const assert=require('assert');
var User=require('../src/user');
describe('create something',()=>{
it('should create user with post title',(done)=>{
		var a=new User({name:"Heet",postCount:1,post:[{postTitle:"PostTitle"}]});
		console.log(a);
		a.save().then(()=>
			User.findOne({name:"Heet"})			
		).then((user)=>{
			console.log(user.post[0]);
			assert(user.post[0].postTitle=="PostTitle");
			done();

		});


		
	});

it("should add the post to the current user for the post",(done)=>{
	done();
});
});