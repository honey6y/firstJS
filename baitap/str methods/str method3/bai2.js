let ten = ['dao linh huong', 'tran ngoc diep', 'nguyen duy minh', 'dao minh nguyet', 'dao van anh'];
let thongTin = [
    {ten: 'dao linh huong', ngaySinh:'02/28/1998'},
    {ten: 'tran ngoc diep', ngaySinh:'02/12/1998'},
    {ten: 'nguyen duy minh', ngaySinh:'02/03/1998'},
    {ten: 'nguyen duy mạnh', ngaySinh:'02/03/1998'},
    {ten: 'le thanh tung', ngaySinh:'02/03/1998'},
    {ten: 'dao minh nguyet', ngaySinh:'02/20/1998'}
];
//2.1 Hãy in lại họ tên của những người trong array ten có chữ hoa ở đầu mỗi từ VD: Dao Linh Huong
// let newTen = ten.map(value => 
//     value.split(' ').map(valueNew => valueNew[0].toUpperCase() + valueNew.slice(1)).join(' '));
// console.log(ten);

//2.2 Hãy in lại thông tin ngày sinh của mỗi người trong bảng thông tin đang từ dạng mm/dd/yyyy thành dd/mm/yyyy
// thongTin = thongTin.map(value => {
//     let ngaySinhBuff = value['ngaySinh'].split('/');
//     ngaySinhBuff.unshift(ngaySinhBuff[ngaySinhBuff.length-1]);
//     ngaySinhBuff.pop();
//     ngaySinhBuff.reverse();
//     ngaySinhBuff = ngaySinhBuff.join('/');
//     value['ngaySinh'] = ngaySinhBuff;
//     return value;
// });
// console.log(thongTin);

//2.3 Hãy sắp xếp lại data trong array thongTin theo thứ tự ngày sinh tăng dần
// thongTin.sort((a,b) => a['ngaySinh'].split('/').reverse().join('/') < b['ngaySinh'].split('/').reverse().join('/') ? -1 : 0)
// console.log(thongTin);

//2.4 Hãy sắp xếp theo ngày sinh, nếu trùng ngày sinh thì xếp theo tên
// thongTin.sort((a,b) => {
//     if (a['ngaySinh'].split('/').reverse().join('/') < b['ngaySinh'].split('/').reverse().join('/')) {
//         return -1;
//     } else if (a['ngaySinh'].split('/').reverse().join('/') === b['ngaySinh'].split('/').reverse().join('/')) {
//         return a['ten'].split(' ').reverse().join(' ') < b['ten'].split(' ').reverse().join(' ') ? -1 : 0
//     } else {
//         return 0;
//     }
// })
thongTin.sort((a,b) => {
    if (new Date(a['ngaySinh']) < new Date(b['ngaySinh'])) {
        return -1;
    } else if (new Date(a['ngaySinh']).toDateString() === new Date(b['ngaySinh']).toDateString()) {
        let result = a['ten'].split(' ').reverse().join(' ') < b['ten'].split(' ').reverse().join(' ') ? -1 : 0
        return result;
    } else {
        return 0;
    }
})

console.log(thongTin);

// console.log('a' < 'b');
