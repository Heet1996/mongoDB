const mongoose=require('mongoose');
mongoose.Promise=global.Promise;
before((done)=>{
	mongoose.connect("mongodb://localhost/user_test");
	mongoose.connection
		.once("open",()=>{done();})
		.on("error",(error)=>console.log(error));
});


beforeEach((done)=>{
	const {users,blogposts,comments} =mongoose.connection.collections;
	users.drop(()=>{
		blogposts.drop(()=>{
			comments.drop(()=>{
				done();
			});
		});	
		
	});

});