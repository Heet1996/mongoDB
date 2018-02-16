const assert=require('assert');
var User=require('../src/user');

describe('create something',()=>{
	it('should create user',(done)=>{
		var a=new User({name:"Heet",postCount:0});
		
		a.save().then(()=>{
			assert(!a.isNew);
			done();
			
		});


	});
	
	});

	
