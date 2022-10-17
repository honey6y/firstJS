/* a ) Viết function tìm tướng theo tên .  Nếu không tìm thấy thì in ra “ Không tìm thấy tướng của bạn  “ 
b ) Viết function tìm tướng theo Vị trí .  Nếu không tìm thấy thì in ra “ Không tìm thấy tướng của bạn  “ 
c )  Viết function tính tổng sức mạnh của 2 tướng bất kỳ  . 
d ) Viết function tính tổng sức mạnh của một đội 5 tướng.  */
var LOL = [
    { name:'yasuo', power: 50000,viTri:'Mid'},
    { name:'aphelios', power: 43000,viTri:'ADC'},
    { name:'Yone', power: 45000,viTri:'Mid'},
    { name:'Vayle', power: 12000,viTri:'ADC'},
    { name:'Nasus', power: 30000,viTri:'Top'},
    { name:'Jayce', power: 20000,viTri:'Top'},
    { name:'LeeSin', power: 41000,viTri:'Jungle'},
    { name:'Nunu', power: 15000,viTri:'Jungle'},
    { name:'Threst', power: 23000,viTri:'SP'},
    { name:'Lulu', power: 25000,viTri:'SP'},
];
var hero1 = 'yasuo';
var hero2 = 'Yone';
const powerOf2Hero = (firstHero, secondHero) => {
    let newArr = LOL.filter(value => value['name'] === firstHero || value['name'] === secondHero);
    let result = newArr.reduce((total, value) => total + value['power'],0)
    return result;
}
// console.log(powerOf2Hero(hero1, hero2));

let heroTop = 'Nasus';
let heroJungle = 'LeeSin';
let heroMid = 'Yone';
let heroAd = 'Vayle';
let heroSp = 'Lulu';
const powerOfTeam = (...arg) => {
    let team = [...arg];
    console.log(team);
    let newTeam = LOL.filter(value => team.includes(value['name']));
    if (newTeam.length !== 5) {
        return console.log('vui long chon 5 tuong khac nhau');
    } else {
        let result = newTeam.reduce((total, value) => total + value['power'],0);
        return result;
    }
}
// powerOfTeam(heroTop,heroJungle,heroMid,heroAd,heroSp)
console.log(powerOfTeam(heroTop,heroJungle,heroMid,heroAd,heroSp));