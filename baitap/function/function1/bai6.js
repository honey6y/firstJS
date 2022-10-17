/* viết function có đầu vào là 1 string
	Thay thế tất cả dấu cách ‘ ‘ trong string bằng dấu ‘-‘ và trả ra string mới
	VD 20 05 2015 => 20-05-2015 */


var strTest = '20 05 2015';
// function replaceSpace (string) {
//     let result = '';
//     result = string.replace(/ /g,'-');
//     // result = string.replaceAll(' ', '-');
//     return result;
// }

function replaceSpace (string) {
    let result = '';
    for (let x in string) {
        if (string[x] !== ' ') {
            result += string[x];
        }
        if (string[x] === ' ') {
            result += '-';
        }
    }
    return result;
}
var result = '';
result = replaceSpace(strTest);
console.log(result);

