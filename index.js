// --------------- lesson6 - Basic types: string, number, boolean
// const isBirthday: boolean = true;
// let age: number = 40;
// const userName: string = "John";
// age = "40";
// if (isBirthday) {
//   console.log(`Congrats ${userName.toUpperCase()}, age: ${age + 1}`);
// }
// --------------- lesson7 - use types in functions
// const isBirthdayData: boolean = true;
// let ageData: number = 40;
// const userNameData: string = "John";
// function logBirMsg(isBirthday: boolean, age: number, userName: string): void | string {
//   if (isBirthday) {
//     return console.log(`Congrats ${userName.toUpperCase()}, age: ${age + 1}`);
//   } else {
//     return "Error"
//   }
// }
// const logBirMsg2 = (isBirthday: boolean, age: number, userName: string): void | string => {
//   if (isBirthday) {
//     return console.log(`Congrats ${userName.toUpperCase()}, age: ${age + 1}`);
//   } else {
//     return "Error"
//   }
// }
// logBirMsg(true, 35, "Alex");
// logBirMsg(isBirthdayData, ageData, userNameData);
// --------------- lesson8 - type any
// let salary; //any
// const userData = '{"isBirthdayData": true, "ageData": 40, "userNameData": "John"}'
// // const userObj = JSON.parse(userData) //any
// const userObj: {isBirthdayData: boolean, ageData: number, userNameData: string} = JSON.parse(userData)
// console.log(userObj)
// const {isBirthdayData, ageData, userNameData} = userObj
// const logBirMsg2 = (isBirthday: boolean, age: number, userName: string): void | string => {
//   if (isBirthday) {
//     return console.log(`Congrats ${userName.toUpperCase()}, age: ${age + 1}`);
//   } else {
//     return "Error"
//   }
// }
// logBirMsg2(isBirthdayData, ageData, userNameData);
// --------------- lesson9 - practice
// const currRate: string = "1.05";
// const fetchCurr = (response: string) => {
//   const data = JSON.parse(response);
//   return data;
// };
// function transferEurToUsd(available: boolean, amount: number, commission: number): void {
//   if (available) {
//     let res = fetchCurr(currRate) * amount * commission;
//     console.log(res);
//     // Или запись в элемент на странице вместо консоли
//   } else {
//     console.log("Сейчас обмен недоступен");
//   }
// }
// transferEurToUsd(true, 500, 1.05);
// --------------- lesson10 - type never
// const isBirthdayData: boolean = true;
// let ageData: number = 40;
// const userNameData: string = "John";
// const createError = (msg: string) => { // never
//   throw new Error("Error happened")
// }
// const createError2= (msg: string) => { // never
//   while(true) {
//   }
// }
// function logBirMsg(isBirthday: boolean, age: number, userName: string): string {
//   if (isBirthday) {
//     return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
//   } else {
//     return createError("Error")
//   }
// }
// logBirMsg(true, 35, "Alex");
// logBirMsg(isBirthdayData, ageData, userNameData);
// --------------- lesson11 - null undefined
// function getRandData() {
//   if (Math.random() < 0.5) {
//     return null;
//   } else {
//     return "   Some data   ";
//   }
// }
// const data = getRandData();
// const trimmedData = data ? data.trim() : null;
// console.log(trimmedData);
// const test: undefined = undefined;
// const test2: any = undefined;
// const test3: string = undefined;
// --------------- lesson12 - symbol, bigint
// let id: symbol = Symbol("id");
// const data = {
//   [id]: 1,
// };
// console.log(data);
// const num1: bigint = 1n;
// const num2: bigint = 2n;
// console.log(num1 + num2);
// --------------- lesson13 - object
// const isBirthdayData: boolean = true;
// let ageData: number = 40;
// const userNameData: string = "John";
// const userData = {
//   isBirthdayData: true,
//   ageData: 40,
//   userNameData: "John",
//   messages: {
//     error: "Error",
//   },
// };
// const createError = (msg: string) => {
//   throw new Error("Error happened");
// };
// function logBirMsg({
//   isBirthdayData,
//   ageData,
//   userNameData,
//   messages: { error },
// }: {
//   isBirthdayData: boolean;
//   ageData: number;
//   userNameData: string;
//   messages: { error: string };
// }): string {
//   if (isBirthdayData) {
//     return `Congrats ${userNameData.toUpperCase()}, age: ${ageData + 1}`;
//   } else {
//     return createError(error);
//   }
// }
// console.log(logBirMsg(userData));
// --------------- lesson14 array[]
// const departments: string[] = ["dev", "desing", "marketing"];
// const department = departments[0];
// const report = departments
//   .filter((d: string) => d !== "dev")
//   .map((d: string) => `${d} - done`);
// const [first, second] = report;
// console.log("first", first);
// console.log("second", second);
// const nums: number[][] = [
//   [5, 5, 5],
//   [5, 4, 5],
// ];
// --------------- lesson15 - practice
// const electricityUserData = {
//   readings: 95,
//   units: "kWt",
//   mode: "double",
// };
// const waterUserData = {
//   readings: 3,
//   units: "m3",
// };
// const elRate = 0.45;
// const wRate = 2;
// const monthPayments = [0, 0]; // [electricity, water]
// const calculatePayments = (
//   elData: { readings: number; units: string; mode: string },
//   wData: { readings: number; units: string },
//   elRate: number,
//   wRate: number
// ) => {
//   if (elData.mode === "double" && elData.readings < 50) {
//     monthPayments[0] = elData.readings * elRate * 0.7;
//   } else {
//     monthPayments[0] = elData.readings * elRate;
//   }
//   monthPayments[1] = wData.readings * wRate;
// };
// calculatePayments(electricityUserData, waterUserData, elRate, wRate);
// console.log(monthPayments);
// const sendInvoice = (
//   monthPayments: number[],
//   electricityUserData: { readings: number; units: string; mode: string },
//   waterUserData: { readings: number; units: string }
// ) => {
//   const text = `    Hello!
//     This month you used ${electricityUserData.readings} ${electricityUserData.units} of electricity
//     It will cost: ${monthPayments[0]}€
//     This month you used ${waterUserData.readings} ${waterUserData.units} of water
//     It will cost: ${monthPayments[1]}€`;
//   return text;
// };
// const result = sendInvoice(monthPayments, electricityUserData, waterUserData);
// console.log(result);
// --------------- lesson16 tuples
// const userDataTuple: [boolean, number, ...string[]] = [true, 40, "John", 'Alex'];
// userDataTuple[0] = false;
// console.log(userDataTuple)
// --------------- lesson17 - union type
// const message: string | number = 'str';
// const messages: string[] | number[] = ['a', 'b'];
// function printMsg(msg: string | number): void {
//   console.log(msg)
// }
// printMsg(4)
// --------------- lesson18 - narrowing type (звуження типу)
// const message: string | number = "str";
// const messages: string[] | number[] = ["a", "b"];
// function printMsg(msg: string | number): void {
//   if (typeof msg === "string") {
//     console.log(msg.toUpperCase());
//   } else {
//     console.log(msg.toExponential());
//   }
// }
// printMsg("dfgh");
// const printReading = (a: number | string, b: number | boolean) => {
//   if (a === b) {
//     console.log(a, b);
//   }
//   return console.log(a, b);
// };
// printReading("one", true);
// const obj = {
//   user: 50,
//   system: 10,
// };
// function cheackReadings(readings: { system: number } | { user: number }): void {
//   if ("system" in readings) {
//     console.log("system", readings.system);
//   } else {
//     console.log("user", readings.user);
//   }
// }
// cheackReadings(obj);
// const time = Date();
// console.log(time);
// function logValue(x: string | Date) {
//   if (x instanceof Date) {
//     console.log("getDate", x.getDate());
//   } else {
//     console.log(x.slice(0, 5));
//   }
// }
// logValue(time)
// --------------- lesson19 literal types
// let msg: "Hello" = "Hello";
// msg = "Hello";
// function startServer(
//   protocol: "http" | "https",
//   port: 3000 | 5000
// ): "Server started" {
//   console.log(`Server started on ${protocol} :// port:${port}`);
//   return "Server started";
// }
// startServer("http", 5000);
// function createAnimation(
//   id: string | number,
//   animName: string,
//   timingFunc: "ease" | "ease-out" | "ease-in" = "ease", //literal types
//   duration: number,
//   iterCoun: "infinit" | number
// ): void {
//   // const elem = document.querySelector(`#${id}`) as HTMLElement;
//   // if (elem) {
//   console.log(`${animName} ${timingFunc} ${iterCoun}`);
//   // elem.style.animation = `${animName} ${timingFunc} ${iterCoun}`;
//   // }
// }
// createAnimation(12345, "MyAnimation", "ease-out", 500, 5);
// --------------- lesson20 type Aliases
// type AnimationTimingFunc = "ease" | "ease-out" | "ease-in";
// type AnimationId = string | number;
// function createAnimation(
//   id: AnimationId,
//   animName: string,
//   timingFunc: AnimationTimingFunc = "ease", //literal types
//   duration: number,
//   iterCoun: "infinit" | number
// ): void {
//   // const elem = document.querySelector(`#${id}`) as HTMLElement;
//   // if (elem) {
//   console.log(`${animName} ${timingFunc} ${iterCoun}`);
//   // elem.style.animation = `${animName} ${timingFunc} ${iterCoun}`;
//   // }
// }
// createAnimation(12345, "MyAnimation", "ease-out", 500, 5);
// --------------- lesson21 object literals and annotations
// const serverConfig: { protocol: "http" | "https"; port: 3000 | 5000 } = {
//   protocol: "https",
//   port: 5000,
// };
// const startServer: (protocol: "http" | "https", port: 3000 | 5000) => string = (
//   protocol: "http" | "https",
//   port: 3000 | 5000
// ): "Server started" => {
//   console.log(`Server started on ${protocol} :// port:${port}`);
//   return "Server started";
// };
// startServer(serverConfig.protocol, serverConfig.port);
// --------------- lesson22 - type and Intersection
// type Config = { protocol: "http" | "https"; port: 3000 | 5000 };
// type Role = {
//   role: string;
// };
// type ConfigWithRole = Config & Role; //Intersection
// const serverConfig: Config = {
//   protocol: "https",
//   port: 5000,
// };
// const backUpConfig: ConfigWithRole = {
//   protocol: "http",
//   port: 3000,
//   role: "admin",
// };
// type StartFunction = (protocol: "http" | "https", port: 3000 | 5000) => string;
// const startServer: StartFunction = (
//   protocol: "http" | "https",
//   port: 3000 | 5000
// ): "Server started" => {
//   console.log(`Server started on ${protocol} :// port:${port}`);
//   return "Server started";
// };
// startServer(serverConfig.protocol, serverConfig.port);
// --------------- lesson23 - Interfaces
// type Config = { protocol: "http" | "https"; port: 3000 | 5000 };
// interface Config {
//   protocol: "http" | "https";
//   port: 3000 | 5000;
//   log: (msg: string) => void;
// }
// interface Role {
//   role: "admin";
// }
// interface ConfigWithRole extends Config, Role {}
// const serverConfig: ConfigWithRole = {
//   protocol: "https",
//   port: 5000,
//   role: "admin",
//   log: (msg: string): void => console.log(msg),
// };
// type StartFunction = (
//   protocol: "http" | "https",
//   port: 3000 | 5000,
//   log: (msg: string) => void
// ) => string;
// const startServer: StartFunction = (
//   protocol: "http" | "https",
//   port: 3000 | 5000,
//   log: (msg: string) => void
// ): "Server started" => {
//   log(`Server started on ${protocol}://${port}`);
//   return "Server started";
// };
// startServer(serverConfig.protocol, serverConfig.port, serverConfig.log);
// interface Styles {
//   [key: string]: string;
// }
// const styles: Styles = {
//   position: "absolute",
//   top: "20px",
//   left: "50px",
//   align: "centr",
// };
// --------------- lesson24 - Interfaces vs Type
// interface IConfig {
//   protocol: "http" | "https";
//   port: 3000 | 5000;
// }
// interface IConfig {
//   data: Date;
// }
// interface IRole {
//   role: string;
// }
// interface IConfogWithIRole extends IConfig, IRole {}
// const serverConfig: IConfogWithIRole = {
//   protocol: "http",
//   port: 5000,
//   data: new Date(),
//   role: "user",
// };
// type Config = {
//   protocol: "http" | "https";
//   port: 3000 | 5000;
// };
// type Role = {
//   role: string;
// };
// type ConfigWithRole = Config & Role;
// const serverConfig2: IConfogWithIRole = {
//   protocol: "http",
//   port: 5000,
//   data: new Date(),
//   role: "user",
// };
// --------------- lesson25 - test
// структура данных склада с одеждой
// interface ClothesWarehouse {
//   jackets: "empty" | number;
//   hats: "empty" | number;
//   socks: "empty" | number;
//   pants: "empty" | number;
// }
// // структура данных склада с канцтоварами
// interface StationeryWarehouse {
//   scissors: "empty" | number;
//   paper: "empty" | boolean;
// }
// // структура данных склада с бытовой техникой
// interface AppliancesWarehouse {
//   dishwashers: "empty" | number;
//   cookers: "empty" | number;
//   mixers: "empty" | number;
// }
// // общая структура данных, наследует все данные из трех выше
// // + добавляет свои
// interface TotalWarehouse
//   extends ClothesWarehouse,
//     StationeryWarehouse,
//     AppliancesWarehouse {
//   deficit: boolean;
//   date: Date;
// }
// // главный объект со всеми данными, должен подходить под формат TotalWarehouse
// const totalData: TotalWarehouse = {
//   jackets: 5,
//   hats: "empty",
//   socks: "empty",
//   pants: 15,
//   scissors: 15,
//   paper: true,
//   dishwashers: 3,
//   cookers: "empty",
//   mixers: 14,
//   date: new Date(),
//   deficit: true,
// };
// // Реализуйте функцию, которая принимает в себя главный объект totalData нужного формата
// // и возвращает всегда строку
// // Функция должна отфильтровать данные из объекта и оставить только те названия товаров, у которых значение "empty"
// // и поместить их в эту строку. Если таких товаров нет - возвращается другая строка (см ниже)
// // С данным объектом totalData строка будет выглядеть:
// // "We need this items: hats, socks, cookers"
// // Товары через запятую, в конце её не должно быть. Пробел после двоеточия, в конце строки его нет.
// function printReport(data: TotalWarehouse): string {
//   const result = Object.entries(data)
//     .filter((item) => item[1] === "empty")
//     .reduce((res, item) => `${res} ${item[0]},`, "");
//   console.log(result);
//   if (result) {
//     return `We need this items: ${result}`;
//   } else {
//     return "Everything fine";
//   }
//  }
// console.log(printReport(totalData));
// --------------- lesson26 Type Inference
// let salary: number;
// salary = 500;
// interface UserData {
//   isBirthdayData: boolean;
//   ageData: number;
//   userNameData: string;
// }
// const userData =
//   '{"isBirthdayData": true, "ageData": 40, "userNameData": "John"}';
// const userObj: UserData = JSON.parse(userData); //any
// console.log(userObj);
// let isOk = true;
// let movement: boolean | string = false;
// if(isOk) {
//   movement = 'moving';
// }
// --------------- lesson27 - optional property modifiers
// interface User {
//   login: string;
//   password: string;
//   age: number;
//   // addr?: string;
//   addr: string | undefined;
//   parents?: {
//     mom?: string;
//     dad?: string;
//   };
// }
// const user: User = {
//   login: "test@mail.com",
//   password: "qwerty",
//   age: 40,
//   addr: undefined,
// };
// const dbName = "12345";
// function sendUserData(obj: User, db?: string): void {
//   console.log(obj.parents?.mom?.length, db?.concat);
// }
// sendUserData(user)
// --------------- lesson28 - non-null and  non-undefined !
// interface User {
//   login: string;
//   password: string;
//   age: number;
//   // addr?: string;
//   addr: string | undefined;
//   parents?: {
//     mom?: string;
//     dad?: string;
//   };
// }
// const user: User = {
//   login: "test@mail.com",
//   password: "qwerty",
//   age: 40,
//   addr: undefined,
// };
// let dbName: string;
// console.log(dbName!)
// function sendUserData(obj: User, db?: string): void {
//   dbName = "12345";
//   console.log(obj.parents!.mom?.length, db!.concat);
// }
// sendUserData(user);
// --------------- lesson29 - readonly (property modifiers)
// interface User {
//   readonly login: string;
//   password: string;
//   age: number;
//   // addr?: string;
//   addr: string | undefined;
//   parents?: {
//     mom?: string;
//     dad?: string;
//   };
// }
// const user: User = {
//   login: "test@mail.com",
//   password: "qwerty",
//   age: 40,
//   addr: undefined,
// };
// const userFreeze: Readonly<User> = {  // generic
//   login: "test@mail.com",
//   password: "qwerty",
//   age: 40,
//   addr: undefined,
// };
// let dbName: string;
// console.log(dbName!);
// function sendUserData(obj: User, db?: string): void {
//   dbName = "12345";
//   console.log(obj.parents!.mom?.length, db!.concat);
// }
// sendUserData(user);
// class Animal {
//   readonly name: string = "name";
// }
// const basicPorts: readonly number[] = [3000, 3001, 5000];
// basicPorts[0] = 5005;
// basicPorts.push(1515);
// const basicPorts: ReadonlyArray<number> = [3000, 3001, 5000]; //generic
// basicPorts[0] = 5005;
// basicPorts.push(1515);
// const basicPorts: readonly [number, ...string[]] = [3000, "5050", "56656"];
// basicPorts[0] = 5005;
// basicPorts.push(1515);
// --------------- lesson30 - Enums
var TOP = "Top";
var RIGHT = "Right";
var Directions;
(function (Directions) {
    Directions[Directions["TOP"] = 0] = "TOP";
    Directions[Directions["RIGHT"] = 1] = "RIGHT";
    Directions[Directions["LEFT"] = 2] = "LEFT";
    Directions[Directions["BOTTOM"] = 3] = "BOTTOM";
})(Directions || (Directions = {}));
function frame(elem, dir, tFunc) {
    if (dir === Directions.RIGHT) {
        console.log(tFunc);
    }
}
frame("id", Directions.RIGHT, "ease-in" /* TimingFunc.EASE_IN */);
