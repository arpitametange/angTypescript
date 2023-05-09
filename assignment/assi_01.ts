var mathMarks=Number(prompt("Enter the Math marks"))
var getPhy=Number( prompt("Enter the physics marks"))
var  getChem=Number(prompt("Enter the chemistry marks"))

console.log(`Marks of Math ${mathMarks}`);
console.log(`Marks of Physics ${getPhy}`);
console.log(`Marks of Chemistry ${getChem}`);
console.log(`Total Marks ${mathMarks+getChem+getPhy}`);

var avg:number=(mathMarks+getChem+getPhy)/3
console.log(`Average is ${avg}`);

if (avg<70) {
    console.log("Grade is C");
}
else if((avg>70) && (avg<90)){
   console.log('Grade is B');
}
else if(avg>90){
    console.log("Grade is A");   
}

