let persons = [{
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
//4.1 dùng .sort  để sắp xếp mảng object có tuổi tăng dần
// persons.sort((a,b) => a.age - b.age);
// console.log(persons);

//4.2 dùng .filter để tìm ra những học viện tham gia trước tháng 2
// let joinBeforeFeb = persons.filter(value => (parseInt(value['dateJoin'].split('-')[1]) >= 2))
// console.log(joinBeforeFeb);

//4.3 dùng .sort để sắp xếp mảng theo ngày tham gia của học viên
// persons.sort((a,b) => a['dateJoin'].split('-').reverse().join() < b['dateJoin'].split('-').reverse().join() ? -1 : 0)
console.log(new Date(persons[0]['dateJoin']));
console.log(new Date(persons[1]['dateJoin']));
console.log(new Date(persons[2]['dateJoin']));
// persons.sort((a,b) => (new Date(a['dateJoin']).getTime()) < (new Date(b['dateJoin']).getTime()) ? -1 : 0)
// console.log(persons);

//4.4 dùng .map để tạo mảng mới, viết hoa toàn bộ Tên học viện : (Trung => TRUNG) 
// let uppercasePersons = persons.map(value => {
//     value['name'] = value['name'].toUpperCase();
//     return value;
// });
// console.log(uppercasePersons);