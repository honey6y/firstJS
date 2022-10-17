var x = 2;
var a = 8 + x++ + ++x - --x + x++ + 7; //8+2+4-3+3+7=21; x = 4
console.log(x);
var b = 5 + ++x + ++x + --x - x-- - ++x  + 10; //5+5+6+5-5-5+10 = 21; x = 5
console.log(x);
var c = 1 + x-- + --x - ++x + --x - 11; // 1+5+3-4+3-11=-3; x = 3
console.log(x);
var d = 15 + --x + --x - x++ +--x + 12; // 15 +2 +1 -1 +1 +12 = 30; x = 1
// a,b,c d có giá trị là bao nhiêu ?
console.log(x);
console.log(a, b, c, d);