let ttSach = [
    {ten: 'Vuot len chinh minh', danhGia: 'A', nhaXB: 'Kim dong', ngayPhatHanh: '12/5/2018', giaNhap: 20000},
    {ten: 'Putin', danhGia: 'A', nhaXB: 'tuoi tre', ngayPhatHanh: '12/5/2019', giaNhap: 12000},
    {ten: 'Cach lam giau', danhGia: 'B', nhaXB: 'Kim dong', ngayPhatHanh: '16/6/2018', giaNhap: 15000},
    {ten: 'Cach de lam Vuong Tu', danhGia: 'C', nhaXB: 'tuoi tre', ngayPhatHanh: '8/8/2017', giaNhap: 30000},
    {ten: 'Cach de hack facebook', danhGia: 'B', nhaXB: 'Kim dong', ngayPhatHanh: '11/5/2019', giaNhap: 20000},
    {ten: 'ngay mai tuoi sang', danhGia: 'C', nhaXB: 'tuoi tre', ngayPhatHanh: '16/7/2018', giaNhap: 40000},
    {ten: 'Lam the nao de hieu 1 nguoi', danhGia: 'A', nhaXB: 'ban mai', ngayPhatHanh: '16/5/2017', giaNhap: 50000},
    {ten: 'cach tap gym', danhGia: 'B', nhaXB: 'tuoi tre', ngayPhatHanh: '13/4/2020', giaNhap: 30000},
];
let nxBan = [
    {ten: 'Kim dong', chiPhi: 5000},
    {ten: 'tuoi tre', chiPhi: 15000},
    {ten: 'ban mai', chiPhi: 10000},
];
let bienLai = [
    {tenCH: 'HCM',
     sach:[
        {ten:'Vuot len chinh minh', soLuong:150},
        {ten:'Putin', soLuong:50},
        {ten:'Cach lam giau', soLuong:80},
        {ten:'Cach de hack facebook', soLuong:20},
    ]},
    {tenCH: 'HN',
     sach:[
        {ten:'Vuot len chinh minh', soLuong:150},
        {ten:'Putin', soLuong:100},
        {ten:'Cach lam giau', soLuong:80},
        {ten:'Cach de hack facebook', soLuong:80},
        {ten:'Cach de lam Vuong Tu', soLuong:80},
        {ten:'ngay mai tuoi sang', soLuong:60},
        {ten:'Lam the nao de hieu 1 nguoi', soLuong:60},
    ]},
    {tenCH: 'SG',
     sach:[
        {ten:'Vuot len chinh minh', soLuong:50},
        {ten:'Putin', soLuong:100},
        {ten:'ngay mai tuoi sang', soLuong:60},
        {ten:'Cach de hack facebook', soLuong:20},
    ]},
    {tenCH: 'DN',
     sach:[
        {ten:'Lam the nao de hieu 1 nguoi', soLuong:50},
        {ten:'Putin', soLuong:50},
        {ten:'Cach lam giau', soLuong:30},
        {ten:'Cach de hack facebook', soLuong:20},
    ]},
    {tenCH: 'NA',
     sach:[
        {ten:'cach tap gym', soLuong:50},
        {ten:'Putin', soLuong:50},
        {ten:'Cach lam giau', soLuong:30},
        {ten:'Lam the nao de hieu 1 nguoi', soLuong:20},
    ]},
];
let mucTieu = [
    {danhGia: 'A', soLuong: 500},
    {danhGia: 'B', soLuong: 300},
    {danhGia: 'C', soLuong: 100},
];
// Hãy in lại ttsach có tên viết hoa ở đầu mỗi chữ VD: Cach Tap Gym 
ttSach.forEach(book => {
    book['ten'] = book['ten'].split(' ')
    let newTen = (book['ten'].map(word => word[0].toUpperCase() + word.slice(1))).join(' ')
    book['ten'] = newTen;
})
// console.log(ttSach);

// Hãy in lại ttsach theo danh sach ngày xuất bản gần nhất tới xa nhất 
ttSach.sort((a,b) => parseInt(b['ngayPhatHanh'].split('/').reverse().join())
- parseInt(a['ngayPhatHanh'].split('/').reverse().join()))
// console.log(ttSach);

// Giá của mỗi sách khi bán = giaNhap + chiPhi 

ttSach.forEach(book => {
    for (let i = 0; i < nxBan.length; i++) {
        if (book['nhaXB'] === nxBan[i]['ten']) {
            book['giaBan'] = book['giaNhap'] + nxBan[i]['chiPhi']
            break;
        }
    }
})
// console.log(ttSach);

// bienLai là ứng với các đại lý phân phối sách  thì nếu tất cả đại lý bán hết số sách đã 
// được nêu của từng chi nhánh hãy in ra kết quả là đã đạt đủ chỉ tiêu được đề ra ở bảng mucTieu 
// hay chưa và nếu thiếu thì cần bán bao nhiêu sách nữa mới đạt được chỉ tiêu 

// let soldByName = bienLai.reduce((total, {tenCH, sach}) => {
//     sach.forEach(bookItem => {
//         if (!total[bookItem['ten'].toUpperCase()]) {
//             total[bookItem['ten'].toUpperCase()] = bookItem['soLuong'];
//         } else {
//             total[bookItem['ten'].toUpperCase()] += bookItem['soLuong'];
//         }
//     })
//     return total;
// }, {})
// // console.log(soldByName);

// let soldByRating = ttSach.reduce((total, book) => {
//     if (!total[book['danhGia']]) {
//         total[book['danhGia']] = soldByName[book['ten'].toUpperCase()]
//     } else {
//         total[book['danhGia']] += soldByName[book['ten'].toUpperCase()]
//     }
//     return total
// }, {});
// console.log(soldByRating);
// let ketQua = mucTieu.map(taget => {
//     let result = {};
//     let sold = 0;
//     result['Danh gia'] = taget['danhGia'];
//     for (let x in soldByRating) {
//         if (x === taget['danhGia']) {
//             sold = soldByRating[x]
//         break;
//         }
//     }
//     if (sold >= taget['soLuong']) {
//         result['KPI'] = 'hoan thanh';
//     } else {
//         result['KPI'] = 'chua hoan thanh'
//         result['con thieu'] = taget['soLuong'] - sold;
//     }
//     return result;
// })
// console.log(ketQua);