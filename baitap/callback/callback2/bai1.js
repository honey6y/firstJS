let data = [
    {title: 'ao so mi', price: 200000},
    {title: 'ao gio', price: 800000},
    {title: 'quan dui', price: 150000},
    {title: 'ao phong', price: 250000},
    {title: 'quan bo', price: 400000},
    {title: 'quan au', price: 500000},
    {title: 'ao vest', price: 1200000},
    {title: 'ao ba lo', price: 100000},
    {title: 'tat', price: 30000},
];
// hãy viết 1 function có đầu vào là array data, page, pageSize, filter
// page là vị trí trang muốn xem kết quả
// pageSize là số lượng kết quả trên 1 trang
//  VD (page = 2, pageSize = 10 là xem data từ phần tử thứ 10 đến 20)
//  VD (page = 3, pageSize = 5 là xem data từ phần tử thứ 10 đến 15)
// filter là điều kiện tìm kiếm trước khi show kết quả
// function trả về các data theo điều kiện lọc và hiển thị theo vị trí trang người dùng muốn xem

const findProduct = (arrayData, page, pageSize, filterCondition, sortCondition) => {
    let resultFilter = [];
    let resultFind = [];
    resultFilter = arrayData.filter(value => filterCondition(value));
    if (sortCondition) {
        resultFilter.sort(sortCondition);
    }
    for (let i = 0; i < pageSize; i++) {
        resultFind[i] = resultFilter[i + (page - 1) * pageSize];
    }
    return resultFind;
}
let display = findProduct(data, 2, 3, product => product['title'].includes('ao'), (a, b) => a['price'] - b['price'])
console.log(display);