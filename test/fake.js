var should = require('should');

describe('Fake Test', function() {

  //setup --------------------------------------
  beforeEach(function(done) {

    done();
  });

  //teardown --------------------------------------
  afterEach(function(done) {

    done();
  });


  it('should pass', function(done) {

    true.should.equal(true, 'true should be true');
    done();
  });

});