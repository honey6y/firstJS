let arr = ['thai', 'linh', 'tung', 'quan', 'khang'];
let newArr = arr.map(value => value[0].toUpperCase() + value.slice(1));
console.log(newArr);