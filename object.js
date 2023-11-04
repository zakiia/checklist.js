//12. object property change
const cart = [
    { name : 'laptop', price : 43000, quantity : 1},
    { name : 'phone', price : 55000, quantity : 1},
    { name : 'watch', price : 4500, quantity : 2},
    { name : 'airbuds', price : 2100, quantity : 3},
];
cart[0].price = 67000;
console.log(cart);