/* var array = [1,9,3,7,6,4,5,2]

a, Hãy lấy ra số lơn nhất trong array
b, Hãy lấy ra số chẵn nhỏ nhất trong array */

var array = [1,9,3,7,6,4,5,2];

// var max = array[0];
// for (let i = 0; i < array.length; i++) {
//     if (array[i] > max) {
//         max = array[i];
//     }
// }
// console.log(max);

let minEven;
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        minEven = array[i];
        if (array[i] < minEven) {
            minEven = array[i]
        }
    }
}
if (typeof(minEven) != 'number') {
    console.log('mang khong co so chan');
} else console.log('so chan nho nhat trong mang la:', minEven);