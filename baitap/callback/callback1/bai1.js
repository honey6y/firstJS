//Tạo function myEvery dựa trên every method ( chủ động tra mạng every method)
let arrTest = [1,2,3,4,56,,,7,8,9,6,87]
let arrTest2 = [1,2,3,4,56,'aa',,7,8,9,6,87,'aa']

// const myEvery = (array, condition) => {
//     let check = true;
//     for (let i = 0; i < array.length; i++) {
//         if (!condition(array[i])) {
//             check = false;
//         }
//     }
//     return check;
// }
// console.log(myEvery(arrTest, value => value > 0));

Array.prototype.myEvery = function(condition) {
    let check = true;
    for (let i = 0; i < this.length; i++) {
        if (!this[i]) {
            continue;
        }
        if (!condition(this[i])) {
            check = false;
        }
    }
    return check;
}
// console.log(arrTest.myEvery(value => value % 2 === 0));
// console.log(arrTest.every(value => value % 2 === 0));

// Tạo function myFind dựa trên find method
Array.prototype.myFind = function(condition) {
    let check;
    for (let i = 0; i < this.length; i++) {
        if (!this[i]) {
            continue;
        }
        if (condition(this[i])) {
            check = this[i]
            break;
        }
    }
    return check;
}
// console.log(arrTest.myFind(num => num > 100))

// Tạo function mySome dựa trên some method ( chủ động tra mạng some method).
Array.prototype.mySome = function(condition) {
    let check = false;
    for (let i = 0; i < this.length; i++) {
        if (!this[i]) {
            continue;
        }
        if (condition(this[i])) {
            check = true;
            break;
        }
    }
    return check;
}
// console.log(arrTest2.mySome(num => typeof num === 'string'));

// Tạo function myFilter dựa trên filter method
Array.prototype.myFilter = function (condition) {
    let result = [];
    for (let i in this) {
        if (this.hasOwnProperty(i)) {
            if (condition(this[i], i, this)) {
                result.push(this[i])
            }
        }
    }
    return result;
};
console.log(arrTest2.myFilter((num) => typeof num === 'string'));

//Bai 2
let arr2 = [2, 5, 7, 8,3,4,1,3,6,4,3,0];
// a. Lấy ra phần tử thứ 2 tới thứ 6.
let bai2A = arr2.slice(1, 5);
// console.log(bai2A);

//b. In ra vị trí của các phần tử trùng nhau
let bai2B = [];
arr2.forEach((value, index) => {
    if (arr2.indexOf(value) !== arr2.lastIndexOf(value)) {
        bai2B.push(index)
    }
})
// console.log(bai2B);

//c. Tìm số đầu tiên là số nguyên tố
const isPrime = number => {
    let check = false;
    if (number > 2) {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                check = true;
            }
        }
        return !check;
    } else {
        return number === 2;
    }
}
// console.log(isPrime(7));
let firstPrime = arr2.myFind(isPrime)
// console.log(firstPrime);

//Bai 3
let array3 = [1 ,3,7,8,9,0,10,3,2];
// áp dụng array.sort  sắp xếp array trên theo thứ tự tăng dần . 
array3.sort((a,b) => a - b)
// console.log(array3);

// áp dụng array.map  , Tạo ra một array mới với các giá trị gấp 2 array cũ . 
let doubleArray3 = array3.map(value => value * 2)
// console.log(doubleArray3);

// cho array3= [1,2,3,5,1] hãy thêm array3 vào phía trước của array và in ra kết quả . 
let array3_3 = [1,2,3,5,1];
let newArray3 = [...array3_3, ...array3];
// console.log(newArray3);

