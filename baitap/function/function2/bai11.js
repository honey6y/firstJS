/* viết function có đầu vào là 1 string
Thay thế tất cả dấu cách ‘ ‘ trong string bằng dấu ‘-‘ và trả ra string mới  */

var strInput = '1232 123 123 12 312 312 3 w e  df sd 23234 2';

function replaceSpace (string) {
    let result = '';
    // result = string.replace(/ /g, '-');

    // for (let i in string) {
    //     if (string[i] !== ' ') {
    //         result += string[i];
    //     };
    //     if (string[i] === ' ') {
    //         result += '-';
    //     };
    // };

    string = string.split(' ');
    result = string.join('-');
    return result;
};

var strOut = replaceSpace(strInput);
console.log(strOut);