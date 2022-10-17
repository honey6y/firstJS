/*viết function có dầu vào là array và return ra array mới chứa các phần tử của array đầu vào không lặp lại */

var data = [1,2,3,1,2,3,4,5,6,5,4,6];

function filterArr (arr) {
    // let newArr = arr.filter(onlyUnique);
    // function onlyUnique (value, index, selfArr) {
    //     return selfArr.indexOf(value) === index;
    // }
    // return newArr
    let newArr = arr.reduce(onlyUnique,[]);
    function onlyUnique (total,value, index, selfArr) {
        if (selfArr.indexOf(value) === index) 
        total.push(value);
        return total;
    }
    return newArr;
}
console.log(filterArr(data));


// function onlyUnique(value, index, self) {
//     console.log(value, index);
//     console.log(self.indexOf(value));
//     return self.indexOf(value) === index;
// }
  
//   // usage example:
// var a = ['a', 1, 'a', 2, '1','1','1','1'];
// var unique = a.filter(onlyUnique);
  
// // console.log(unique); // ['a', 1, 2, '1']







// const data = [{ name: 'foo', score: 10 }, { name: 'bar', score: 20 }, { name: 'foo', score: 15 } ];
// const highsObj = data.reduce((acc, currentItem) => {
//     if (!acc[currentItem.name] || acc[currentItem.name].score < currentItem.score) {
//         acc[currentItem.name] = currentItem;
//     }
//     return acc;
// }, {})

// // As an array
// const highsArray = Object.values(highsObj);
// console.log(highsObj);