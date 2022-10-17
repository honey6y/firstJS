// const arr = [
//     { id: 1, name: "king" },
//     { id: 2, name: "master" },
//     { id: 3, name: "lisa" },
//     { id: 4, name: "ion" },
//     { id: 5, name: "jim" },
//     { id: 6, name: "gowtham" },
//     { id: 1, name: "jam" },
//     { id: 1, name: "lol" },
//     { id: 2, name: "kwick" },
//     { id: 3, name: "april" },
//     { id: 7, name: "sss" },
//     { id: 8, name: "brace" },
//     { id: 8, name: "peiter" },
//     { id: 5, name: "hey" },
//     { id: 6, name: "mkl" },
//     { id: 9, name: "melast" },
//     { id: 9, name: "imlast" },
//     { id: 10, name: "glow" }
// ];

// function getUnique(arr, comp) {

//     const unique = arr
//     .map(e => e[comp])
   
//     // store the keys of the unique objects
//     .map((e, i, final) => final.indexOf(e) === i && i)
   
//     // // eliminate the dead keys & store unique objects
//     .filter(e => arr[e]).map(e => arr[e]);
   
//     return unique;
// }
   
// console.log(getUnique(arr,'id'))


// class Car {
//     constructor(name) {
//       this.brand = name;
//     }
// }
  
// const mycar = new Car("Ford");
// console.log(mycar);
// const mycar2 = new Car("Honda");
// console.log(mycar2);

// var arrTest = [1,3,4,2,6,8];
// const [a,b,...abc] = arrTest;
// console.log(a);
// console.log(b);
// console.log(abc);
// console.log(abc[0]);










// hien thi so thap phan ra co so 2:
// function t(ln, n) {
//     const r = Array(ln).fill(0); //tao mang ln phan tu, khoi tao toan bo phan tu la 0

//     r[0] = n % 2;

//     for (let i = 1; i < ln; i++) {
//         n = Math.trunc(n/2); //lay phan nguyen
//         r[i] = n % 2;
//     }
//     return r;
// }
// console.log(t(11, 1024));

const arrayLike = {
    length: 3,
    0: "a",
    1: "b",
    2: "c",
  };
  for (const entry of Array.prototype.entries.call(arrayLike)) {
    console.log(entry);
  }
  // [ 0, 'a' ]
  // [ 1, 'b' ]
  // [ 2, 'c' ]
  
