/* a ) Tạo ra một array persons mới . (newPersons)
a ) Thêm {firstname : "Điền họ của bạn…", lastname: "Điền họ của ban …."} vào cuối Array newPersons. 
b)Xóa {firstname : "Trần", lastname: "Huy"}, và Đổi thành 
{firstname : "Nguyễn", lastname: "Hoàng"}.
c ) Áp dụng map thêm key address:"Hà Nội"  vào mỗi value của array newPersons .  */

const persons = [
    {firstname : "Đào", lastname: "Văn Anh"},
    {firstname : "Trần", lastname: "Huy"},
    {firstname : "Lê", lastname: "Hoàng"}
];

var newPersons = [...persons];
var addPerson = {firstname : "Lê", lastname: "Ngọc Thái"};
newPersons.push(addPerson);
// console.log(newPersons);
var replcePerson = {firstname : "Nguyễn", lastname: "Hoàng"};
// filter => push index vào mảng mới
// for splice các vị trí với index trong mảng mới

var indexReplace = newPersons.findIndex((value, index) => {
    return (value['firstname'] === "Trần" && value['lastname'] === "Huy")
})
newPersons.splice(indexReplace,1,replcePerson)
// console.log(newPersons);

newPersons = newPersons.map((value, index) => {
    value['address'] = 'Ha Noi';
    return value;
})
console.log(newPersons);