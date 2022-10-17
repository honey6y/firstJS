var Nodemy = [
    {
        ho: 'Nguyen',
        ten: 'A',
        class: 'b1',
        subject: [{
            name: 'html'
        },{
            name: 'css'
        },{
            name: 'js'
        }]
    }, {
        ho: 'Tran',
        ten: 'B',
        class: 'b2',
        subject: [{
            name: 'React'
        },{
            name: 'js'
        }]
    }, {
        ho: 'Nguyen',
        ten: 'C',
        class: 'b3',
        subject: [{
            name: 'css'
        },{
            name: 'React'
        }]
    }, {
        ho: 'Dang',
        ten: 'D',
        class: 'b1',
        subject: [{
            name: 'css'
        },{
            name: 'js'
        },{
            name: 'React'
        }]
    }];

// for (let i in Nodemy) {
//     console.log('ho va ten cua cac thanh vien trong lop hoc la:', Nodemy[i].ho, Nodemy[i].ten);
// }


for (let i in Nodemy) {
    for (let j in Nodemy[i].subject) {
        if (Nodemy[i].subject[j].name === 'html') {
            Nodemy[i].subject[j].name = 'Ruby'
        }
        // console.log(Nodemy[i].subject[j]);
    }
}

Nodemy[Nodemy.length] = {
    ho: 'Hoang Van',
    ten: 'Duy',
    class: 'b4',
    subject: [{name: 'html'
    },{
        name: 'css'
    },{
        name: 'js'
    },{
        name: 'React'
    }]
}

var sumSubject = 0

for (let i in Nodemy) {
    sumSubject += Nodemy[i].subject.length
}

// console.log('tong tat ca cac mon hoc cua cac hoc vien la:', sumSubject);








// var hocVien1 = Nodemy[0];
