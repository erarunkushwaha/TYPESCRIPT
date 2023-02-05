//    name       type decleration         fn argument
var consoleLog = function (i) {
    console.log(i);
};
// return number
var add = function (a, b) {
    return a + b;
};
// return number
var multiply = function (a, b) {
    return a * b;
};
// no number
var message = function (a) {
    console.log(message);
    // void can return null and undefined
    // return null;
    //return undefined;
};
var thowError = function (mesaage) {
    if (!mesaage) {
        throw new Error(mesaage);
    }
    return mesaage;
};
// never execute last point
var thowNewError = function (mesaage) {
    throw new Error(mesaage);
};
var todayWeather = {
    data: new Date(),
    weather: "Sunny"
};
var logWeather = function (_a) {
    var date = _a.date, weather = _a.weather;
    console.log(date, weather);
};
//  logWeather(todayWeather)
var doSomething = function () {
    console.log("hi there i am hrer");
};
doSomething();
