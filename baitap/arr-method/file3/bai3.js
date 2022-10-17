/* 3.1 dùng .sort  để sắp xếp mảng object có tuổi tăng dần
3.2 dùng .sort để sắp xếp mảng theo ngày tham gia của học viên
3.3 dùng .filter để tìm ra những học viện tham gia trước tháng 2
3.4 dùng .map để tạo mảng mới, viết hoa toàn bộ Tên học viện : (Trung => TRUNG) 
gợi ý : dùng toUppercase để viết hoa */
var persons =[{
    name: 'Trung',
    class: 'Nodemy01',
    dateJoin: '05-02-2020',
    age: 20
}, {
    name: 'Phong',
    class: 'Nodemy01',
    dateJoin: '06-01-2020',
    age: 19
}, {
    name: 'Nam',
    class: 'Nodemy02',
    dateJoin: '25-01-2020',
    age: 20
}];
persons.sort((a,b) => a['age'] - b['age']);

var persons = persons.map((value) => {
    value['dateJoin'] = value['dateJoin'].split('-').reverse().join('-')
    return value;
    }
);
// console.log(persons);
persons.sort((a,b) => {if (a['dateJoin'] < b['dateJoin']) return -1;});
// console.log(persons);
var beforeFeb = persons.filter((value) => value['dateJoin'] < '2020-02');
// console.log(beforeFeb);
var nameUppercase = persons.map((value) => {
    value['name'] = value['name'].toUpperCase();
    return value;
})
console.log(nameUppercase);
