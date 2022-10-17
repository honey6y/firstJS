/* Hãy chia arr trên thành 2 array nhỏ theo kiểu dữ liệu khác nhau và sắp xép theo thứ tự tăng dần .
Hãy tính tổng của các giá trị number và các string number trong arr
Hãy sắp xếp arr trên theo thứ tự tăng dần.
Hãy lấy các giá trị có thuộc tính là number từ arr và kiểm tra xem các số đó có phải là số nguyên tố hay không . */

var arr = [1,4,2,5,7,2,8,'23',3,8,6,'a',3,9,'d',"c",11,'f','r',35,'g','b',42,'k','j','h','11'];

var arrNumber = arr.filter(value => (typeof value === 'number') ? value : false);
arrNumber.sort((a,b) => a-b)
// console.log(arrNumber);
var arrStr = arr.filter(value => (typeof value) === 'string' ? value : false);
arrStr.sort((a,b) => (a<b) ? -1:0);
// console.log(arrStr);

var sumNum = arr.reduce((total, value) => (value*0 !== 0) ? total : total + value*1, 0);
// var sumNum = arr.reduce((total, value) => (value*0 !== 0) ? total : total + value, 0);
// console.log(sumNum);

arr.sort((a,b) => {if (a<b) return -1;})
// console.log(arr);

// console.log(42 > 'r');
var primeNum = arr.filter(value => {
    if (typeof value === 'number') {
        if (value > 2) {
            let check = 0;
            for (let i = 2; i <= Math.sqrt(value); i++) {
                if (value % i === 0) {
                    check++;
                    break;
                }
            };
            if (check) {
                return false;
            } else {
                return true;
            };
        } else {
            return value === 2;
        }
        
    } else {
        return false;
    }
});
console.log(primeNum);