let array = [1,5,6,8,7,9];
//hãy copy array trên ra array mới newArr
//trong newArr hãy thêm số 100 vào cuối sao cho array không bị thay đổi

// let newArr = [...array];
// newArr.push(100)
// console.log(newArr);
// console.log(array);

let newArr = JSON.parse(JSON.stringify(array));
newArr.push(100);
console.log(newArr);
console.log(array);