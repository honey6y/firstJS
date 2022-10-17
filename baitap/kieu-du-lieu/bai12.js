var arr1 = [1,12,3,5,7,8,9,15,2] ; 

var arr2 =  [7,2,3,5,3,8,9,15,2] ; 
// a.	Truy vấn đến phần tử đầu và cuối của 2 arr1 và arr2 .
// b.	Đảo vị trí đầu và cuối của cả 2 array trên. 
// c.	Tính tổng (+) , hiệu(-) của các phần tử đã tìm được ở câu a.
// d.	Thêm [7,9,11,13] vào arr1  , [1,5,7 ] vào arr2 .Truy vấn và tính tổng tất cả các phần tử  của arr1 con  và arr2  con . 
// e.	Tính lại câu c .
var arr1Index0 =0;
var arr1IndexEnd =0;
var arr2Index0 =0;
var arr2IndexEnd =0;
arr1Index0 = arr1[0];
arr1IndexEnd = arr1[arr1.length-1];
arr2Index0 = arr2[0];
arr2IndexEnd = arr2[arr2.length-1];
// console.log('phan tu dau va cuoi cua arr1 lan luot la:', arr1Index0, arr1IndexEnd);
// console.log('phan tu dau va cuoi cua arr2 lan luot la:', arr2Index0, arr2IndexEnd);

var intermediary1 = 0;
intermediary1 = arr1[0];
arr1[0] = arr1[arr1.length-1];
arr1[arr1.length-1] = intermediary1;
var intermediary2 = 0;
intermediary2 = arr2[0];
arr2[0] = arr2[arr2.length-1];
arr2[arr2.length-1] = intermediary2;

// console.log('mang moi sau khi dao vi tri 2 phan tu dau va cuoi la:',arr1, '\n', arr2);

var sum1 = 0;
var subtract1 = 0;
sum1 = arr1Index0 + arr1IndexEnd;
subtract1 = arr1Index0 - arr1IndexEnd;
// console.log('tong va hieu cua phan tu dau va cuoi cua mang arr1 lan luot la:', sum1, subtract1);
var sum2 = 0;
var subtract2 = 0;
sum2 = arr2Index0 + arr2IndexEnd;
subtract2 = arr2Index0 - arr2IndexEnd;
// console.log('tong va hieu cua phan tu dau va cuoi cua mang arr1 lan luot la:', sum2, subtract2);

var arr1Add = [7,9,11,13];
var arr2Add = [1,5,7 ];
arr1.push(arr1Add);
// console.log(arr1);
arr2.push(arr2Add);
var arr1Con = arr1[arr1.length-1];
var arr2Con = arr2[arr2.length-1];

function sumTotal (x) {
    let y = 0;
    for (let i in x){
        y += x[i];
    }
    return y;
}
// console.log('tong cac phan tu cua mang arr1 con la:', sumTotal(arr1Con));
// console.log('tong cac phan tu cua mang arr1 con la:', sumTotal(arr2Con));

var newSum1 = 0;
var newSubtract1 = 0;
var newSum2 = 0;
var newSubtract2 = 0;
// newSum1 = arr1[0] + arr1[arr1.length-1];
// console.log(newSum1);
// newSubtract1 = arr1[0] - arr1[arr1.length-1];
// console.log(newSubtract1);
// console.log(typeof(newSum1));
// console.log(typeof(newSubtract1));
newSum1 = arr1Index0 + sumTotal(arr1Con);
newSubtract1 = arr1Index0 - sumTotal(arr1Con);
console.log('tong va hieu moi cua phan tu dau va cuoi cua mang arr1 lan luot la:', newSum1, newSubtract1);
newSum2 = arr2Index0 + sumTotal(arr2Con);
newSubtract2 = arr2Index0 - sumTotal(arr2Con);
console.log('tong va hieu moi cua phan tu dau va cuoi cua mang arr2 lan luot la:', newSum2, newSubtract2);
