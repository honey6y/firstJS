// Cho biến password là 1 string bất kỳ
// * Nếu password để trống thì in ra ‘password không để trống’
// * Nếu password nhỏ hơn 8 ký tự hoặc password dài hơn 16 ký tự thì in ra ‘password k hợp lệ’
// * Nếu không bị những lỗi trên thì in ra password hợp lệ 

var passWord = '';
var length = passWord.length;
if (passWord === '') 
    console.log('password không được để trống');
else if (8 > length || length > 16) 
    console.log('password k hợp lệ');
else console.log('password hợp lệ');
