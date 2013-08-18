require('../app.js');

describe('node app', function(){
	it('should return list of languages', function(done){
		done.should.have.length(3);
	});
});