//class parameters property
class person {
    constructor() {
        this.new1 = 12;
    }
    get name() {
        return this.new1;
    }
}
var newObje = new person();
console.log(newObje.name);
//class with constructor
class bank {
    constructor(id, num) {
        this.id = id;
        this.num = num;
    }
}
var obj = new bank(12, 13);
console.log(obj);
class child extends bank {
    constructor() {
        super(99, 88);
    }
}
var childobje = new child();
console.log(childobje);
var inputArr = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
let method = inputArr.filter((element, index) => {
    return inputArr.indexOf(element) == index;
});
console.log(` ${method}`);
console.log(`***********************Given Array**********************`);
// console.log(inputArr);
// function duplicate(array:number) {
//     let n=new Set(array)
//     console.log(n);
// }
// duplicate(inputArr)
// let r:Array<number>=[... (Set<number>:new Set(inputArr))]
// console.log(r);
let array = Array.from(new Set(inputArr));
console.log(array);
// let unique:Array<number>=[]
// inputArr.forEach(element=>{
//     if(unique.includes(element)===false){
//         unique.push(element)
//     }
// })
// console.log(`*********After removing duplicates from array*********`);
// console.log(unique);
