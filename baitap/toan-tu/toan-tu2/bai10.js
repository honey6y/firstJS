/* Viết chương trình kiểm tra nhiệt độ:
1. Nhỏ hơn 20 độ C thông báo tăng nhiệt độ.
2. Lớn hơn 100 độ C thông báo giảm nhiệt độ
3. Còn lại nhiệt độ đủ dùng. */

var temp = 99;
if (temp < 20)
console.log('tang nhiet do');
else if (temp > 100)
console.log('giam nhiet do');
else console.log('nhiet do du dung');