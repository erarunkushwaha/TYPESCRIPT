const carMakers = ["ford", "tyota", "hundai"];

// array of string
const carMakersName: string[] = [];

// array that contains array of strings
const carMakesBy: string[][] = [["arun", "kumar"]];

//
const dateOfArray = [new Date(), new Date()];

// help with inference when extracting variable
const carName = carMakers[0];
const myCar = carMakers.pop();

// prevent incompative value
// carMakers.push(100);  ->> error

// help with map
carMakers.map((car: string): string => {
  return car.toLocaleLowerCase();
});

// flexible types
// array of date and string
const importantDates: (string | Date)[] = [new Date()];
