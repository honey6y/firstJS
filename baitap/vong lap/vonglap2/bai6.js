/* Viết chương trình, người dùng nhập một năm bất kỳ và in ra năm đó có phải là năm nhuận hay không. */

var year = 2016;

if (year % 4 === 0) {
    console.log(year,'la nam nhuan');
} else {
    console.log(year,'khong phai la nam nhuan');
}