// Biến (variable)
console.log('hello world');
// run code for node : node <file name>.js


// variable ES5
// var name = "PHAM MINH DUC";
// var old = 23;
// if (old == 23) {
//     name = "PHAM MINH DUC 1998";
// }

// console.log(name);



// ES6
let name = "PHAM MINH DUC";
let old = 23;
if (old == 23) {
    let name = "PHAM MINH DUC 1998";
    console.log(name);
}

console.log(name);

/**
 * Chỉ nên khai báo biến bằng let hoặc const để tránh xung đột code
 * let có ý nghĩa khi sử dụng trong hàm, ngoài hàm thì let không có giá trị
 * 
 */