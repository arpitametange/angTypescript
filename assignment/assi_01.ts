var mathMarks=parseInt(prompt("Enter the Math marks")!)
console.log(typeof mathMarks);

var getPhy=parseInt( prompt("Enter the physics marks")!)
var  getChem=parseInt(prompt("Enter the chemistry marks")!)

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

