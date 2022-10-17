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
    {name: 'Chu Minh Thuan', age: 13,},
];

//5.1 in ra các tên có tuổi băng nhau
const sameAge = age => data.filter(value => value['age'] === age);
// console.log(sameAge(13));

//5.2 Giả sử một form đăng nhập yêu cầu nhập tên và tuổi, Nếu nhập đúng tên và tuổi thì đăng nhập thành công, nếu sai thì thêm vào mảng.
const login = (user, age) => {
    if (data.filter(value => value['name'] === user && value['age'] === age).length) {
        console.log('Dang nhap thanh cong');
    } else {
        data.push({name:user, age: age})
    }
}
login('Chu Minh Thuan', 16)

// console.log(data);