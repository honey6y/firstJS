/* Cho mảng arr2 = [1, 4, 5, 2, 7, 9, 4].
Hãy sắp xếp mảng theo thứ tự tăng dần và giảm dần */

var arr2 = [1, 4, 5, 2, 7, 9, 4];

for (let i = 0; i < arr2.length;) {
    if (arr2[i] < arr2[i+1]) {
        arr2[i] = arr2[i+1] + (arr2[i+1] = arr2[i]) - arr2[i];
        i = 0;
        continue
    }
    i++;
}
console.log(arr2);
while (1) {
    let checkWhile = 0;
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] > arr2[i+1]) {
            arr2[i] = arr2[i+1] + (arr2[i+1] = arr2[i]) - arr2[i];
            checkWhile++;
        };
    };
    if (checkWhile === 0) {
        break;
    };
};
console.log(arr2);