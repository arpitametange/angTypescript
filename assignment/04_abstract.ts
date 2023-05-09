abstract class Car {
    // simple method 
    Wheel() : string {
        return '4 wheeler';
    }

    CheckAC() : string {
        return 'Ac is available'
    }
  // non abstract method 
    CallFacility() : string {
        return 'Call facility supported';
    }

    abstract Price() : number;
    abstract getTotalSeats(): number;
    abstract Color() : string ;
}

class Hundyai extends Car {
    Price(): number {
       return 9000000;
    }
    getTotalSeats(): number {
    return 5;
    }
    Color(): string {
       return 'Gray';
    }

}


var hundyai = new Hundyai();
console.log("*****************Hyundai Features********");
console.log(`Price: ${hundyai.Price()}`);
console.log(`Total seat: ${hundyai.getTotalSeats()}`);
console.log(`Color: ${hundyai.Color()}`);


interface newinterface{
    gps():string;
}

class hundyaiClass implements newinterface{
    gps(): string {
        return "Supported"
    }
}
var hundyai=new hundyaiClass()
console.log(`GPS: ${hundyai.gps()}`);





class Tata extends Car{
    Price(): number {
           return 670000
    }
    getTotalSeats(): number {
         return 6
    }
    Color(): string {
return "black"
    }

}
let tata=new Tata()
console.log("*****************Toyota Features********");

console.log(`Price: ${tata.Price()}`);
console.log(`Total seat: ${tata.getTotalSeats()}`);
console.log(`Color: ${tata.Color()}`);
