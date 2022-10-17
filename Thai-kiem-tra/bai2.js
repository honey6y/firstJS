/* a, sắp xếp array tăng dần
b, hãy tạo array mới chỉ chứa những người họ 'nguyen' */
var array = ['nguyen thanh tung', 'nguyen van nam', 'vu thanh trung', 'hoang tu linh','Le Ngoc Thai','Le Ngoc Thai','Le Ngoc Thai'];

//a,
array.sort((a,b) => b > a ? -1 : 0);
// console.log(array);

//b,
var findStr = 'nguyen'
var array2 = array.filter(value => value.indexOf(findStr) === 0);
// console.log(array2);

//c, tao array chi chua nhung nguoi ten Thai
var newArr = [];
array.forEach(value => {
    value = value.split(' ');
    newArr.push(value)
});
// console.log(newArr);
var findThai = 'Thai';
var tenThai = newArr.filter(value => value.lastIndexOf(findThai) === (value.length-1));
tenThai = tenThai.reduce((total, value) => {
    total.push(value.join(' '));
    return total;
},[]);
// console.log(tenThai);