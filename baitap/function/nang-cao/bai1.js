/* 
( price là giá ; store : số lượng còn lại ) 
a ) Viết function tìm kiếm sản phẩm theo tên  . Nếu không tìm thấy thì thì in ra “Không tìm thấy “ 
b ) Viết function tính tổng số sản phẩm có trong shop.
c ) Viết function tính tiền sản phẩm và cập nhật số lượng sản phẩm còn lại trong shop . 

đầu vào là chuỗi string tên sản phẩm , và số lượng mua . 
Nếu số sản phẩm còn lại trong shop  =< 0 thì in ra “ Shop đã hết SP bạn cần mua “  */

var shop = [
    {id: 1, product:'Dày da', price: 259000, store: 100},
    {id: 2, product: 'Dép lào', price: 129000, store: 230},
    {id: 3, product: 'Dày cao gót', price: 749000, store: 130},
    {id: 4, product: 'Dép tông', price: 499000, store: 240},
] 
// function findName (proName) {
//     let i = 0
//     let check = 0;
//     for (; i < shop.length; i++) {
//         let product = shop[i]['product'];
//         if (proName === product) {
//             check++
//             break;
//         };
//     };
//     if (check) {
//         return console.log(shop[i]); 
//     } else {
//         return console.log('khong tim thay');
//     }
// }
// var testFindName = 'asdads'
// findName(testFindName)

// function totalProduct (productData) {
//     let totalPro = 0;
//     for (let x in productData) {
//         totalPro += productData[x]['store']
//     }
//     return totalPro;
// }
// console.log('tong so san pham trong shop la:', totalProduct(shop));

function chargeEachProduct (proName, amount) {
    let charge = 0;
    let i = 0;
    for (; i < shop.length; i++) {
        if (proName === shop[i]['product']) {
            break;
        };
    };
    if (amount <= shop[i]['store']) {
        charge = amount * shop[i]['price'];
        shop[i]['store'] -= amount;
        return console.log(charge);;
    } else {
        if (shop[i]['store'] <= 0) {
            return console.log('shop da het san pham ban can mua');
        } else {
            return console.log(`shop chi con ${shop[i]['store']} san pham, vui long mua it hon so luong ton kho`);
        }
    };
}
chargeEachProduct ('Dép lào', 230);