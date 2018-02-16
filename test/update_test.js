const assert=require('assert');
var {createUser}=require('./read_test');
var User=require('../src/user');



describe("update the user",()=>{
	let a;

	beforeEach((done)=>{
		a=createUser(done);
		
	});
	  function assertName(operation, done) {
    operation
      .then(() => User.find({}))
      .then((users) => {
        assert(users.length === 1);
        assert(users[0].name === 'Alex');
        done();
      });
  }
  function assertPost(operation,done)
  {
  		operation.then(()=>{
  							User.find({name:'Heet'}).then((user)=>{
  				 	assert(user[0].postCount==1);
  				 	
  				 });
  				 done();
  							});
  				 	
  }

	 it("should set and save",(done)=>{
	 	a.set('name','Alex');
	 	a.save().then(()=>{done();});
	 });
	it("should update the user",(done)=>{
		
		
		a.update({name:'Alex'}).then(()=>{done()});
		
		});
	it("should update the user",(done)=>{
		
		assertPost(User.findOneAndUpdate({name:'Heet'},{$inc: {postCount:1}}),done);
		
		});

		
});
// const assert = require('assert');
// const User = require('../src/user');

// describe('Updating records', () => {
//   let joe;

//   beforeEach((done) => {
//     joe = new User({ name: 'Joe', likes: 0 });
//     joe.save()
//       .then(() => done());
//   });

//   function assertName(operation, done) {
//     operation
//       .then(() => User.find({}))
//       .then((users) => {
//         assert(users.length === 1);
//         assert(users[0].name === 'Alex');
//         done();
//       });
//   }

  // it('instance type using set n save', (done) => {
  //   joe.set('name', 'Alex');
  //   assertName(joe.save(), done);
  // });

  // it('A model instance can update', (done) => {
  //   assertName(joe.update({ name: 'Alex' }), done);

  // });

  // it('A model class can update', (done) => {
  //   assertName(
  //     User.update({ name: 'Joe' }, { name: 'Alex' }),
  //     done
  //   );
  // });

  // it('A model class can update one record', (done) => {
  //   assertName(
  //     User.findOneAndUpdate({ name: 'Joe' }, { name: 'Alex' }),
  //     done
  //   );
  // });

  // it('A model class can find a record with an Id and update', (done) => {
  //   assertName(
  //     User.findByIdAndUpdate(joe._id, { name: 'Alex' }),
  //     done
  //   );
  // });

  
// });