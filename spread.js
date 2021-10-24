// Thêm phần tử mới vào array or object

const arrays = [1,2,3,4,5];

const araay1 = [...arrays, 6];

console.log(araay1);


const obj = {
    name: 'PHAM MINH DUC',
    old: 24,
    address: 'NGHE AN'
};

const objs = {...obj, phone: 84367893465};

console.log(objs);