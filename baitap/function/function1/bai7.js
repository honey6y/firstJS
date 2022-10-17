/* Hãy viết function để xử lý data trên 
a, function trả về tên hàng hóa có danh số cao nhất trong shop
b, function trả về tên hàng hóa có danh số thấp nhất trong shop
c, function trả về tổng doanh thu của shop, biết doanh thu = doanh so * gia ban */

var sanPham = [
    {
      ten: "áo somi", gia: 100000,
      doanhSo: 100
    },
    {
      ten: "áo khoác", gia: 400000,
      doanhSo: 50
    },
    {
      ten: "áo phông", gia: 150000,
      doanhSo: 200
    },
];

function maxDoanhSo (productArr) {
    let productMax = productArr[0]['ten'];
    let max = productArr[0]['doanhSo'];
    for (let x in productArr) {
        if (productArr[x]['doanhSo'] > max) {
            max = productArr[x]['doanhSo'];
            productMax = productArr[x]['ten'];
        };
    };
    return productMax;
};
var productMax = maxDoanhSo(sanPham);
console.log(productMax);

function minDoanhSo (productArr) {
    let productMin = productArr[0]['ten'];
    let min = productArr[0]['doanhSo'];
    for (let x in productArr) {
        if (productArr[x]['doanhSo'] < min) {
            min = productArr[x]['doanhSo'];
            productMin = productArr[x]['ten']
        };
    };
    return productMin;
}
var productMin = minDoanhSo(sanPham);
console.log(productMin);

function doanhSo (productArr) {
    let doanhSo = 0;
    for (let x in productArr) {
        doanhSo += productArr[x]['gia'] * productArr[x]['doanhSo']
    }
    return doanhSo;
}
var doanhSoTong = doanhSo(sanPham);
console.log(doanhSoTong);