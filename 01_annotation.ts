let apple: string = "i have  apple";
let total: number = 4;
let whiteApple: boolean = false;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// store multiple type in variable
let numberOrBoolean: boolean | number = false;
numberOrBoolean = 10;

// built in object
let now: Date = new Date();

// Array
let colors: string[] = ["red", "green", "blue"];
let numbers: number[] = [2, 3, 4, 5];
let truths: boolean[] = [true, false, false, true];

// class
class Car {}
let car: Car = new Car();

//object literals
let point: { x: number; y: number; z: string } = {
  x: 10,
  y: 20,
  z: "apple"
};

// when to use annotation
// funcation that return any type
// const json = { x: 10, y: 20 };
const coordinates: { x: number; y: number } = JSON.parse("json data");
