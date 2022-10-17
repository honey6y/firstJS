let tenKhach = [
    {ten: 'nguyen the su', gioBay: '11:30', diemDen: 'Nha Trang', veKhoang: 'S'}, 
    {ten: 'ngo van khoai', gioBay: '9:30', diemDen: 'Ha Noi', veKhoang: 'A'}, 
    {ten: 'ngo van khoai', gioBay: '9:30', diemDen: 'Nam Dinh', veKhoang: 'A'}, 
    {ten: 'tau dau hu', gioBay: '10:15', diemDen: 'Hai Phong', veKhoang: 'B'}, 
    {ten: 'chuyen lua gat', gioBay: '13:30', diemDen: 'Nha Trang', veKhoang: 'C'}, 
    {ten: 'le quan quy', gioBay: '14:30', diemDen: 'TP.HCM', veKhoang: 'A'}, 
    {ten: 'hoang hao hoa', gioBay: '11:30', diemDen: 'Nam Dinh', veKhoang: 'B'}, 
];
let choNgoi = [
    {ten: 'Ghe hang king', mave:'S'},
    {ten: 'Ghe hang thuong gia', mave:'A'},
    {ten: 'Ghe hang pho thong', mave:'B'},
    {ten: 'Ghe hang pho cap', mave:'C'},
];
let lichBay = [
    { gioBay: '11:30', diemDen:'Nha Trang', maMayBay: 'AB123' },
    { gioBay: '13:30', diemDen:'Nha Trang', maMayBay: 'GD178' },
    { gioBay: '11:30', diemDen:'Nam Dinh', maMayBay: 'BC452' },
    { gioBay: '9:30', diemDen:'Nam Dinh', maMayBay: 'AC452' },
    { gioBay: '14:30', diemDen:'TP.HCM', maMayBay: 'GD73' },
    { gioBay: '10:15', diemDen:'Hai Phong', maMayBay: 'FT351' },
];
//4.1 Hãy in lại tên của các khách hàng sao cho có từ viết hoa ở mỗi chữ cái vd : Nguen Van Nam
tenKhach.map(value =>
    value['ten'] = value['ten'].split(' ').map(valueNew => valueNew[0].toUpperCase() + valueNew.slice(1)).join(' '));
// console.log(tenKhach);

//4.2 Hãy sắp xếp lại array khách theo thời gian bắt đầu chuyến bay theo chiều tăng dần
tenKhach.sort((a,b) => parseInt(a['gioBay'].split(':').join('')) - parseInt(b['gioBay'].split(':').join('')))
// console.log(tenKhach);

//4.3 Hãy in ra thông các chuyến bay cùng địa điểm 
const findFlight = diemDen => lichBay.filter(value => value['diemDen'] === diemDen)
// console.log(findFlight('Nam Dinh'));

//4.4 Hãy in ra thông tin của những người cùng giờ bay và cho thêm dữ kiện họ ngồi ghế gì, trên những chuyến bay nào
const sameTimeFlight = strTimeFlight => {
    let result = tenKhach.filter(value => value['gioBay'] === strTimeFlight);
    result.forEach(value => {
        for (let x in choNgoi) {
            if (choNgoi[x]['mave'] === value['veKhoang']) {
                value['loaiGhe'] = choNgoi[x]['ten']
                break;
            }
        }
        for (let y in lichBay) {
            if (lichBay[y]['gioBay'] === strTimeFlight && lichBay[y]['diemDen'] === value['diemDen']) {
                value['chuyenBay'] = lichBay[y]['maMayBay']
                break;
            }
        }
        if (!value['chuyenBay']) {
            value['chuyenBay'] = 'Da khoi hanh / khong co thong tin'
        }
    })
    return result;
};
// console.log(sameTimeFlight('14:30'));

//4.5 Hãy in ra thông tin chi tiết của người bay vào 9h30 và có cả dữ liệu họ ngồi ghế ghì, trên những chuyến bay nào
console.log(sameTimeFlight('9:30'));