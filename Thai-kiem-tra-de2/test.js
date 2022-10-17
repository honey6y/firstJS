var arr = [3,1,1,1,2];
var count = 0;
var check = {};
arr.forEach(value => {
    var myVal = check[value]
    if (!myVal ) {
        check[value] = 1
    } else {
        check[value] = check[value] +1;
       
    }
})
console.log(check);
console.log(count)
// {
// 3: unique
// 1: unique
// }