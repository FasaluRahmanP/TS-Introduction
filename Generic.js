var UserDetail = {
    name: "Fasalu",
    age: 20
};
var AdminDetail = {
    Firstname: "Fasalu",
    role: "admin"
};
function getDetails(details) {
    return details;
}
var Uservalue = getDetails(UserDetail);
var Adminvalue = getDetails(AdminDetail);
console.log(Uservalue.name);
Adminvalue.Firstname;
