// Default Parameter  Tham số mặc định 
// ES5 
// function congHaiSo(x, y) {
//     if (y === undefined) {
//         y = 2;
//     }

//     return x + y;
// }

// const tong = congHaiSo(10, 5);
// console.log(tong);

// ES6
const congHaiSo = (x, y = 2) => x + y;
const tong = congHaiSo(10, 5);
console.log(tong);