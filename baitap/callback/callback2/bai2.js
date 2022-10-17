let iphone= [
    {id: 1, product:'Iphone 12 ', price: 9990000, store: 120, color:'red'},
    {id: 2, product:'Iphone 12 ', price: 12590000, store: 121, color:'black'},
    {id: 3, product:'Iphone 12 ', price: 13590000, store: 120, color:'green'},
    {id: 4, product: 'iphone 13 Pro', price: 17900000, store: 230 , color:'black'},
    {id: 5, product: 'iphone 13 Pro', price: 19900000, store: 230 ,color:'red'},
    {id: 6, product: 'iphone 13 Pro', price: 14900000, store: 230,color:'blue'},
    {id: 7, product: 'iphone 13', price: 12490000, store: 220,color:'black'},
    {id: 8, product: 'iphone 13', price: 24900000, store: 220,color:'while'},
    {id: 9, product: 'iphone 13', price: 24900000, store: 220,color:'blue'}
];
//viết function có đầu vào là array, name, callback
// funtion trả ra các sản phẩm theo yêu cầu
// name là tên hàng hóa muốn tìm, 
const findProduct = (arrayData, nameProduct, callbackFind) => {
    let resultFilter = arrayData.filter(item => item['product'].toUpperCase().includes(nameProduct.toUpperCase()));
    let resultFind;
    if (callbackFind) {
        resultFind = resultFilter.filter(callbackFind)
        return resultFind;
    } else {
        return resultFilter;
    }
}
let display = findProduct(iphone, 'PRO', item => item['color'].includes('black') || item['color'].includes('red'))
console.log(display);