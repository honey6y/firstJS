let string = 'nguyen thanh tung';
let newStr = string.split(' ').map(value => value[0].toUpperCase() + value.slice(1)).join(' ')
console.log(newStr);