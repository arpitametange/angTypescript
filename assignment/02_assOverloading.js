function findEmployees(id, name1) {
    if (typeof id === "number") {
        return "Datatype of id is Number - id:".concat(id, " and Datatype of name is String - Name:").concat(name1);
    }
    else if (typeof id === "string") {
        return "Datatype of id is String  - id:".concat(id, " and Datatype of name is String - Name:").concat(name1);
    }
    else if (typeof id === "boolean") {
        return "Datatype of id is boolean - id:".concat(id, " and Datatype of name is String -Name:").concat(name1);
    }
}
console.log("************Create method findEmployees and make it overloading**********");
var new2 = findEmployees(12, "Ankita");
console.log(new2);
console.log('----------------------------------------------------------------');
var new1 = findEmployees('Five', "Anvita");
console.log(new1);
console.log('----------------------------------------------------------------');
var new3 = findEmployees(true, "Amrita");
console.log(new3);
