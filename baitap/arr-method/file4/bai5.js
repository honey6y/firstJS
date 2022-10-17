/* a ) Áp dụng filter lọc các trái cây có nơi sản xuất tại VietNam . 
b ) Áp dụng  filter lọc các trái cây có số lượng (sl) > = 150 . 
c ) Viết function lọc sản phẩm hoa quả  theo tên  .  
d) Viết function lọc sản phẩm hoa quả  theo Nước .  
e ) viết function tính tổng số lượng theo tên Hoa quả , và theo tên nước .  */
var  hoaQua = [
    {ten:'Xoài',sx:'China',sl:'100'},
    {ten:'Xoài',sx:'VietNam',sl:'130'},
    {ten:'Xoài',sx:'ThaiLan',sl:'100'},
    {ten:'Cam',sx:'China',sl:'200'},
    {ten:'Cam',sx:'ThaiLan',sl:'150'},
    {ten:'Nho',sx:'VietNam',sl:'120'},
    {ten:'Xoài',sx:'ThaiLan',sl:'100'}
]

var madeInVN = hoaQua.filter(value => value['sx'] === 'VietNam');
// console.log(madeInVN);
var amountOver150 = hoaQua.filter(value => value['sl'] >= 150);
// console.log(amountOver150);

const filterName = fruitName => {
    let filterFruitName = hoaQua.filter(value => value['ten'] === fruitName);
    return filterFruitName;
}
// console.log(filterName('Nho'));

const filterCountry = countryName => {
    let filterFruitCountry = hoaQua.filter(value => value['sx'] === countryName);
    return filterFruitCountry;
}
// console.log(filterCountry('VietNam'));

const quantityName = fruitName => {
    let sum = hoaQua.reduce((total, value) => (value['ten'] !== fruitName) ? total : total+value['sl']*1,0)
    return sum;
}
// console.log(quantityName('Cam'));

const quantityCountry = countryName => {
    let sum = hoaQua.reduce((total, value) => (value['sx'] !== countryName) ? total : total+value['sl']*1,0)
    return sum;
}
console.log(quantityCountry('VietNam'));