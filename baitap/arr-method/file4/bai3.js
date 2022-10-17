/* a )  Tạo newArray chứa các giá trị chẵn của array3 (Áp dụng filter )
b) Tạo newArray2 chứa các giá trị lẻ của array3 và có giá trị lớn hơn 3. */
var array3 = [1,4,2,4,5,7,8,3,6,4,9,1,6,5,4,3,8,9];
var newArray = array3.filter(value => value % 2 === 0)
// console.log(newArray);
var newArray2 = array3.filter (value => (value > 3) && (value % 2 === 1))
console.log(newArray2);