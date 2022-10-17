/* viết function có đầu vào là 1 string
Thay thế tất cả dấu cách ‘ ‘ trong string bằng dấu ‘-‘ và trả ra string mới */

var strTest = "Thay thế tất cả dấu cách ' ' trong string bằng dấu '-' và trả ra string mới"

function replaceSpace (str) {
    // let newArr = str.split(' ');
    // newArr = newArr.join('-');
    // return newArr;
    let newStr = str.replace(/ /g,'-')
    return newStr
}

var resultTest = replaceSpace(strTest);
console.log(resultTest);
console.log(strTest);