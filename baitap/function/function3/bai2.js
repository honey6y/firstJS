/* a, hãy update lại store của shop
b, hãy thêm tổng tiền cho từng order 
    // { id: 1, listProduct: [...], total: ...}

c, hãy viết function có đầu vào là array danh sách các đơn hàng và array danh sách hàng hóa 
    function trả về tổng doanh thu của shop dựa trên đầu vào 

d, hãy viết function createOrder có đầu vào là danh sách hàng hóa cần mua
    // VD [ {idSP: 1, buy: 2}, {idSP: 2, buy: 1}]

    function trả ra object chứa thông tin của order vừa tạo
    // { id: 1, listProduct: [...], total: ...}

    function cũng ghi giảm lượng tồn kho tương ứng với order vừa tạo
    function cũng cập nhật lại doanh thu cho shop

e, Hãy viết function cancelOrder có đầu vào là id của order muốn hủy
    
    Nếu id được tìm thấy
        function sẽ loại bỏ order khỏi orderData 
        function cập nhật lại doanh thu
        function sẽ cập nhật lại tồn kho
        function trả về thông báo hủy hàng thành công


    Nếu id không khớp
        thông báo đơn hàng k tồn tại */
var orderData = [
    { id: 1, listProduct: [ {idSP: 1, buy: 2}, {idSP: 2, buy: 1}]}, 
    { id: 2, listProduct: [ {idSP: 1, buy: 1}, {idSP: 2, buy: 1}]}
];
var productData = [
    {idSP: 1, price: 500000, store: 100}, 
    {idSP: 2, price: 300000, store: 200},
    {idSP: 3, price: 200000, store: 300}
];
var income = 0;



/* TINH SO LUONG SAN PHAM TON KHO */
// function storeTotalProduct (listOrder, listProduct) {
    
//     let totalBuyProduct1 = 0;
//     let totalBuyProduct2 = 0;
//     let totalBuyProduct3 = 0;

//     for (let x in listOrder) {
//         let orderItem = listOrder[x]['listProduct'];
//         for (let y in orderItem) {
//             if (orderItem[y]['idSP'] === 1) {
//                 totalBuyProduct1 += orderItem[y]['buy'];
//             };
//             if (orderItem[y]['idSP'] === 2) {
//                 totalBuyProduct2 += orderItem[y]['buy'];
//             };
//             if (orderItem[y]['idSP'] === 3) {
//                 totalBuyProduct3 += orderItem[y]['buy'];
//             };
//         };
//     };
//     listProduct[0]['store'] -= totalBuyProduct1;
//     listProduct[1]['store'] -= totalBuyProduct2;
//     listProduct[2]['store'] -= totalBuyProduct3;
//     return listProduct;
// };
// storeTotalProduct(orderData, productData);
// console.log(productData);

//thay vì dùng 3 biến, có thể tạo 1 object RỖNG totalBuy có dạng Key(idSP) : value(tổng lượng mua trong order)
//chạy vòng for orderData dí các order trong listProduct vào object totalBuy
//cuối cùng được 1 object có các key là idSP và value là tổng lượng mua
//sau đó dùng object totalBuy cập nhật vào array productData theo cách đối trừ tương ứng với id của sản phẩm đang xét
function updateStore (listOrder, listProduct){
    let totalBuy = {};
    for (let i = 0; i < listOrder.length; i++) {
        let orderItem = listOrder[i]['listProduct'];
        for (let j = 0; j < orderItem.length; j++) {
            let id = orderItem[j]['idSP'];
            if (!totalBuy[id]) {
                totalBuy[id] = orderItem[j]['buy']; 
            } else {
                totalBuy[id] += orderItem[j]['buy'];
            }
        }
    }
    for (let i = 0; i < listProduct.length; i++) {
        let id = listProduct[i]['idSP'];
        if (totalBuy[id]) {
            listProduct[i]['store'] -= totalBuy[id];
        }
    }
}
updateStore(orderData, productData);
console.log('store:', productData);
/* END SO LUONG SAN PHAM TON KHO */

/* TINH TIEN SAN PHAM CHO TUNG ORDER */

function billOrder (listOrder, listProduct) {
    for (let y in listOrder) {
        let billOrder = 0;
        let orderItem = listOrder[y]['listProduct']
        for (let x in orderItem) {
            let idSP = orderItem[x]['idSP']
            for (let y in listProduct) {
                if (listProduct[y]['idSP'] === idSP) {
                    billOrder += orderItem[x]['buy'] * listProduct[y]['price'];
                }
            }
            // if (orderItem[x]['idSP'] === 1) {
            //     billOrder += orderItem[x]['buy'] * priceProduct1;
            // }
            // if (orderItem[x]['idSP'] === 2) {
            //     billOrder += orderItem[x]['buy'] * priceProduct2;
            // }
            // if (orderItem[x]['idSP'] === 3) {
            //     billOrder += orderItem[x]['buy'] * priceProduct3;
            // }
        }
        listOrder[y]['total'] = billOrder;
    }
    
    return listOrder;
}
billOrder(orderData, productData)

