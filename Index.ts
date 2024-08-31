// Infer Types
// let Username="fasalu rahman"
// Username=0
// function add(x: number, y: number) {
//     console.log(x + y)
//     return x + y
// }
// add(2, 3)

//Defining Types(Explicit Types)
// let username:string="Debug Media"
// let count:number=2003
// let question:boolean=true
// let skills:string[]=["html","css","js"]
// let userdetails:{name:string;age:number}={
//     name:"Fasalu",
//     age:20
// }
// let user:string|null;null
// let res:number|undefined;
// let combained:number|string;
// combained="rahman"
// combained=20

//INTERFACE

interface Details{
    name:string;
    age:number;
    salary:number;
    getname:()=>void;
}
let UserDetails:Details={
    name:"Fasalu",
    age:20,
    salary:10000,
    getname(){
        console.log(this.name)
    }
}