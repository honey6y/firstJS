/* Cho chuỗi str = ‘dotimraduockytucantim’
Hãy kiểm tra xem chuỗi có chứa ký tự ‘k’ không. Nếu có in ra + vị trí của ký tự trong mảng */

var str = 'dotimraduockytucantim';
var kIndex = [];
for (let i = 0; i < str.length; i++) {
    if (str[i] === 'k') {
        kIndex.push(i)
    }
}
if (kIndex.length > 0) {
    console.log('vi tri cua ky tu k trong mang la:',kIndex);
} else {
    console.log('mang khong co ky tu k');
}


var lookMatch;
lookMatch = str.match(/k/g);
var kIndex2 = []
if (lookMatch) {
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf('k', i) > -1) {
            kIndex2.push(str.indexOf('k',i));
            i += str.indexOf('k', i) + 1;
        }
        if (str.indexOf('k', i) === -1) {
            break
        }
    }
}
if (kIndex2.length > 0) {
    console.log('vi tri cua ky tu k trong mang la:',kIndex2);
} else {
    console.log('mang khong co ky tu k');
}