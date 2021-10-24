// for of

const obj = {
    sang: 'pho',
    trua: 'bun',
    toi: 'com'
};

for (const key in obj) { console.log(key) };

const arrays = [
    'cam',
    'quyt',
    'xoai',
    'tao',
    'oi'
];

for (const keys in arrays) { console.log(keys) }; // không lấy được giá trị trong mảng 
for (const keys of arrays) { console.log(keys) }; // lấy được giá trị trong mảng 