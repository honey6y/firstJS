/* a, Hãy tạo ra arrayA chỉ chứa object  các học sinh lớp A
b, Hãy tạo ra array chứa object các học viên có điểm từ 6 trở xuống
c, Hãy tạo ra array vip chứa object các học viên tham gia đội tuyển */

var all = [
    {name: 'huy', score: 10, class: 'A'},
    {name: 'hai', score: 7, class: 'B'},
    {name: 'hung', score: 8, class: 'A'},
    {name: 'kien', score: 6, class: 'A'},
    {name: 'vinh', score: 9, class: 'B'},
    {name: 'binh', score: 8, class: 'B'},
    {name: 'cuong', score: 5, class: 'B'},
    {name: 'chien', score: 6, class: 'A'},
    {name: 'minh', score: 7, class: 'B'},
];
var doiTuyen = ['huy', 'vinh', 'binh', 'hung', 'minh'];
var arrayA = all.filter(value => value['class'] === 'A');
// console.log(arrayA);
var arrayUnder6 = all.filter(value => value['score'] <= 6);
// console.log(arrayUnder6);
var arrayVip = all.filter(value => doiTuyen.includes(value['name']));
console.log(arrayVip);