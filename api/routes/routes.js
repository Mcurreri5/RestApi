'use strict';
var fs=require('fs');
var data=fs.readFileSync('package.json', 'utf8');
var courses=JSON.parse(data);
module.exports = function(app) {

  // Routes

//CRN lookup
app.get('/get/crn/:word', searchWord);

function searchWord (req,res){
  var word = request.params.word;
  var reply;
  if (data[word]){
    reply = {
      status: "found",
      word: word,
      score: data[word]
    }
  }else{
    reply= {
      status: "not found",
      word: word
    }
  }
}


//Title Lookup
app.get('/get/title/:key',function(req,res){
var course = courses.filter(function(val){
  return val.name === req.params.name;
});
res.send(course);

 console.log("success");

});

//instructer Lookup
app.get('/get/prof/:key',function(req,res){
var course = courses.filter(function(val){
  return val.professor === req.params.professor;
});
res.send(course);

 console.log("success");

});

//day Lookup
app.get('/get/day/:key',function(req,res){
var course = courses.filter(function(val){
  return val.day === req.params.day;
});
res.send(course);

 console.log("success");

});

//time Lookup
app.get('/get/time/:key',function(req,res){
var course = courses.filter(function(val){
  return val.time === req.params.time;
});
res.send(course);

 console.log("success");

});

//type Lookup
app.get('/get/type/:key',function(req,res){
var course = courses.filter(function(val){
  return val.type === req.params.type;
});
res.send(course);

 console.log("success");

});
}
