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

// const TOP = "Top";
// const RIGHT = "Right";

//  enum Directions {
//   TOP,
//   RIGHT,
//   LEFT,
//   BOTTOM,
// }

// const enum TimingFunc {
//   EASE = "ease",
//   EASE_IN = "ease-in",
//   LINEAR = "liner",
// }

// const  enum TimingFuncN {
//   EASE = 1,
//   EASE_IN = 10,
//   LINEAR = EASE * EASE_IN,
// }

// function frame(elem: string, dir: Directions, tFunc: TimingFunc): void {
//   if (dir === Directions.RIGHT) {
//     console.log(tFunc)
//   }
// }

// frame("id", Directions.RIGHT, TimingFunc.EASE_IN);

// --------------- lesson31 - Unknown

// let smth: unknown;

// smth = "str";

// let data: string[] = smth;

// data.find((e) => e);

// const someValue: unknown = 10;
// someValue.method();

// function fetchData(data: unknown): void {
//   if (typeof data === "string") {
//     console.log(data.toLocaleLowerCase());
//   }
// }

// const userData =
//   '{"isBirthdayData": true, "ageData": 40, "userNameData": "John"}';

// function safeParse(s: string): unknown {
//   return JSON.parse(s);
// }

// const data = safeParse(userData);

// function transferData(d: unknown): void {
//   if (typeof d === "string") {
//     console.log(d.toUpperCase);
//   } else if (typeof d === 'object' && d) {
//     console.log(data)
//   } else {
//     console.error('Some Error')
//   }
// }

// transferData(data)

// try {
//   if (1) {
//     throw "error";
//   }
// } catch (e) {
//   console.log(typeof e);
// }

// try {
//   if (1) {
//     throw new Error("error");
//   }
// } catch (e) {
//   if (e instanceof Error) {
//     console.log(e.message);
//   }
// }

// type T0 = any | unknown;
// type T2 = unknown | any;
// type T1 = number | unknown;
// type T3 = unknown & any;
// type T4 = number & unknown;

// --------------- lesson32 - type queries

// const dataFromControl = {
//   water: 200,
//   el: 350,
// };

// function checkReadings(data: typeof dataFromControl): boolean {
//   const dataFromUser = {
//     water: 200,
//     el: 350,
//   };

//   if (data.el === dataFromUser.el && data.water === dataFromUser.water) {
//     console.log("true");
//     return true;
//   }

//   return false;
// }

// checkReadings(dataFromControl);

// const PI = 3.14;
// let PIClone: typeof PI; // 3.14

// --------------- lesson33 task

// Перечисление с названием TypesOfMedia, которое включает строчные типы video, audio

// enum TypesOfMedia {
//   VIDEO = 'video',
//   AUDIO = 'audio'
// }

// // Перечисление с названием FormatsOfMedia, которое включает строчные видео-форматы: .mp4, .mov, .mkv, .flv, .webM

// enum FormatsOfMedia {
//   MP4 = '.mp4',
//   MOV = ".mov",
//   MKV = '.mkv',
//   FLV = ".flv",
//   WEBM = ".webM"
// }

// interface DataStructure {
//   name: string,
//   type: TypesOfMedia,
//   format: FormatsOfMedia,
//   subtitles?: string,
//   marks?: unknown,
// }

// // Описание интерфейса, в котором:
// // name - строка
// // type - один из перечисления выше
// // format = один из перечисления выше
// // subtitles - необязательное поле типа строка
// // marks - необязательное поле неизвестного типа

// function playMedia(
// 	{ name, type, format, subtitles, marks }: DataStructure = {
// 		name: "example",
// 		type: TypesOfMedia.AUDIO,
// 		format: FormatsOfMedia.MP4,
// 	}
// ): string {
// 	let marksLog: string;

//     // Создать функционал, что если marks - это массив, то "сложить" все эелементы в одну строку и поместить в marksLog
//     // Если это строка, то просто поместить её в marksLog
//     // Если что-то другое - то marksLog = "Unsupported type of marks"
//     // Не допускайте any!

//   if(Array.isArray(marks)) {
//     marksLog = marks.join(" ")
//   } else if (typeof marks === 'string') {
//     marksLog = marks;
//   } else {
//     marksLog = 'Unsupported type of marks'
//   }

