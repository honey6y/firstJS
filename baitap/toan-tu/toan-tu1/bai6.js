// Khai báo biến a ; b ; c lần lượt là  chiều cao , chiều rộng , chiều dài của một hình hộp chữ nhật . 
// a ) Tính thể tích V của hình hộp chữ nhật trên (V=a*b*c )  
// b ) Kiểm tra xem Hình hộp chữ nhật trên có phải la hình lập phương hay không . Nếu có thì tính thể tích của hình Lập phương trên  . 
// c ) Tinh đường chéo D của hình hộp chữ nhật trên . 
// d ) tính chu vi P của hình hộp chữ nhật  
// e ) Tính diện tích xung quanh của hinh hộp chữ nhật trên  .  
// f  ) Tính diện tích toàn phần của hình hộp chữ nhật 

var a = 7;
var b = 5;
var c = 6;
var theTich = 0;
theTich = a * b * c;

var duongCheo = 0;
duongCheo = (a**2 + b**2 + c**2)**(1/2);

var p = 0;
p = (a + b + c) * 4;

var areaAround = 0;
areaAround = 2 * (b + c) * a;

var areaTotal = 0;
areaTotal = areaAround + 2 * b * c;

// console.log(theTich);

// if (a === b && b === c)
// console.log('Hình hộp là hình lập phương, có thể tích là:', theTich);
// else
// console.log('Hình hộp là hình hộp chữ nhật');
// console.log('đường chéo của hình hộp chữ nhật là:', duongCheo);
// console.log('chu vi của hình hộp chữ nhật là:', p);
// console.log('diện tích xung quanh của hình hộp chữ nhật là:', areaAround);
// console.log('diện tích toàn phần của hình hộp chữ nhật là:', areaTotal);