// function billOrder (order) {
//     let billOrder = 0;
//     let orderItem = order['listProduct']
//     for (let x in orderItem) {
//         let idSP = orderItem[x]['idSP'];
//         for (let y in productData) {
//             if (productData[y]['idSP'] === idSP) {
//                 billOrder += orderItem[x]['buy'] * productData[y]['price'];
//             };
//         };
//     };
//     order['total'] = billOrder;
    
//     return order;
// }
// for (let i = 0; i < orderData.length; i++) {
//     billOrder(orderData[i]);
// }
console.log(orderData);

/* END THEM TIEN CHO TUNG ORDER */

/* TINH DOANH THU CUA SHOP */
function revenue (arrListOrder, arrListProduct) {
    // let priceProduct1 = arrListProduct[0]['price'];
    // let priceProduct2 = arrListProduct[1]['price'];
    // let priceProduct3 = arrListProduct[2]['price'];
    let totalRevenue = 0;
    for (let y in arrListOrder) {
        let billOrder = 0;
        let orderItem = arrListOrder[y]['listProduct']
        for (let x in orderItem) {
            let idSP = orderItem[x]['idSP']
            for (let y in arrListProduct) {
                if (arrListProduct[y]['idSP'] === idSP) {
                    billOrder += orderItem[x]['buy'] * arrListProduct[y]['price'];
                };
            };
        }
        totalRevenue += billOrder;
    }
    return totalRevenue;
}

// var revenueOfShop = revenue (orderData, productData);
// console.log('loi nhuan hien tai la:', revenueOfShop);

/* END DOANH THU CUA SHOP */

/* TAO ORDER */

// VD [ {idSP: 1, buy: 2}, {idSP: 2, buy: 1}]
// function trả ra object chứa thông tin của order vừa tạo
// { id: 1, listProduct: [...], total: ...}
// function cũng ghi giảm lượng tồn kho tương ứng với order vừa tạo
// function cũng cập nhật lại doanh thu cho shop
function createOrder (arrOrder) {
    let orderObject = {};
    orderData.push(orderObject)
    orderData[orderData.length-1] = {
        id: orderData.length,
        listProduct: arrOrder
    };
    billOrder(orderData[orderData.length-1]);
    for (let x in arrOrder) {
        let idSP = arrOrder[x]['idSP'];
        for (let y in productData) {
            if (productData[y]['idSP'] === idSP) {
                console.log(`giam luong ton kho cua san pham ${arrOrder[x]['idSP']} la ${arrOrder[x]['buy']}`);
                productData[y]['store'] -= arrOrder[x]['buy'];
            };
        };
    };
    console.log('store:', productData);
    console.log('loi nhuan hien tai la:', revenue(orderData,productData));
    return orderData[orderData.length-1];
}
var testOrder = [{idSP: 1, buy: 4}, {idSP: 2, buy: 4}, {idSP: 3, buy: 4}];
// createOrder(testOrder)
// console.log(productData);

/* END TAO ORDER */

/* CANCEL ORDER */
// Hãy viết function cancelOrder có đầu vào là id của order muốn hủy
//     Nếu id được tìm thấy
//         function sẽ loại bỏ order khỏi orderData 
//         function cập nhật lại doanh thu
//         function sẽ cập nhật lại tồn kho
//         function trả về thông báo hủy hàng thành công
//     Nếu id không khớp
//         thông báo đơn hàng k tồn tại

function cancelOrder (idOrderRemove) {
    let i = 0;
    let check = 0;
    for (;i < orderData.length; i++) {
        if (orderData[i]['id'] === idOrderRemove) {
            check++;
            break;
        }
    }
    if (check) {
        let listProductRemove = orderData[i]['listProduct'];
        for (let x in listProductRemove) {
            let idSP = listProductRemove[x]['idSP'];
            for (let y in productData) {
                if (productData[y]['idSP'] === idSP) {
                    productData[y]['store'] += listProductRemove[x]['buy'];
                }
            }
        }
        orderData.splice(i,1)
        console.log('orderData:', orderData);
        console.log('store:', productData);
        console.log('loi nhuan hien tai la:', revenue(orderData, productData));
        return console.log('cancel order success');
    } else {
        return console.log('order not exist');
    }
}
// console.log(orderData);
// var testIdRemove = 2;
// cancelOrder(testIdRemove);
// console.log(orderData);

/* END CANCEL ORDER */



// var testArr = [1,2,3,4,5];
// testArr.splice(2,1)
// console.log(testArr);