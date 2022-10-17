/* a ) Copy array data03. Bằng  … 
b )  Sửa phần tử 'Dưa gang' thành 'Dưa hấu' 
c ) Thêm 'mận' vào giữa data03 . 
d ) Thêm 'Dứa' vào đầu của data03 và 'Chanh'  vào cuối data03 .  */

var  data03 = ['Cam', 'Xoài', 'Mít', 'Bưởi ', 'Quýt', 'Dưa gang', 'Dưa gang'];

var copyArr = [...data03];
var test = data03.indexOf('Dưa gang', undefined);
console.log(test);
function replace (string, arr) {
    // let newArr = [...arr]
    let arrIndex = [];
    let index;
    while (index !== -1) {
        index = arr.indexOf(string,index);
        if (index !== -1) {
            arrIndex.push(index);
            index++;
        }
    }
    for (let i = 0; i < arrIndex.length; i++) {
        arr[arrIndex[i]] = 'Dưa hấu';
    }
    return arr;
}

// function replace2 (string, arr) {
//     let newStr = arr.join(' , ');
//     newStr = newStr.replaceAll(string, 'Dưa hấu');
//     // newStr = newStr.replace(/`${string}`/g, 'Dưa hấu');
//     let newArr = newStr.split(',');
//     return newArr;
// }

// var test = replace('Dưa gang', data03);
// console.log(test);
replace('Dưa gang', data03);
// console.log(data03);

// var test2 = replace2('Dưa gang', data03);
// console.log(test2);
// console.log(data03);


data03.splice(data03.length/2, 0, 'mận')
console.log(data03);

data03.unshift('Dứa')
data03.push('Chanh');
console.log(data03);
