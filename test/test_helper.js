const mongoose=require('mongoose');
mongoose.Promise=global.Promise;
before((done)=>{
	mongoose.connect("mongodb://localhost/user_test");
	mongoose.connection
		.once("open",()=>{done();})
		.on("error",(error)=>console.log(error));
});


beforeEach((done)=>{
	mongoose.connection.collections.users.drop(()=>{
		done();
	});

});