var a = 20;
console.log("a value is: " + a);

a= 45;
console.log("a value is: " + a)

var b = 20.2;

//string value
var c = "Visesh";

//Array
var arr = [1,40, 30, 32];
console.log(arr);
console.log(arr[1]);

//add a new element 
arr.push(99);
console.log(arr);

arr.push(100);
console.log(arr);

//to remove an array element
arr.pop();
arr.pop();
console.log(arr);

//array can store any data type
var d = [100, "u", 30.1]
console.log(d);

//array inside array
var e = [ [9,4,5], [18,45,32], [8,5,3], "Visesh" ]
console.log(e)





function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}