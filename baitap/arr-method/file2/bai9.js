/* hãy cho biết các phần tử trong array trên lặp lại bao nhiêu lần
// kết quả: [
{phanTu: 1, lapLai: 2},
        {phanTu: 2, lapLai: 2},
        {phanTu: 3, lapLai: 3},
        ……
] */

var data = [1,2,3,1,2,3,4,5,6,5,4,6,3];

var output = {};
data.forEach(function(value) {
    if(!output[value]){
        output[value] = 1;
    }else{
        output[value]++;
    }
})
// console.log(output);


var ketQua = Object.entries(output).reduce((total,[value,loop]) => ([...total,{phanTu: value, lapLai:loop}]),[])
// console.log(ketQua);

//var ketQua = [];
// var keyOutput = Object.keys(output);
// console.log(keyOutput);
// var valueOutput = Object.values(output);
// console.log(valueOutput);
// // console.log(valueOutput);
// for(let i = 0; i < keyOutput.length; i++){
//     ketQua.push({})
//     ketQua[i]['phan tu'] = parseInt(keyOutput[i]);
//     ketQua[i]['lap lai'] = valueOutput[i];
//     // console.log(`số ${x} xuất hiện${output[x].length}`);
// }
// console.log(ketQua);


