// Bai 6:
var x = [1,3,5];
x[0] = x[2];
x[1] = x[0];
// console.log(x);
// x = [5, 5, 5]

// Bai 7:
var x = [1,3,5];
var y = [0,5,7];
x[0] = x[1] + y[2];
y[1] = y[2] - x[0];
// console.log(x, y);
// x = [10, 3, 5]
// y = [0, -3, 7]

// Bai 8:
var x = [1,3,5,8];
x[0] = x[x.length-1];
// console.log(x);
// x = [8, 3, 5, 8]

// Bai 9:
var x = [1,3,5,8];
var temp = x[x.length-1]; 
x[x.length-1] = x[0]; 
x[0] = temp; 
// console.log(x);
// x = [8, 3, 5, 1]
