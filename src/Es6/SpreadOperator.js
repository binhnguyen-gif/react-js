function logger({name, price, ...rest}) {
    console.log(name);
    console.log(price);
    console.log(rest);
}


logger({
    name: 'Nguyen Van A',
    price: 1000,
    description: 'Khoa hoc'
});
// Toán tử spread (nó sẽ bỏ đi dấu ngoặc {}, [] ở đằng trước và đăng sau cả object)

var array1 = ['php', 'java'];
var array2 = ['php1', 'java2'];
var array3 = ['php3', 'java3'];

var array = [...array1, ...array2, ...array3];
console.log(array);