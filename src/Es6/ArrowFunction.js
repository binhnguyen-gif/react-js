// Declaration Function
// Đây là loại khai báo function cơ bản trong javascript và với loại này sẽ có áp dụng Hoisting trong javascript.

function doSomething() {
    console.log('doSomething');
}
// Expression Function (anonymous function)
// Hay còn gọi là anonymous function (function không tên).
// Function kiểu này sẽ được gán vào một biến và nó chỉ sẽ chạy khi runtime nếu biến đó được gọi
// Không áp dụng Hoisting.

run = function() {
    console.log('run');
}
// Arrow Function (ES6)
// + Đây là loại function được thêm vào từ ES6.

// cách viết thường không tham số
let run1 = () => {
    console.log('run'); // out -> run
}
// rút gọn không tham số nếu trong hàm chỉ có 1 dòng lệnh
let run2 = () => console.log('run'); // out -> run
// có tham số
let run3 = (a,b) => {
    return a + b;
}
// có tham số và chỉ có 1 dòng lệnh
let run4 = (a,b) => a + b;
// chỉ có 1 tham số và chỉ có 1 dòng lệnh
let run = a => console.log(a);
// + Không áp dụng Hoisting.

// + Không có context (trỏ this) cho riêng nó, không nên sử arrow function như là một object method.

// arrow function được sử dụng như là một object method
// lúc này [this] sẽ là object Windown chứ không phải là objec a
// vì tự bản thân arrow function không có context, default nó sẽ lấy [this] global.
let a = {
    name: 'A',
    say: () => {
 // <-- object method
	console.log(this.name);
 // out -> empty
    }
}
a.say();
// + Khi được đặt vào bên trong một object method nó sẽ lấy context(this) từ object method cha gần nó nhất.

let a1 = {
    name: 'A',
    sayName : function() {
 // <-- object method
	let b = () => {
	    console.log(this.name);
 // out -> A
	}
	b();
    }
}
a.sayName();