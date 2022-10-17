var x = 8   // x = 8
var a = 1 + x++ + 9 // a = 18   x = 9
var b = 7 + ++x + 3 // b = 20   x = 10
var c = 5 + x-- + 10    // c = 25   x = 9
var d = 6 + --x + 11    // d = 25   x = 8
// x = 8    a = 18   b = 20  c = 25  d = 25  
// a,b,c d có giá trị là bao nhiêu ?
console.log(x, a, b, c, d);