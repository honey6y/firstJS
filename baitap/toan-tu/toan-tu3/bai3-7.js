/* Sử dụng toán tử ba ngôi   tìm nghiệm của phương trình bậc hai ax2 + bx + c = 0. Biết rằng:
Nếu a và b cùng bằng 0 thì phương trình vô nghiệm.
Nếu a=0 thì phương trình có một nghiệm là (-c/b).
Nếu b*b -4a*c < 0, thì phương trình vô nghiệm.
Nếu không, phương trình có hai nghiệm, dùng công thức tính nghiệm để tính. */

var x = 0;
var x1 = 0;
var x2 = 0;
var a = 2;
var b = -6;
var c = 4;
var delta = b**2 - 4*a*c;
x = a===0 && b===0 ? null : delta < 0 ? null : a === 0 ? (-c/b) : x1 ;
if (x === null)
console.log('phuong trinh vo nghiem');
else if (x === (-c/b))
console.log('phuong trinh co 1 nghiem x = ', x);
else console.log('phuong trinh co 2 nghiem la:');


x1 = x === null ? null : x === (-c/b) ? (-c/b) : (-b + Math.sqrt(delta))/(2*a);
x2 = x === null ? null : x === (-c/b) ? (-c/b) : (-b - Math.sqrt(delta))/(2*a);

// x1 = (-b + Math.sqrt(delta))/(2*a);
// x2 = (-b - Math.sqrt(delta))/(2*a);
console.log('x1 =',x1);
console.log('x2 =',x2);
