/* a. Lấy ra phần tử thứ 2 tới thứ 6.
b. In ra vị trí của các phần tử trùng nhau
c. Tìm số đầu tiên là số nguyên tố */
var arr2 = [2, 5, 7, 8,3,4,1,3,6,4,3,0];

//a,
var subArr = arr2.slice(1,6);
// console.log(subArr);

//b,
var unUniqueIndex = {};
arr2.forEach((value,index) => {
    if (arr2.indexOf(value) !== arr2.lastIndexOf(value)) {
        if(!unUniqueIndex[value]) {
            unUniqueIndex[value] = [index]
        } else {
            unUniqueIndex[value].push(index);
        }
    }
})
// console.log(unUniqueIndex);

//c,
const isPrime = num => {
    if (num > 2) {
        let check = 0;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                check++;
                break;
            }
        }
        return (!check)
    } else {
        return (num === 2)
    }
}
var firstPrime = arr2.find(value => isPrime(value))
console.log(firstPrime);