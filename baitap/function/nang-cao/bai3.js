/* a ) Viết function tìm tướng theo Tên . Nếu không tìm thấy thì in ra “ Không tìm thấy tướng bạn cần “ 
b ) Viết function theo giá tiền .  Nếu không tìm thấy thì in ra “ Không tìm thấy tướng bạn cần “ 
c ) Viết function tìm kiếm tướng theo tộc . “ Không tìm thấy in ra không tìm thấy  “  */
var TFT= [
    { name:'yasuo', price: 5, toc:['Độc hành','Anh em']},
    { name:'yone', price: 5, toc:['Độc hành','Anh em']},
    { name:'lux', price: 7, toc:['Học giả','Tối thượng']},
    { name:'Braum', price: 4, toc:['Vệ sĩ','Băng đảng']},
    { name:'cho\'gath', price: 3, toc:['Khổng lồ','Đột biến']},
    { name:'Galio', price: 5, toc:['Khổng lồ','vệ sĩ']},
    { name:'Ahri', price: 4, toc:['Pháp sư','Băng đảng']},
    { name:'Diana', price: 1, toc:['Băng đảng','Sát thủ']},
]
var strName = 'caitlyn';
const findHeroByName = heroName => {
    let result = TFT.filter(value => value['name'] === heroName);
    if (result.length) {
        return result;
    } else {
        return console.log('Không tìm thấy tướng bạn cần');
    }
}
// console.log(findHeroByName(strName));
var price = 7;
const findHeroByPrice = priceOfHero => {
    let result = TFT.filter(value => value['price'] === priceOfHero);
    if (result.length) {
        return result;
    } else {
        return console.log('Không tìm thấy tướng bạn cần');
    }
}
// console.log(findHeroByPrice(price));
let ethnic = 'Băng đảng';
const findHeroByEthnic = ethnicOfHero => {
    let result = TFT.filter(value => value['toc'].includes(ethnicOfHero));
    if (result.length) {
        return result;
    } else {
        return console.log('Không tìm thấy tướng bạn cần');
    }
}
console.log(findHeroByEthnic(ethnic));