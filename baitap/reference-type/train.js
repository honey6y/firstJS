var hangHoa = [
        {ten: 'Rx-78-2', size:'MG', giaNiemYet: 35500, noiNhap:'Han Quoc', khoiLuong: 540},
        {ten: 'Rx-78-2', size:'HG', giaNiemYet: 12500, noiNhap:'Han Quoc', khoiLuong: 540},
        {ten: 'Sazabi', size:'MG', giaNiemYet: 50500, noiNhap:'Han Quoc', khoiLuong: 1250},
        {ten: 'Hi nu', size:'RG', giaNiemYet: 30500, noiNhap:'Han Quoc', khoiLuong: 870},
        {ten: 'Hi nu', size:'RG', giaNiemYet: 8800, noiNhap:'Nhat Ban', khoiLuong: 870},
        {ten: 'Hi V', size:'RG', giaNiemYet: 40500, noiNhap:'Han Quoc', khoiLuong: 1000},
        {ten: 'Strike Freedom', size:'MG', giaNiemYet: 56000, noiNhap:'Han Quoc', khoiLuong: 890},
        {ten: 'Strike Freedom', size:'HG', giaNiemYet: 4000, noiNhap:'Nhat Ban', khoiLuong: 570},
        {ten: 'Hi V', size:'RG', giaNiemYet: 8000, noiNhap:'Nhat Ban', khoiLuong:1000},
        {ten: 'Freedom 2.0', size:'MG', giaNiemYet: 45000, noiNhap:'Han Quoc', khoiLuong: 950},
        {ten: 'Freedom 2.0', size:'MG', giaNiemYet: 8000, noiNhap:'Nhat Ban', khoiLuong: 950},
    ]



    var kq = hangHoa.map(item=>{
        var list = hangHoa.filter(sp=>{
            return sp.ten == item.ten
        })
        let itemHQ, itemNB = null

        if(list.length == 2){
            list[0].noiNhap === 'Han Quoc' ? itemHQ = list[0] : itemNB = list[0]
            list[1].noiNhap === 'Han Quoc' ? itemHQ = list[1] : itemNB = list[1]
        } else{
            list[0].noiNhap === 'Han Quoc' ? itemHQ = list[0] : itemNB = list[0]
        }

        let data = {
            ten: item.ten,
            giaHQ: itemHQ ? itemHQ.giaNiemYet : 0,
            giaNB: itemNB ? itemNB.giaNiemYet : 0,
        }
        data.chenhLech = data.giaHQ - data.giaNB
        return data
    })

    console.log(kq);

    // [{ten, giaHQ, giaNB, chenhlech}]