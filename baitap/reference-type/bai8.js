let hangHoa = [
    {ten: 'Rx-78-2', size:'MG', giaNiemYet: 35500, noiNhap:'Han Quoc', khoiLuong: 540},
    {ten: 'Rx-78-2', size:'HG', giaNiemYet: 12500, noiNhap:'Han Quoc', khoiLuong: 540},
    {ten: 'Sazabi', size:'MG', giaNiemYet: 50500, noiNhap:'Han Quoc', khoiLuong: 1250},
    {ten: 'Hi nu', size:'RG', giaNiemYet: 30500, noiNhap:'Han Quoc', khoiLuong: 870},
    {ten: 'Hi nu', size:'RG', giaNiemYet: 8800, noiNhap:'Nhat Ban', khoiLuong: 870},
    {ten: 'Hi V', size:'RG', giaNiemYet: 40500, noiNhap:'Han Quoc', khoiLuong: 1000},
    {ten: 'Strike Freedom', size:'MG', giaNiemYet: 56000, noiNhap:'Han Quoc', khoiLuong: 890},
    {ten: 'Strike Freedom', size:'HG', giaNiemYet: 4000, noiNhap:'Nhat Ban', khoiLuong: 570},
    {ten: 'Hi V', size:'RG', giaNiemYet: 8000, noiNhap:'Nhat Ban', khoiLuong:1000},
    {ten: 'Freedom 2.0', size:'MG', giaNiemYet: 45000, noiNhap:'Han Quoc', khoiLuong: 950},
    {ten: 'Freedom 2.0', size:'MG', giaNiemYet: 8000, noiNhap:'Nhat Ban', khoiLuong: 950},
];
let tiGia = [
    {ten: 'Nhat Ban', giaTri:187},
    {ten: 'Han Quoc', giaTri:20},
];
let giaShip = [
    {ten: 'Han Quoc', giaTien:9600, trongLuong: 10000},
    {ten: 'Nhat Ban', giaTien:4500, trongLuong: 10000},
];
// 1)
// Hãy tính giá trị của mỗi món hàng ở trong array Hàng Hóa khi về Việt Nam
// sẽ có giá trị thô (chưa tính lãi) là bao nhiêu?
// Biết giá trị thô tính bằng giá niêm yết nhân với giá trị tính theo tỉ giá của nơi nhập
// cộng với phí ship ứng với từng nơi nhập 
// Lưu ý giá tiền của bảng giá ship là đang theo tiền tệ của tên chưa tính theo chênh lệch tỉ giá  
// VD : ứng với trọng lượng là 10000 sẽ có giá ship là 9600 mệnh kim hàn quốc 
hangHoa.forEach(product => {
    for (let x of giaShip) {
        if (product['noiNhap'] === x['ten']) {
            product['giaTriTho'] = product['giaNiemYet'] + x['giaTien'] * product['khoiLuong'] / x['trongLuong'];
            break;
        };
    };
    for (let x of tiGia) {
        if (product['noiNhap'] === x['ten']) {
            product['giaTriTho'] *= x['giaTri'];
        };
    };
});
// console.log(hangHoa);

// 2)
// Hỏi nếu nhập 2 hàng Freedom 2.0 size MG từ hàn quốc,
// 5 Hi V từ hàn quốc và 3 strike freedom từ nhật Bản thì cần bỏ ít nhất số tiền là
// bao nhiêu để nhập hàng về 
const calMoneyProduct = (amount, productName, origin, dataProduct) => {
    let result = 0;
    for (let x of dataProduct) {
        if (x['ten'] === productName && x['noiNhap'] === origin) {
            result = x['giaTriTho'];
            break;
        }
    }
    return result * amount
}
let firstPro = calMoneyProduct(2, 'Freedom 2.0', 'Han Quoc', hangHoa)
let secondPro = calMoneyProduct(5, 'Hi V', 'Han Quoc', hangHoa)
let thirdPro = calMoneyProduct(2, 'Strike Freedom', 'Nhat Ban', hangHoa)
const calBill = (...productValue) => {
    return productValue.reduce((total, value) => total + value)
}
let firstBill = calBill(firstPro, secondPro, thirdPro);
// console.log(firstBill);

//3) So sánh giá trị chênh lệch của từng sản phẩm khi nhập từ hàn quốc và Nhật Bản

// const checkDifferent = productName => {
//     let priceKorea = null;
//     let priceJapan = null;
//     for (let i = 0; i < hangHoa.length; i++) {
//         let sanpham = hangHoa[i];
//         if (sanpham['ten'] === productName && sanpham['noiNhap'] === 'Han Quoc') {
//             priceKorea = sanpham['giaTriTho'];
//         }
//         if (sanpham['ten'] === productName && sanpham['noiNhap'] === 'Nhat Ban') {
//             priceJapan = sanpham['giaTriTho'];
//         }
//     }
//     let data = {
//         ten: productName,
//         giaHQ: priceKorea ? priceKorea : 0,
//         giaNB: priceJapan ? priceJapan : 0
//     }
//     data.different = data['giaHQ'] - data['giaNB']
//     return data;
// }

// let kq = hangHoa.reduce((total, value) => [...total, checkDifferent(value['ten'])], [])
// console.log(kq);

let kq = hangHoa.map(item=>{
    let list = hangHoa.filter(sp=>{
        return sp.ten == item.ten
    })
    let itemHQ, itemNB = null

    if(list.length == 2){
        list[0].noiNhap === 'Han Quoc' ? itemHQ = list[0] : itemNB = list[0];
        list[1].noiNhap === 'Han Quoc' ? itemHQ = list[1] : itemNB = list[1];
    } else{
        list[0].noiNhap === 'Han Quoc' ? itemHQ = list[0] : itemNB = list[0];
    };

    let data = {
        ten: item.ten,
        giaHQ: itemHQ ? itemHQ['giaTriTho'] : 0,
        giaNB: itemNB ? itemNB['giaTriTho'] : 0,
    }
    data.chenhLech = data.giaHQ - data.giaNB;
    return data;
})


let ketQuaCuoi = kq.filter((obj, index) => {
    return index === kq.findIndex(value => value['ten'] === obj['ten']);
})
// console.log(ketQuaCuoi);

//4) Viết hàm find(thuoctinh, giatri) in ra những phần tử thỏa mãn yêu cầu tìm kiếm
// find(size, MG)
const find = (properties, value) => hangHoa.filter(product => product[properties] === value)
console.log(find('ten', 'Sazabi'));