// 	console.log(`Media ${name}${format} is ${type}
//     Marks: ${marksLog}
//     Subtitles: ${subtitles ?? "none"}`);
//     // помните что это за оператор ??

// 	return "Media started";
// }

// playMedia({
// 	name: "WoW",
// 	format: FormatsOfMedia.MP4,
// 	type: TypesOfMedia.VIDEO,
// 	subtitles: "hmhmhm hmhmhm doh",
// 	marks: ["4:30", "5:40"],
// });

// --------------- lesson34 - type Assertions (узгодження типу)

// const fetchData = (url: string, method: "GET" | "POST"): void => {
//   console.log("Fetched!");
// };

// const requestOptions = {
//   url: "https://some.com",
//   method: "GET",
// };

// const requestOptions2 = {
//   url: "https://some.com",
//   method: "GET",
// } as const;

// const requestOptions3 = {
//   url: "https://some.com",
//   method: "GET",
// };

// fetchData("https://some.com", "GET");
// fetchData(requestOptions.url, requestOptions.method as "GET");
// fetchData(requestOptions2.url, requestOptions2.method);
// fetchData(requestOptions3.url, <"GET">requestOptions3.method); // doesn't work in Reac

// const input2 = <HTMLInputElement>document.querySelector("input");
// const input = document.querySelector("input") as HTMLInputElement;
// const soleNumber: number = input.value as any as number;
// console.log(soleNumber * 2);

// let a = "value" as const;
// let b = { f: 100 } as const;
// let c = [] as const;

// --------------- lesson35 - internal - внутрішні (приведення типів)

// let num: Number = new Number(5);
// let num2: number = 5;
// let num3 = Number(5);

// num = num2;
// num2 = num

// const num4 = 5;
// const strNum: string = num.toString();
// console.log(strNum);
// const numStr: number = +strNum;
// console.log(numStr);

// interface Department {
//   name: string;
//   budget: number;
// }

// const department: Department = {
//   name: "web-dev",
//   budget: 50000,
// };

// interface Project {
//   name: string;
//   projectBudget: number;
// }

// // const mainProject: Project = {
// //   ...department,
// //   projectBudget: 5000,
// // };

// function transformDepartment(department: Department, amount: number): Project {
//   return {
//     name: department.name,
//     projectBudget: amount,
//   };
// }

// const mainProject: Project = transformDepartment(department, 300);

// console.log(mainProject)

// --------------- lesson36 - Type Guard

// function printMsg(msg: string[] | number | boolean): void {
//   if (Array.isArray(msg)) {
//     msg.forEach((m) => console.log(m));
//   } else if (isNumber(msg)) {
//     console.log(msg);
//   } else {
//     console.log(msg);
//   }
// }

// printMsg(5);

// // function isNumber(n: string[] | number | boolean): n is number {
// //   return typeof n === "number";
// // }

// function isNumber(n: unknown): n is number {
//   return typeof n === "number";
// }

// interface Car {
//   engine: string;
//   wheels: number;
// }

// interface Ship {
//   engine: string;
//   sail: string;
// }

// function repaireVehicle(vehicle: Car | Ship) {
//   if (isCar(vehicle)) {
//     console.log(vehicle.wheels, vehicle.engine);
//   } else if (isShip(vehicle)) {
//     console.log(vehicle.sail);
//   } else {
//     vehicle // never
//   }
// }

// function isCar(car: Car | Ship): car is Car {
//   // return "wheels" in car;
//   return (car as Car).wheels !== undefined;
// }

// function isShip(ship: Car | Ship): ship is Ship {
//   return (ship as Ship).sail !== undefined;
// }

// const someCar = {
//   engine: "V8",
//   sail: 'uhijkl',
// };

// repaireVehicle(someCar);

// --------------- lesson37 case use never

// interface Car {
//   name: "car";
//   engine: string;
//   wheels: number;
// }

// interface Ship {
//   name: "ship";
//   engine: string;
//   sail: string;
// }

// interface Airplane {
//   name: "airplane";
//   engine: string;
//   wings: string;
// }

