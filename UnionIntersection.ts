//Union Type
// let value:string|number
// value=42
// value="Union Type"

// let array:(string|number)[]=[1,"A",2,"B"]

//Intersection type

interface person{
name:string
age:number
} 

interface adress{
   house:string 
   pincode:number
}

type PersonWithAdress=person&adress

const data:PersonWithAdress={
    name:"Fasalu",
    age:20,
    house:"PKD House",
    pincode:673637
    
}
console.log(data)