/* Viết function có đầu vào là 1 string
	function trả ra string mới sau khi đã loại bỏ khoảng trống thừa ở đầu và ở cuối string
	ví dụ:
string = ‘     hello mọi người     ‘  => newString = ‘hello mọi người’ */

// function clearSpace (string) {
//     let newString = '';
//     newString = string.trim();
//     return newString;
// }

function clearSpace (string) {
    let newString = '';
    let first = 0;
    let last = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === ' ') {
            continue;
        };
        if (string[i] !== ' ') {
            first = i;
            break;
        };
    };

    for (let i = string.length-1; i >= 0 ; i--) {
        if (string[i] === ' ') {
            continue
        };
        if (string[i] !== ' ') {
            last = i
            break;
        };
    };
    // for (let i = first; i <= last; i++) {
    //     newString += string[i];
    // }
    newString = string.slice(first, last+1);
    return newString;
};

var strTest = '     hello mọi người     ';
var result = clearSpace(strTest);
console.log(result);