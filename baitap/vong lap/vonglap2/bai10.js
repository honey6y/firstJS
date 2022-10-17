/* Cho 1 mảng các số tự nhiên. In ra các số trong mảng đó với điều kiện :
Bỏ qua số đó nếu số đó chia hết cho 4
Thoát vòng lắp nếu số đó chia hết cho cả 4 và 3 */

var arr = [3,4,6,8,7,-12,4,2,9,6,7,12,25,23,46];
var buff = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 4 !== 0) {
        buff.push(arr[i])
    } else if (arr[i] % 4 === 0) {
        if (arr[i] % 3 !== 0) {
            continue
        } else {
            break
        }
    }
}
console.log(buff);