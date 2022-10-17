/* a, tính tổng các phần tử trong array
b, tính tích các phần tử trong array
c, số 5 nằm ở những vị trí nào trong array
d, phần tử nào trong array lặp lại nhiều nhất
e, hãy tạo ra array mới chứa các phần tử không trùng nhau */
var array = [1,3,5,1,2,5,1,5,1,6,2,9, 1];

//a,
var sumArr = array.reduce((total, value) => total+value);
// console.log(sumArr);

//b,
var mulArr = array.reduce((total, value) => total*value,1);
// console.log(mulArr);

//c,
// var indexOf5 = [];
// array.forEach((value,index) => value === 5 ? indexOf5.push(index) : indexOf5);
var indexOf5 = array.reduce((total,value,index) => value === 5 ? [...total,index] : total,[])
console.log(indexOf5);

//d,
var kiemrTraLap = {};
array.forEach(value => {
    if (kiemrTraLap[value] === undefined) {
        kiemrTraLap[value] = 1;
    } else {
        kiemrTraLap[value]++
    }
})
// console.log(kiemrTraLap);
var maxLoop = [];
var loopTime = 0;
for (let x in kiemrTraLap) {
    if (kiemrTraLap[x] === loopTime) {
        maxLoop.push(parseInt(x));
    } else if (kiemrTraLap[x] > loopTime) {
        maxLoop.length = 0;
        maxLoop.push(parseInt(x));
        loopTime = kiemrTraLap[x];
    }
}
// console.log('phan tu lap lai nhieu nhat la',maxLoop);
// console.log('so lan lap lai la',loopTime);

//e,
var uniqueNum = array.filter((value, index) => array.indexOf(value) === index);
// console.log(uniqueNum);