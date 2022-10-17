/* Khai báo x ;y lần lượt là chiều dài và chiều rộng  của hình chữ nhật XYZT  
a ) tính chu vi của hình Chữ nhật XYZT 
b ) Tính diện tích của hình chữ nhật XYZT
c  ) Kiểm tra xem XYZT có phải hình vuông không ?
Nếu có thì tính chu vi và diện tích của hình Vuông trên .  */

var x = 6;
var y = 6;
var p = 0;
p = x*2 + y*2;
console.log('chu vi cua hinh chu nhat XYZT la:', p);
var s = 0;
s = x*y;
console.log('dien tich cua hinh chu nhat XYZT la:', s);
if (x == y) {
    console.log('XYZT la hinh vuong, co chu vi', x * 4, 'va dien tich la', x**2);
}
else console.log('XYZT khong phai la hinh vuong');