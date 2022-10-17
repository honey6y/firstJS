/* -) Hãy viết 1 function in ra dãy các số nguyên tố và vị trí của nó trong array  
// -) Tính tổng các số nguyên tố trong array  và trung bình cộng của các số trong array 
// -) Viết function để tính tích của các số nguyên tố trong dãy array */
var array = [1,4,3,2,5,7,10,5,9,11,23,35,71,43];
const isPrime = number => {
    if (number > 2) {
        let check = 0;
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                check++;
                break;
            };
        };
        if (!check) {
            return true;
        } else {
            return false
        };
    } else {
        return number === 2;
    };
};

const checkPrimeArr = arr => {
    let valuePrime = [];
    let indexPrime = [];
    arr.forEach((element, index) => {
       if (isPrime(element)) {
        valuePrime.push(element)
        indexPrime.push(index)
       };
    });
    console.log('cac so nguyen to',valuePrime);
    console.log('vi tri truong ung',indexPrime);
}
// checkPrimeArr(array);

let sumPrime = array.reduce((total,value) => isPrime(value) ? total+value : total,0);
// console.log(sumPrime);

let average = array.reduce((total,value) => total+value) / array.length;
console.log(average);

let mulPrime = array.reduce((total,value) => isPrime(value) ? total*value : total,1);
console.log(mulPrime);