/* a, sắp xếp array tăng dần theo ĐỘ DÀI CHUỖI
b, hãy tạo array mới chỉ chứa những người tên trung */
var array = ['nguyen thanh trung', 'nguyen van nam', 'vu thanh trung', 'hoang tu linh'];

//a,
array.sort((a,b) => a.length < b.length ? -1 : 1);
// console.log(array);

//b,
var findName = 'trung';
// var newArr = array.filter(value => value.includes(findName, value.length-findName.length));
var newArr = array.filter(value => value.endsWith(findName))
console.log(newArr);

