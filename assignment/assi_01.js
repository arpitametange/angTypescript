var mathMarks = parseInt(prompt("Enter the Math marks"));
var getPhy = parseInt(prompt("Enter the physics marks"));
var getChem = parseInt(prompt("Enter the chemistry marks"));
console.log("Marks of Math ".concat(mathMarks));
console.log("Marks of Physics ".concat(getPhy));
console.log("Marks of Chemistry ".concat(getChem));
console.log("Total Marks ".concat(mathMarks + getChem + getPhy));
var avg = (mathMarks + getChem + getPhy) / 3;
console.log("Average is ".concat(avg));
if (avg < 70) {
    console.log("Grade is C");
}
else if ((avg > 70) && (avg < 90)) {
    console.log('Grade is B');
}
else if (avg > 90) {
    console.log("Grade is A");
}
