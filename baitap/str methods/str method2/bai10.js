let data = [
{name: 'Nguyen Van Thai', age: 11,},
{name: 'Hoang Manh Kien', age: 10,},
{name: 'Pham ThuyLinh', age: 12,},
{name: ' Nguyen Ngoc Tung', age: 11,},
{name: 'Vu Quang Thinh', age: 17,},
{name: 'Nguyen Minh Thuan', age: 13,},
{name: 'Nguyen Van Thai', age: 15,},
{name: 'Hoang Manh Kien', age: 10,},
{name: 'Pham ThuyLinh', age: 12,},
{name: ' Vu Ngoc Tung', age: 11,},
{name: 'Le Quang Thinh', age: 13,},
{name: 'Nguyen Minh Thuan', age: 13,},
{name: 'Nguyen Van Thai', age: 15,},
{name: 'Hoang Manh Kien', age: 10,},
{name: 'Hoang ThuyLinh', age: 12,},
{name: ' Nguyen Ngoc Tung', age: 11,},
{name: 'Le Quang Thinh', age: 16,},
{name: 'Chu Minh Thuan', age: 13,}];

// Hãy tìm người có họ Nguyen và có tuổi là 12;
let surnameNguyen = data.filter(value => value['name'].trim().startsWith('Nguyen') && value['age'] === 12)
// console.log(surnameNguyen);

// Hãy tìm người có tên Thinh và có tuổi là 15;
let findThinh15 = data.filter(value => value['name'].trim().endsWith('Thinh') && value['age'] === 15);
// console.log(findThinh15);

//Sắp xếp theo tuổi!! haha
data.sort((a,b) => a['age'] - b['age']);
// console.log(data);

// Thay thế những người tên tùng thành 19 tuổi
data.forEach(value => {
    if(value['name'].trim().endsWith('Tung')) {
        value['age'] = 19;
    }
    return value;
})
console.log(data);