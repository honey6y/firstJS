/* a, tính tổng các phần tử số lẻ trong array
b, tính tích các phần tử (mà chia hết cho 3) trong array
c, số 1 nằm ở những vị trí nào trong array
d, phần tử nào trong array lặp lại nhiều nhất
e, hãy tạo ra array mới chứa các phần tử trùng nhau */

var array = [1,27,5,21,5,3,1,5,9,6,5,9, 1];

//a,
var tongLe = array.reduce((total, value) => value % 2 === 1 ? total+value : total,0);
// console.log(tongLe);

//b,
var arrChiaHet3 = array.filter(value => value % 3 === 0);
var tichChiaHet3 = arrChiaHet3.reduce((total,value) => total*value)
// console.log(tichChiaHet3);

//c,
// var indexNum1 = [];
// array.forEach((value, index) => {value === 1 ? indexNum1.push(index) : indexNum1})
var indexNum1 = array.reduce((total,value,index) => value === 1 ? [...total,index] : total,[])
// console.log(indexNum1);

//d,
var maxLoop = [];
var loopTime = 0;
var thongKeLoop = {};
array.forEach((value, index) => {
    if (!thongKeLoop[value]) {
        thongKeLoop[value] = 1;
    } else {
        thongKeLoop[value]++;
    };
});
console.log(thongKeLoop);

loopTime = Math.max(...Object.values(thongKeLoop))
for (let x in thongKeLoop) {
    if (thongKeLoop[x] === loopTime) {
        maxLoop.push(parseInt(x))
    }
}
// console.log('cac so co so lan lap lai nhieu nhat la:',maxLoop);
// console.log('so lan lap lai la',loopTime);

//e,
var phanTuLapLai = [];
array.forEach(value => array.indexOf(value) !== array.lastIndexOf(value) ? phanTuLapLai.push(value) : phanTuLapLai)
phanTuLapLai = phanTuLapLai.filter((value,index) => phanTuLapLai.indexOf(value) === index)
console.log(phanTuLapLai);