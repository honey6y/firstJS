/* Cho array = [1,2,3,5,1,2,4,5,3,4,1] chứa trạng thái sử dụng của xe đạp
// Với mỗi số 1,2,3,... là ứng với số của xe đạp được đưa ra khỏi trạm
// Hãy viết function để hiện ra xe chưa được đưa vào lại trạm.
// Lưu ý với số 1 xuất hiện 2 lần có nghĩa là xe số 1 đã được lấy khỏi trạm và được
// đưa lại về trạm . */

var array = [1,2,3,5,1,2,4,5,3,4,1];

// var output1 = {};
// array.forEach(value => {
//     if (output1[value] == undefined) {
//         output1[value] = 1;
//     } else {
//         output1[value]++;
//     }
// });
// console.log(output1);
// for (let x in output1) {
//     if (output1[x] % 2 !== 0) {
//         console.log(`xe ${x} chua duoc tra lai tram`);
//     }
// }





var output2 = [];
array.forEach(value => {
    let check = 0;
    let dem = 0;
    for (let i = 0; i < output2.length; i++) {
        if (output2[i][value] !== undefined) {
            dem = i;
            check++;
            break;
        }
    }
    if (check) {
        output2[dem][value]++;
    } else {
        output2.push({});
        output2[output2.length-1][value] = 1;
    }
});
console.log(output2);
