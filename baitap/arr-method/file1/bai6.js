/* Viết 1 function kiểm tra số nhập vào có phải là số nguyên tố hay không? */

function checkPrimNum (number) {
    let check = 0;
    if (number > 2) {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                check++;
                break;
            };
        };
        return (!check)
    } else {
        return (number === 2)
    }
}
console.log(checkPrimNum(-3));