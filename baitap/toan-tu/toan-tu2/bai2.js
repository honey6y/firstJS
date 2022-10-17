var x = 5;
var a = 5 + x++ + 10;
var b = 5 + ++x +10;
var c = 5 + x-- + 10;
var d = 5 + --x +10;
// x = 5    a = 20  b = 22  c = 22  d = 20
// Hỏi: a, b, c, d có giá trị là bao nhiêu?

// console.log(x, a, b, c, d);