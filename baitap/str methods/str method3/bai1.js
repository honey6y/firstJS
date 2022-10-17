let str1 = 'Ngay moi vui ve';

//1.1 Dùng .include để kiểm tra xem 'vui' có trong câu trên không
// console.log(str1.includes('vui'));

//1.2 Hãy tách các từ trong str1 và in trong 1 array mới kết quả yêu cầu ['Ngay', 'moi', 'vui', 've']
let newArr = str1.split(' ');
// console.log(newArr);

//1.3 Hãy viết hoa chữ cái đầu và in lại kết quả yêu cầu 'Ngay Moi Vui Ve'
let newArr2 = newArr.map(value => value[0].toUpperCase() + value.slice(1));
// console.log(newArr2);

//1.4 Hãy thay vui thanh VUI gợi ý dùng replace
let newStr = str1.replace(/vui/g,'VUI');
// console.log(newStr);

//1.5 Hãy lấy ký tự tại vị trí thứ 4
// console.log(`ky tu tai vi tri thu 4 la:'${str1[4]}'`);

//1.6 Hãy in lại str1 thành 'vui ve Ngay moi'
let loopLength = Math.floor((newArr.length-1)/2)
for (let i = 0; i <= loopLength; i++) {
    newArr.unshift(newArr[newArr.length-1])
    newArr.pop()
}
let newStr2 = newArr.join(' ')
console.log(newStr2);