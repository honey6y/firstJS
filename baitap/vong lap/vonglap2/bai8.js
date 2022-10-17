/* Viết chương trình javascript để sắp xếp 4 số (a, b, c, d). Và in ra kết quả. 

Ví dụ:
Cho a = 3; b = 2; c= 9; d= -1; In ra "9,3,2,-1";
Cho a = 3; b = 3; c= 8; d= -5; In ra "8,3,3,-5";
Đầu vào: a, b, c, d
Đầu ra: sắp xếp 4 số (a, b, c, d). Và in ra kết quả.  */

var a = 3;
var b = 2;
var c = 9;
var d = -1;

var arr = [];
arr.push(a,b,c,d);
for (let i = 0; i < arr.length; ) {
    let check = 0;
    if (arr[i] < arr[i+1]) {
        arr[i] = arr[i+1] + (arr[i+1] = arr[i]) - arr[i];
        check++;
    }
    if (check !== 0) {
        i = 0;
        continue
    }
    i++
}
console.log(arr);


function sapXep (...num) {
    for (let i = 0; i < num.length; ) {
        let check = 0;
        if (num[i] < num[i+1]) {
            num[i] = num[i+1] + (num[i+1] = num[i]) - num[i];
            check++;
        }
        if (check !== 0) {
            i = 0;
            continue
        }
        i++
    }
    return num;
};
console.log(sapXep(a, b, c, d));
