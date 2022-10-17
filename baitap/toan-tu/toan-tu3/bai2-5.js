/* Cho biến button là 1 string và Biến page là 1 số nguyên từ 1 đến 10
Nếu biến button = ‘next’ thì page tăng 1 đơn vị
Nếu biến button = ‘prev’ thì page giảm 1 đơn vị
Nếu button nhận giá trị từ 1-10 thì page nhận giá trị tương tự
Nếu page = 10 và button = ‘next’ thì page vẫn = 10
Nếu page = 1 và button = ‘prev’ thì page vẫn = 1  */

var button = '9';
var page = 5;
if (button === 'next')
page++;
// console.log(page);
else if (button === 'prev')
page--;
else if (0 < button && button <= 10)
page = parseInt(button);
// console.log(page);
else if (page === 10 && button === 'next')
page = 10;
else if (page === 1 && button === 'prev')
page = 1;