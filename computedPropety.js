const computedPropety = 'buaToi';

const buaAn = {
    buaSang: 'pho',
    buaTrua: 'com',
    [computedPropety]: 'chao'
}

console.log(buaAn);

const buaAns = {
    buaSang: 'pho',
    buaTrua: 'com',
    [computedPropety + ' hom nay']: 'chao'
}

console.log(buaAns);

const buaAnSangChoanh = {
    ...buaAns,
    buaPhu: 'tra sua',
    buaKhuya: 'my tom'
}

console.log(buaAnSangChoanh);