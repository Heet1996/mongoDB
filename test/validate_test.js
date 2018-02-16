const assert=require('assert');
var User=require('../src/user');

it("should validate the name",()=>{
		var user=new User({name:undefined});
		var validationResult=user.validateSync();
		var {message}=validationResult.errors.name;
		console.log(message);
	});
it("should validate the name length",()=>{
		var user=new User({name:'Al'});
		var validationResult=user.validateSync();
		var {message}=validationResult.errors.name;
		console.log(message);
	});
