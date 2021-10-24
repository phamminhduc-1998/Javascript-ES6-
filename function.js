// Hàm (Function)

//ES5
// function sum(x, y) {
//     return x + y;
// }

// const Tong =  sum(10, 15);
// console.log(Tong);


//ES6
// const sum = (x, y) => {
//     return x + y;
// }

// const Tong =  sum(10, 15);
// console.log(Tong);


// const name = (names) => {
//     console.log(names);
// }

// Cách viết gọn hơn nếu chỉ truyền vào 1 biến và trong {} chỉ có 1 lệnh 
// const name = names => console.log(names);

// name("PHAM MINH DUC");


// 
const congHaiSo = (x, y) => x + y;
console.log(congHaiSo(2, 3));