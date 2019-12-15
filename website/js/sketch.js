
function setup() {
  createCanvas(400, 400);
  background(51);
  var data = loadJSON('/get/title/a', gotData);
  console.log('running');
}

function gotData() {
  console.log("data loaded");
}
