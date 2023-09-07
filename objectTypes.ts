// Object Types and Type Aliases
//n TypeScript, type aliases allow you to create alternative names for existing types. They make your code more readable and maintainable, especially when dealing with complex type definitions or when you want to give more descriptive names to existing types. To define a type alias in TypeScript, you use the type keyword. Here are some examples of type aliases in TypeScript:

type Test = { x: number, y: number};

var center: Test = {
    x: 0,
    y: 0,
};

var unit : Test = {
    x: 1,
    y:1,
}

// any 

var exampleAny : any;

exampleAny = 123; 

//console.log(exampleAny.trim());

// unkown 

var exampleUnknown: unknown;

exampleUnknown = "codemind ";

if (typeof exampleUnknown === 'string') {
    console.log(exampleUnknown.trim()) 
}
