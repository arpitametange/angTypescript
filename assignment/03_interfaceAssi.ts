interface  HundyaiInterface{
    Price(): number 
     getTotalSeats():number;
     Color(): string 
    GPS():string;
}

class hundyai2 implements HundyaiInterface{
    GPS(): string {
        return "Supported"
    }
    Price(): number {
        return 120000
    }
    getTotalSeats():number{
        return 5
    }
    Color(): string {
        return "Black"
    }
}
console.log("*****************Hyundai********************");

var hundyai3=new hundyai2()

console.log(`GPS: ${hundyai3.GPS()}`);


class Toyoto implements HundyaiInterface{
    Price(): number {
           return 670000
    }
    getTotalSeats(): number {
         return 6
    }
    Color(): string {
return "White"
    }
    GPS(): string {
        return "Not supported"
    }

}

let toy=new Toyoto()
console.log("*****************Toyota*****************");

console.log(`GPS: ${toy.GPS()}`);




