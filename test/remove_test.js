const assert=require('assert');

var User=require('../src/user');
var {createUser}=require('./read_test');
	function assertName(b,done)
{	
	b.then(()=>User.findOne({name:"Heet"}))

	 .then((user)=>{

	 	assert(user===null)
	 	done();
	 });	
}
describe("it should delete",()=>{

	let a;

	beforeEach((done)=>{
			
		a=createUser(done);
		
		});

	
	it("should remove one instance using model instance",(done)=>{
		a.remove()

		done(); 	
		
	});
	it("should remove one instance",(done)=>{
		assertName(User.findOneAndRemove({name:"Heet"}),done);
		
	});
	it("should remove one instance",(done)=>{
		assertName(User.findByIdAndRemove({_id:a._id}),done);
		
	});
});
module.exports={assertName};