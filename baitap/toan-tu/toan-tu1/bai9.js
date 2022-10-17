// Khai báo biến x với giá trị mà người dùng nhập vào . 
// Sử dụng toán tử ba ngôi để thông báo cho người dùng biết số đó lớn hơn , nhỏ hơn hoặc bằng 20 hay không  ..

var x = 10;
var string1 = 'số lớn hơn 20';
var string2 = 'số bằng 20';
var string3 = 'số nhỏ hơn 20';
var stringPrint = '';
stringPrint = x > 20 ? string1 : (x == 20 ? string2 : string3);
console.log(stringPrint);