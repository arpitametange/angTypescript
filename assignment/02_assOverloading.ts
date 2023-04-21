function findEmployees(id:number, name1:string);
function findEmployees(id:string,name1:string);
function findEmployees(id:boolean,name1:string);

function findEmployees(id:any,name1:any) {
    if( typeof id==="number"){
        return `Datatype of id is Number - id:${id} and Datatype of name is String - Name:${name1}`
    }
    else  if(typeof id==="string"){
        return `Datatype of id is String  - id:${id} and Datatype of name is String - Name:${name1}`
    }
    else if(typeof id==="boolean"){
        return `Datatype of id is boolean - id:${id} and Datatype of name is String -Name:${name1}`
    }
}
console.log("************Create method findEmployees and make it overloading**********");

let new2=findEmployees(12,"Ankita")
console.log( new2);
console.log('----------------------------------------------------------------');

let new1=findEmployees('Five',"Anvita")
console.log(new1);
console.log('----------------------------------------------------------------');

let new3=findEmployees(true,"Amrita")
console.log(new3);