//cho array3= [1,2,3,5,1] hãy thêm array3 vào vị trí số 5 của array và in ra kết quả (ÁP dụng mySplice )
Array.prototype.mySplice = function (indexStart, numberReplace, ...itemReplace) {
    let result = [];
    let removed = [];
    let argsLen = arguments.length;
    let arrLen = this.length;

    indexStart = parseInt(indexStart, 10);
    numberReplace = parseInt(numberReplace, 10);

    if (indexStart < 0) {
        indexStart = indexStart + arrLen;
        indexStart = (indexStart < 0) ? 0 : indexStart;
    } else {
        indexStart = (indexStart < arrLen) ? indexStart : arrLen;
    }

    if (numberReplace < 0) {
        numberReplace = 0
    } else if (numberReplace > (arrLen - indexStart)) {
        numberReplace = arrLen - indexStart;
    }

    for (let i = 0; i < indexStart; i++) {
        result[i] = this[i]
    }

    for (let i = 2; i < argsLen; i++) {
        result.push(arguments[i]);
    }

    for (let i = indexStart; i < indexStart + numberReplace; i++) {
        removed.push(this[i]);
    }

    for (let i = indexStart + (numberReplace || 0); i < arrLen; i++) {
        result.push(this[i])
    }

    this.length = 0;
    let i = result.length;
    while (i--) {
        this[i] = result[i];
    }

    return removed;
}

array3.mySplice(5, 5, ...array3_3)
// console.log(array3);

// arraySplice(array3, 5, 1, 7,8,9)
// console.log(array3);
// function arraySplice(array, start, deleteCount) {
//     var result = [];
//     var removed = [];
//     var argsLen = arguments.length;
//     console.log(argsLen);
//     var arrLen = array.length;
//     var i, k;
  
//     // Follow spec more or less
//     start = parseInt(start, 10);
//     deleteCount = parseInt(deleteCount, 10);
  
//     // Deal with negative start per spec
//     // Don't assume support for Math.min/max
//     if (start < 0) {
//       start = arrLen + start;
//       start = (start > 0)? start : 0;
//     } else {
//       start = (start < arrLen)? start : arrLen;
//     }
  
//     // Deal with deleteCount per spec
//     if (deleteCount < 0) deleteCount = 0;
  
//     if (deleteCount > (arrLen - start)) {
//       deleteCount = arrLen - start;
//     }
  
//     // Copy members up to start
//     for (i = 0; i < start; i++) {
//       result[i] = array[i];
//     }
  
//     // Add new elements supplied as args
//     for (i = 3; i < argsLen; i++) {
//       result.push(arguments[i]);
//     }
  
//     // Copy removed items to removed array
//     for (i = start; i < start + deleteCount; i++) {
//       removed.push(array[i]);
//     }
  
//     // Add those after start + deleteCount
//     for (i = start + (deleteCount || 0); i < arrLen; i++) {
//       result.push(array[i]);
//     }
  
//     // Update original array
//     array.length = 0;
//     i = result.length;
//     while (i--) {
//       array[i] = result[i];
//     }
  
//     // Return array of removed elements
//     return removed;
//   }

//Bai 4
let array4 = [1,4,2,4,5,7,8,3,6,4,9,1,6,5];
// Xóa phần tử cuối cùng và in lại array
array4.pop();
// console.log(array4);

// Thêm giá trị 12 vào đầu của array và in ra dãy array sau khi thêm 
array4.unshift(12)
// console.log(array4);

// Hãy xóa phần tử ở vị trí thứ 2 đến vị trí thứ 5 của array và in ra kết quả
array4.mySplice(2,3)
// console.log(array4);

// Hãy in ra các giá trị tại vị trí từ thứ 3 đến thứ 7 của array
let subArray4 = array4.slice(3,7);
// console.log(subArray4);

//Bai 5
let array5 = [1,4,2,4,5,7,8,3,6,4,9,1,6,5,4,3,8,9];
//Tạo newArray chứa các giá trị chẵn của array3 (Áp dụng myFilter )
let evenArray5 = array5.myFilter(value => value % 2 === 0)
// console.log(evenArray5);

// Tạo newArray2 chứa các giá trị lẻ của array3 và có giá trị lớn hơn 3.
let oddOverThreeArray5 = array5.myFilter(value => value % 2 !== 0 && value > 3);
// console.log(oddOverThreeArray5);

Array.prototype.myIndexOf = function (item, indexStart = 0) {
    let check = -1;
    let arrLen = this.length;

    if (indexStart < 0) {
        indexStart = indexStart + arrLen;
        indexStart = (indexStart < 0) ? 0 : indexStart;
    } else {
        indexStart = (indexStart < arrLen) ? indexStart : arrLen;
    }
    for (let i = indexStart; i < this.length; i++) {
        if (item === this[i]) {
            check = i
            break;
        }
    }
    return check;
}
// console.log(arrTest2.myIndexOf('aa', 6));