var inputArr = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
console.log("***********************Given Array**********************");
console.log(inputArr);
// function duplicate(array:number) {
//     let n=new Set(array)
//     console.log(n);
// }
// duplicate(inputArr)
// let r:Array<number>=[... (Set<number>:new Set(inputArr))]
// console.log(r);
var unique = [];
inputArr.forEach(function (element) {
    if (unique.includes(element) === false) {
        unique.push(element);
    }
});
console.log("*********After removing duplicates from array*********");
console.log(unique);
