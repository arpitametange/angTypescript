class Employee{
    constructor(public firstName:string,public lastName:string){
        this.firstName=firstName;
        this.lastName=lastName;
        
    }
    
    
}
let object=new Employee("Arpita","Metange")
console.log(`Object created using the class `);
console.log(`First name : ${object.firstName}, Last name: ${object.lastName}`);

