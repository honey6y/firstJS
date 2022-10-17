// Cho array sau : 
var arr004 = [1,13,5,7,8,9,[6,9,12,5],10,[12,21,3],24, 22];
// a.	Truy vấn phần tử đầu và phần tử cuối của 
// array con thứ 1 và  array con thứ 2 và của arr004.
// b.	Tính tổng phần tử đầu và cuối arr004 và array con thứ 1 và 2  . 
// c.	thêm 2, vào cuối arr004 rồi tính lại câu b .

console.log('a, phan tu dau va cuoi cua arr04 lan luot la:', arr004[0], arr004[arr004.length-1]);

var arrConIndex = [];
for (var i in arr004){
    if (Array.isArray(arr004[i])){
        arrConIndex.push(i)
    }
};
// console.log(arrConIndex);
// console.log(arr004[arrConIndex[0]]);

var newArrCon = [];
for (let i = 0; i < arrConIndex.length; i++) {
    newArrCon[i] = arr004[arrConIndex[i]]
};
// console.log(newArrCon);

for (let i = 0; i< newArrCon.length; i++) {
    console.log('phan tu dau va cuoi cua mang con thu', i+1, 'lan luot la:', newArrCon[i][0], newArrCon[i][newArrCon[i].length-1]);
}

var sumArrCha = 0;
sumArrCha = arr004[0] + arr004[arr004.length-1];
var sumArrCon = 0;
for (let i = 0; i< newArrCon.length; i++) {
    sumArrCon += newArrCon[i][0] + newArrCon[i][newArrCon[i].length-1]
}
var sumTotal = 0;
sumTotal = sumArrCha + sumArrCon;
console.log('b, tổng cua phần tử đầu và cuối arr004 và array con thứ 1 và 2 la:', sumTotal);

arr004[arr004.length] = 2;
sumArrCha = arr004[0] + arr004[arr004.length-1];
sumTotal = sumArrCha + sumArrCon;
console.log('c, tổng moi cua phần tử đầu và cuối arr004 và array con thứ 1 và 2 la:', sumTotal);

