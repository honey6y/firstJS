// Viết chương trình nhập vào giá trị cho chuỗi message.
// * Nếu giá trị nhập vào là Employee thì hiển thị chuỗi Hello.
// * Còn lại nếu giá trị nhập vào là Director thì hiển thị chuỗi Greetings
// * Còn lại nếu giá trị nhập vào chuỗi rỗng thì hiển thị No login
// * Còn lại hiển thị chuỗi rỗng

var message = 'Director';
var hello = 'hello';
var director = 'greetings';
var noLogin = 'No login';
if (message === 'Employee') console.log(hello);
else if (message === 'Director') console.log(director);
else if (message === '') console.log(noLogin);
else console.log('');
