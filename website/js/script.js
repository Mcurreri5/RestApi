function loadData() {

const request = new XMLHttpRequest();
request.open('GET' , 'localhost:3000/get/title/a');

//define callback
request.onload = function (){
const data = JSON.parse(request.responseText);
console.log("test start");
console.log(data);
console.log("test end");

}
request.send();
}
