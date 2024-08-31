// Infer Types
// let Username="fasalu rahman"
// Username=0
// function add(x: number, y: number) {
//     console.log(x + y)
//     return x + y
// }
// add(2, 3)
var UserDetails = {
    name: "Fasalu",
    age: 20,
    salary: 10000,
    getname: function () {
        console.log(this.name);
    }
};

console.log(UserDetails.getname())