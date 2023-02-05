//    name       type decleration         fn argument
const consoleLog: (i: number) => void = (i: number) => {
  console.log(i);
};

// return number
const add = (a: number, b: number): number => {
  return a + b;
};

// return number
const multiply = function (a: number, b: number): number {
  return a * b;
};

// no number
const message = function (a: string): void {
  console.log(message);

  // void can return null and undefined
  // return null;
  //return undefined;
};

const thowError = (mesaage: string): string => {
  if (!mesaage) {
    throw new Error(mesaage);
  }
  return mesaage;
};

// never execute last point
const thowNewError = (mesaage: string): never => {
  throw new Error(mesaage);
};

const todayWeather = {
  data: new Date(),
  weather: "Sunny"
};

const logWeather = ({
  date,
  weather
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date, weather);
};
//  logWeather(todayWeather)
const doSomething = () => {
  console.log("hi there i am hrer");
};
doSomething();
