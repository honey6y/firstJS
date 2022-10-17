var number = 10

function API1(data){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(data * 2)
        }, 2000)
    })
}

function API2(data){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(data * data)
        }, 3000)
    })
}
const double = a => {
    return a*a;
}
async function run(){

    var data1 =  API2(10)
    console.log(data1)
    var data2 =  API1(10)
    console.log(data2);
    console.log('toi k lien quan');
    let arr = await Promise.all([data1,data2])
    console.log(arr);
    let total = arr.reduce((total, val)=>{
        return total += val
    },0)
    console.log(total/(arr.length))

}
run()



// var p1;
// async function test1() {
//     console.log(0);
//     return new Promise((resolve, reject) => {
//         console.log(22222);
//         resolve(1);
//     })
    
     
// }
// p1 = test1()
// console.log(p1);

// async function(){
//     p1 = await test1()
//     console.log(p1);
// }


