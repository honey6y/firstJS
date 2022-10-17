/*  a ) áp dụng array.sort  sắp xếp array trên theo thứ tự tăng dần  . 
 b )  áp dụng array.map  , Tạo ra một array mới với các giá trị gấp 2 array cũ . 
// kết quả trả về [2,6,14,16,18,0,22,6,4] .
c  ) cho array3= [1,2,3,5,1] hãy thêm array3 vào phía trước của array và in ra kết quả . 
d ) cho array3= [1,2,3,5,1] hãy thêm array3 vào vị trí số 5 của array và in ra kết quả (ÁP dụng array.splice )
e ) áp dụng array.filter lọc ra các phần tử lẻ , các phẩn tử chẵn .  
f )  Thêm số 5 vào giữa array . */
var array = [1 ,3,7,8,9,0,10,3,2]; 
array.sort((a,b) => a-b);
// console.log(array);
var newArr = array.map(value => value*2)
// console.log(newArr);
var array3= [1,2,3,5,1];
// array.unshift(...array3);
// console.log(array);

// array.splice(5,0,...array3);
// console.log(array);

var arrLe = array.filter(value => value % 2 !== 0);
var arrChan = array.filter(value => value % 2 === 0);
// console.log(arrLe);
// console.log(arrChan);

array.splice(array.length/2,0,5)
console.log(array);