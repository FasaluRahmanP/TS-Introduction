const UserDetail:UserDetail={
    name:"Fasalu",
    age:20
}
const AdminDetail:AdminDetail={
    Firstname:"Fasalu",
    role:"admin"
}
type UserDetail={
    name:String,
    age:number
}
type AdminDetail={
    Firstname:String,
    role:string
}


function getDetails<T>(details:T):T{
    return details
}
const Uservalue=getDetails<UserDetail>(UserDetail)
const Adminvalue=getDetails<AdminDetail>(AdminDetail)
console.log(Uservalue.name)
Adminvalue.Firstname