var request = require("request");
var expect = require("chai").expect;

//part 1 test for google home page
describe("Google.com", function() {
  it("should have a HTTP of 200-success", function(done){
    request('https://google.com/', function(err, res, body){
      // console.log("This responce");
      // console.log(res);
      // console.log("body");
      // console.log(body);
      expect(res.statusCode).to.equal(200);
      //expect(res.statusCode).to.equal(300);
      done();
    });
  });
});

//part 2
describe("Amazon.com", function(){
  it("should have a HTTP of 200-success", function(done){
    request("http://www.amazon.com/", function(err, res, body){
      expect(res.statusCode).to.equal(200);
      //expect(res.statusCode).to.equal(200);
      done();
    });
  });
});

//part5 test localhost 3000
describe("localhost apis", function(){
  it("should have a HTTP 200-success", function(done){
    request("http://localhost:3000/api/phrases", function(err, res, body){
      expect(res.statusCode).to.equal(200);
      //expect(res.statusCode).to.equal(400);
      done();
    });
  });
});

//part6 test for posting one phrase to phrases
var entry; //dummy entry
describe("localhost api/phrases/id", function(){
  it("should have a HTTP 201-success when finding id", function(done) {
    request.post("http://localhost:3000/api/phrases", {form:{word:'hi', definition: 'It is a greeting'}}, function(err, res, body){
      expect(res.statusCode).to.equal(201);
      //expect(res.statusCode).to.equal(300);
      entry = body;
      console.log("I just added"+ entry);
      done();
    });
  });
});
// test of updateing phrase
describe("localhost api/phrases/id", function(){
  it("should have a HTTP 200-success when updated id", function(done){
    entry = JSON.parse(entry);
    entry.word = "Boss";
    console.log("this should show Boss-", entry.word );
    request.put("http://localhost:3000/api/phrases/"+ entry.id, {form:entry}, function(err, res, body){
      expect(res.statusCode).to.equal(200);
      //expect(res.statusCode).to.equal(404);

      console.log("updated this entry-" + entry);
      done();
    });
  });
});


// // test to delete 
describe("localhost api/phrases/id delete", function(){
  it("should have a HTTP 200-sucess when deleting", function(done){
    request.del("http://localhost:3000/api/phrases/" + entry.id, function(err, res, body){
      expect(res.statusCode).to.equal(200);
      //expect(res.statusCode).to.equal(404);
      console.log("I deleted "+ entry);
      done();
    });
  });
});
