//  Enhanced object literals
// 1. Định nghĩa key: value cho object
var name = 'Nguyen Van A';
var age = 23;
// default
var object = {
    name: name,
    age: age
}
// simplify áp dụng Enhanced object literals
var object1 = {
    name,
    age
}


console.log(object1.age);
// 2. Định nghĩa method cho object

var object2 = {
    name,
    age,
    getName: function() {
        return name;
    }
}

// simplify áp dụng Enhanced object literals

var object3 = {
    name,
    age,
    getName () {
        return name;
    }
}
console.log(object3.getName());
// 3. Định nghĩa key cho object dưới dạng biến
// Trường hợp sử dụng tùy thuộc vào biến để lấy ra value
 var fieldName = 'name';
 var fieldPrice = 'price';

var course = {
    [fieldName]: 'javascript',
    [fieldPrice]: '1000',
}

console.log(course);