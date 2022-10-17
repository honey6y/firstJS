let array = [1,3,2,4,4,1,2,3,5,7,9,4,1,2,3];

// hãy tạo array mới cho biết số lần lập lại của các phần tử
// => [{value: 1, rep : 3}, {value: 2, rep: 3}, ....]
let tongHop = array.reduce((result, value) => {
    if (!result[value]) {
        result[value] = 1;
    } else {
        result[value] ++;
    }
    return result;
}, {})
// console.log(tongHop);
let ketQua = [];
for (let x in tongHop) {
    ketQua.push({value: x, rep: tongHop[x]})
}
console.log(ketQua);