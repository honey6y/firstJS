/* khai báo a ; b ;c  là  số đo 3 vong của  tam giác  ABC ..  
a ) tính chu vi của tam giác   
b ) Kiểm tra xem ABC có phải tam giác đều không . 
console.log để in ra kết quả . 
c ) Trường hợp ABC là tam giác đều  . Tính diện tích của Tam giác ABC . */


var a = 6;
var b = 6;
var c = 6;

var perimeter = 0;
perimeter = a + b + c;
console.log('chu vi cua tam giac la:',perimeter);
if (a === b && b === c ){
    console.log('day la tam giac deu.');
    let s = 0;
    s = (1/2) * a * b * (Math.sqrt(3)/2);
    console.log('dien tich cua tam giac ABC la:', s);
}
else console.log('day khong phai la tam giac deu.');