const assert=require('assert');
var User=require('../src/user');
describe('create something',()=>{
it('should create user with post title',(done)=>{
		var a=new User({name:"Heet",postCount:1,post:[{postTitle:"PostTitle"}]});
		
		a.save().then(()=>
			User.findOne({name:"Heet"})			
		).then((user)=>{
			
			assert(user.post[0].postTitle=="PostTitle");
			done();

		});


		
	});

it("should add the post to the current user for the post",(done)=>{

	var a=new User({name:"Heet",post:[]});
	a.save().then(()=>User.findOne({name:"Heet"}))
			.then((user)=>
				User.findOneAndUpdate({name:user.name},{post:[{postTitle:"PostTitle"}]})
			)
			.then(()=>{

			User.findOne({name:"Heet"})
			.then((user)=>{
				
				assert(user.post[0].postTitle=="PostTitle");
				done();

			});
	});

	
});
it("should remove Posttile from the sub-documents",(done)=>{
	var a=new User({name:'Heet',post:[{postTitle:"PostTitle"}]});
	a.save().then(()=>User.findOne({name:"Heet"}))
			.then((user)=>{
				user.post.pop();
				return user.save();
				
			})
	.then(()=>User.findOne({name:'Heet'}))
	.then((user)=>{
			assert(user.post=="");
			done();
		});				
});
it("should match post length",(done)=>{
	var a=new User({name:'Heet',post:[{postTitle:"PostTitle"}]});
	a.save()
	 .then(()=>{
	 	console.log(a.postCount);
	 	assert(a.postCount==1);
	 	done();
	 })	
					
});
});
