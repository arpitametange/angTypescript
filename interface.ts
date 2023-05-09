interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;

    display(): void; //only declaration 
}

class Product implements IProduct {
    id: number;
    name: string;
    description: string='djfjk';
    price: number;
    display():void{
        console.log("void");
    }

}

let objectProduct=new Product()
objectProduct.display()



interface IPrint {
    print(): void;// declaration 
}


class Excel implements IPrint {

    print(): void {
        console.log('Excel')
    }
}

class PDF implements IPrint {
    print(): void {
        console.log('PDF')
    }
}

class Doc implements IPrint {
    print(): void {
        console.log('Doc')
    }
}

let objectExcel = new Excel();
objectExcel.print();