// interface SuperAirPlane {
//   name: "smth";
//   engine: string;
//   wings: string;
// }

// type Vehicle = Car | Ship | Airplane | SuperAirPlane;

// function repaireVehicle(vehicle: Vehicle) {
//   switch (vehicle.name) {
//     case "car":
//       console.log(vehicle.wheels);
//       break;
//     case "ship":
//       console.log(vehicle.sail);
//       break;
//     case "airplane":
//       console.log(vehicle.wings);
//       break;
//     case "smth":
//       console.log(vehicle.wings);
//       break;
//     default:
//       const smth: never = vehicle;
//       console.log("Ouups");
//   }
// }

// const someCar: Vehicle = {
//   name: "car",
//   engine: "V8",
//   wheels: 4,
// };

// repaireVehicle(someCar);

// --------------- lesson38 - overload (перегрузка функцій)

// interface Square {
//   side: number;
//   area: number;
// }

// interface Rect {
//   a: number;
//   b: number;
//   area: number;
// }
// function calculateArea(side: number): Square;  //перегрузка функцій
// function calculateArea(a: number, b: number): Rect; //перегрузка функцій
// function calculateArea(a: number, b?: number): Square | Rect {
//   if (b) {
//     const rect: Rect = {
//       a,
//       b,
//       area: a * b,
//     };
//     return rect;
//   } else {
//     const square: Square = {
//       side: a,
//       area: a * a,
//     };
//     return square;
//   }
// }

// console.log(calculateArea(5));
// console.log(calculateArea(5, 6));

// --------------- lesson39 - (розділення інтерфасу)

// interface Car {
//   name: "car";
//   engine: string;
//   wheels: number;
// }

// interface Ship {
//   name: "ship";
//   engine: string;
//   sail: string;
// }

// interface Airplane {
//   name: "airplane";
//   engine: string;
//   wings: string;
// }

// // розділяти інтерфайс краще ніж робити суцільний
// interface ComplexVehicle {
//   name: "car" | "ship" | "airplane";
//   engine: string;
//   wheels?: number;
//   sail?: string;
//   wings?: string;
// }

// type Vehicle = Car | Ship | Airplane;

// function repaireVehicle(vehicle: ComplexVehicle) {
//   switch (vehicle.name) {
//     case "car":
//       console.log(vehicle.wheels);
//       break;
//     case "ship":
//       console.log(vehicle.sail);
//       break;
//     case "airplane":
//       console.log(vehicle.wings);
//       break;
//     default:
//       // const smth: never = vehicle;
//       console.log("Ouups");
//   }
// }

// const someCar: ComplexVehicle = {
//   name: "car",
//   engine: "V8",
//   wheels: 4,
// };

// repaireVehicle(someCar);

// --------------- lesson40 - task

type Animal = "cat" | "dog" | "bird";

enum AnimalStatus {
  Available = "available",
  NotAvailable = "not available",
}

interface DataAnimal {
  animal: Animal;
  breed: string;
  sterilized?: string;
}

interface AnimalAvalableData extends DataAnimal {
  location: string;
  age?: number;
}

interface AnimalNotAvalableData {
  message: string;
  nextUpdateIn: Date;
}

interface AnimalAvalableResponse {
  status: AnimalStatus.Available;
  data: AnimalAvalableData;
}

interface AnimalNotAvalableResponse {
  status: AnimalStatus.NotAvailable;
  data: AnimalNotAvalableData;
}

type Res = AnimalAvalableResponse | AnimalNotAvalableResponse;

function isAvalable(res: Res): res is AnimalAvalableResponse {
  if (res.status === AnimalStatus.Available) {
    return true;
  } else {
    return false;
  }
}

function checkAnimalData(animal: Res): AnimalAvalableData | string {
  if (isAvalable(animal)) {
    // Заменить условие!
    console.log(animal.data)
    return animal.data;
  } else {
    return `${animal.data}, you can try in ${animal.data.nextUpdateIn}`;
  }
}

const myAnimal: Res = {
  status: AnimalStatus.Available,
  data: {
    animal: "cat",
    breed: "kings",
    sterilized: "sterilized",
    location: "kiev",
    age: 10,
  },
};

checkAnimalData(myAnimal);
