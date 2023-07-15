// Destructuring, Rest
// Destructuring
var arr = ["Javascript", "PHP", "Ruby"];

var [a, b, c] = arr;

// bỏ qua b
var [a, , c] = arr;

console.log("a:" + a);

// Rest parameters lấy ra những thành phần còn lại trong arr
// Khi kết hợp với toán tử destruring thì là toán tử rest

var [a, ...rest] = arr;

console.log("test: " + a, b, c);
console.log("test1: " + rest);
console.log(rest);
// Toán tử spread

var course = {
  name: "javascript",
  price: 1000,
  image: "path",
  children: {
    name: "React Js",
  },
};

// Tên phải trùng với tên key trong object
var { name, price, image } = course;
var { name, ...rest } = course;
// Đổi tên name cha thành parentName để tránh bị name con trong children ghi đè
var {
  name: parentName,
  children: { name },
} = course;

// ko có giá trị thì gán giá trị mặc định
var { name, descrition = 'mo ta' } = course;
console.log(name, price);

// Khi sử dụng trong việc định nghĩa tham số nó là toán tử rest
function course1(...params) {
    console.log(params);
} 

console.log(course1(1,2,3,4,5));
