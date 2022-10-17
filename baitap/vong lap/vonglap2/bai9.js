/* Cho 1 số n . Viết một chương trình để tính toán và in ra màn hình giai thừa của số đã nhập (n!)

Ví dụ:
Với n = 5, đầu ra được in ra màn hình là  "120"
Vì 5! = 5 * 4 * 3 * 2 * 1 = 120
Với n = 3, đầu ra được in ra màn hình là  "6"
Vì 3! = 3 * 2 * 1 = 6
Đầu vào: 1 số nguyên n nhập từ bàn phím
Điều kiện tiền đề:
1 ≤ n ≤ 20
Đầu ra: giai thừa của số đã cho n */

var n = 3;
if (n < 1 || n > 20) {
    console.log('vui long nhap so tu 1-20');
} else {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i
    }
    console.log(`giai thua cua ${n} la:`,factorial);
}