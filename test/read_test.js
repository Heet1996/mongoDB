const assert=require('assert');

var User=require('../src/user');
function createUser(done)
{
	var a=new User({name:"Heet"});
		a.save().then(()=>{
			
			done();

		});
		return a;
		
}
describe("should read the user",()=>{
	let a;
	beforeEach((done)=>{
			
		a=createUser(done);	
		
		});
	it('find something',(done)=>{
		User.find({name:"Heet"}).then((users)=>{
			
		
			assert(users[0]._id.toString()===a._id.toString());
			done();
		});

		
	});
	it('find one and something',(done)=>{
		User.findOne({name:"Heet"}).then((users)=>{

			assert(users._id.toString()===a._id.toString());
			done();
		});

		
	});


});
module.exports={createUser};