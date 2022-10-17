let arr = ['thai', 'linh', 'tung', 'quan', 'khang'];

let data = [
    {name: 'Thai', age: 15,},
    {name: 'Kien', age: 10,},
    {name: 'Linh', age: 12,},
    {name: 'Tung', age: 11,},
    {name: 'Thinh', age: 16,},
    {name: 'Thuan', age: 13,},
];

let newData = data.filter(value => arr.join(' ').toUpperCase().match(value['name'].toUpperCase()));
console.log(newData);