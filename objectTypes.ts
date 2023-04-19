// Object Types and Type Aliases
let obje:{
    s:number,
    t:number,
}={s:12,t:12}


type Test = { x: number, y: number};

let center : Test = {
    x: 0,
    y: 0,
};

let unit : Test = {
    x: 1,
    y:1,
}

// any 

let exampleAny : any;

exampleAny = 123; 

//console.log(exampleAny.trim());

// unkown 

let exampleUnknown: unknown;

exampleUnknown = "codemind ";

if (typeof exampleUnknown === 'string') {
    console.log(exampleUnknown.trim()) 
}
