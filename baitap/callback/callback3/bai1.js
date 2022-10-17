// Hãy viết 1 function có tham só đầu vào là 1 array và 1 callback trong đó kết quả trả về
// là trong array nhập vào có các giá trị nào xuất hiện và giá trị đó được lặp lại mấy lần.
let array = [1,4,3,2,5,7,10,5,9,11,23,35,71,43,11,23,35,71,43];
const thongKe = (arr, callback) => {
    let result = [];
    let input = callback(arr);
    for (let i in input) {
        result.push({phanTu: i, lapLai: input[i]})
    }
    return result;
}

const thongKe2 = arr => {
    let result = {};
    for (let i of arr) {
        if (!result[i]) {
            result[i] = 1
        } else {
            result[i]++
        }
    }
    return result;
}
let thongKeArr1 = thongKe(array, thongKe2);
console.log(thongKeArr1);