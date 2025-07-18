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

// type Animal = "cat" | "dog" | "bird";

// enum AnimalStatus {
//   Available = "available",
//   NotAvailable = "not available",
// }

// interface DataAnimal {
//   animal: Animal;
//   breed: string;
//   sterilized?: string;
// }

// interface AnimalAvalableData extends DataAnimal {
//   location: string;
//   age?: number;
// }

// interface AnimalNotAvalableData {
//   message: string;
//   nextUpdateIn: Date;
// }

// interface AnimalAvalableResponse {
//   status: AnimalStatus.Available;
//   data: AnimalAvalableData;
// }

// interface AnimalNotAvalableResponse {
//   status: AnimalStatus.NotAvailable;
//   data: AnimalNotAvalableData;
// }

// type Res = AnimalAvalableResponse | AnimalNotAvalableResponse;

// function isAvalable(res: Res): res is AnimalAvalableResponse {
//   if (res.status === AnimalStatus.Available) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function checkAnimalData(animal: Res): AnimalAvalableData | string {
//   if (isAvalable(animal)) {
//     // Заменить условие!
//     console.log(animal.data)
//     return animal.data;
//   } else {
//     return `${animal.data}, you can try in ${animal.data.nextUpdateIn}`;
//   }
// }

// const myAnimal: Res = {
//   status: AnimalStatus.Available,
//   data: {
//     animal: "cat",
//     breed: "kings",
//     sterilized: "sterilized",
//     location: "kiev",
//     age: 10,
//   },
// };

// checkAnimalData(myAnimal);

// ------------------------ task V2

// Request
// {
//     animal: 'cat' | 'dog' | 'bird',
//     breed: string,
//     sterilized?: string
// }

// Response #1

// {
//     status: 'available',
//     data: {
//         animal: 'cat' | 'dog' | 'bird',
//         breed: string,
//         sterilized?: string,
//         location: string,
//         age?: number
//     }
// }

// Response #2

// {
//     status: 'not available',
//     data: {
//         message: string,
//         nextUpdateIn: Date
//     }
// }

// enum ResponseStatus {
//   Available = "available",
//   NotAvailable = "not available",
// }

// type Animal = "cat" | "dog" | "bird";

// interface AnimalData {
//   animal: Animal;
//   breed: string;
//   sterilized?: string;
// }

// interface AnimalAvalableData extends AnimalData {
//   location: string;
//   age?: number;
// }

// interface AnimalNotAvalableData {
//   message: string;
//   nextUpdateIn: Date;
// }

// interface AnimalAvalableResponse {
//   status: ResponseStatus.Available;
//   data: AnimalAvalableData;
// }

// interface AnimalNotAvalableResponse {
//   status: ResponseStatus.NotAvailable;
//   data: AnimalNotAvalableData;
// }

// type Res = AnimalAvalableResponse | AnimalNotAvalableResponse;

// function isAvalable(res: Res): res is AnimalAvalableResponse {
//   if (res.status === ResponseStatus.Available) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function checkAnimalData(
//   animal: Res
// ): AnimalAvalableData | AnimalNotAvalableData {
//   if (isAvalable(animal)) {
//     // Заменить условие!
//     return animal.data;
//   } else {
//     return animal.data;
//   }
// }

// const cheackAnimal: Res = {
//   status: ResponseStatus.NotAvailable,
//   data: {
//     message: 'This anima not avalable',
//     nextUpdateIn: new Date(),
//   },
// };

// console.log(checkAnimalData(cheackAnimal))

// --------------- lesson41 - work with DOM

// const hElem = document.createElement("h1");
// hElem.textContent = "test";
// document.body.append(hElem);

// const link = document.querySelector('h1') as HTMLElement;

// let counter = 0;
// link.addEventListener("click", (e) => {
//   counter++;
//   console.log("Clicked", counter);
// });

// --------------- lesson42 - task Dom

// const forms = document.querySelectorAll("form");
// const email = document.getElementById("email") as HTMLInputElement;
// const title = document.getElementById("title") as HTMLInputElement;
// const text = document.getElementById("text") as HTMLTextAreaElement;
// const checkbox = document.getElementById("checkbox") as HTMLInputElement;

// interface IFormData {
//   email: string;
//   title: string;
//   text: string;
//   checkbox: boolean;
// }

// const formData: IFormData = {
//   email: "",
//   title: "",
//   text: "",
//   checkbox: false,
// };

// forms.forEach((form) =>
//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     formData.email = email?.value ?? "";
//     formData.title = title?.value ?? "";
//     formData.text = text?.value ?? "";
//     formData.checkbox = checkbox?.checked ?? false;

//     if (validateFormData(formData)) {
//       checkFormData(formData);
//       form.reset();
//     }
//   })
// );

// // Последовательность действий:
// // 1) Происходит submit любой из форм
// // 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// // 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// // 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом

// function validateFormData(data: IFormData): boolean {
//   // Если каждое из свойств объекта data правдиво...
//   if (Object.values(data).every((value) => value)) {
//     return true;
//   } else {
//     console.log("Please, complete all fields");
//     return false;
//   }
// }

// function checkFormData(data: IFormData) {
//   const { email } = data;
//   const emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];

//   // Если email совпадает хотя бы с одним из массива
//   if (emails.some((e) => e === email)) {
//     console.log("This email is already exist");
//   } else {
//     console.log("Posting data...");
//   }
// }

// --------------- lesson43 - void in function

// type FuncVoid = () => void;

// const myfunc: FuncVoid = (): number => {
//   return 5
// };

// const result = myfunc()

// console.log(result)

// const myfunc2 = (): void => {
//   return 5
// };

// --------------- lesson44 - Generics

// function processingData<T>(data: T): T {
//   return data;
// }

// const res1 = processingData(1);
// const res2 = processingData("1");

// const num = 10;
// const res3 = processingData<number>(num);

// interface PrintUK {
//   design: number;
// }

// interface PrintUES {
//   design: string;
// }

// interface Print<T> {
//   design: T;
// }

// const somePrint: Print<string> = {
//   design: "ten",
// };

// const somePrint2: Print<number> = {
//   design: 10,
// };

// Array<T>

// RefferalSystem<UserId, S>

// T U V S P K/V

// --------------- lesson45 - Generics functions

// function processingData<T, S>(data: T[], options: S): string {
//   data.length;
//   switch (typeof data) {
//     case "string":
//       return `${data}, speed ${options}`;
//       break;
//     case "number":
//       return `${data}, speed ${options}`;
//       break;
//     default:
//       return " not valid";
//   }
// }

// const res1 = processingData([1], "12");
// const res2 = processingData(["1"], false);

// const num = 10;
// let res3 = processingData<number, string>([num], "ten");

// function processing<T>(data: T): T {
//   return data;
// }

// interface ProcessingFn {
//   <T>(data: T): T;
// }

// // let newFunc: <T>(data: T) => T = processing;

// let newFunc: ProcessingFn = processing;

// interface DataSaver {

//   // processing: <T>(data: T) => T;

//   // processing: typeof processing;

//   processing: ProcessingFn;
// }

// // const saver: DataSaver = {                    // V1
// //   processing(data) {
// //     console.log(data);
// //     return data;
// //   },
// // };

// // const saver: DataSaver = {                    // V2
// //   processing: <T>(data: T) => {
// //     return data;
// //   },
// // };

// const saver: DataSaver = {
//   // V3
//   processing: processing,
// };

// --------------- lesson46 - Generics type interface, constraints

// interface ProcessingFn {
//   <T>(data: T): T;
// }

// function processing<T>(data: T): T {
//   return data;
// }

// let newFunc: ProcessingFn = processing;

// type Smth<T> = T;

// const num: Smth<number> = 5;

// // type User<T, S> = {
// //   login: T;
// //   age: S;
// // };

// interface User<T, S> {
//   login: T;
//   age: S;
// }

// const user: User<string, string> = {
//   login: "str",
//   age: "20",
// };

// type OrNUll<Type> = Type | null;
// type OneOrMany<Type> = Type | Type[];

// const data: OneOrMany<number[]> = [5, 10];

// //------------------------------

// interface ParentsOfAnimal {
//   mom: string;
//   father: string;
// }
// interface Animal<ParentData extends ParentsOfAnimal> {
//   login: string;
//   parents: ParentData;
// }

// const Dog: Animal<{ mom: string; father: string; married: boolean }> = {
//   login: "str",
//   parents: { mom: "lily", father: "", married: true },
// };

// //------------------------------

// const depositMoney = <T extends number | string>(amount: T): T => {
//   console.log(`req to server with amount: ${amount}`);
//   return amount;
// };

// depositMoney(500);
// depositMoney('500');
// depositMoney(false);

// --------------- lesson47 - task

// // Создать Generic-интерфейс PlayerData, который подходил бы для создания таких объектов:

// interface PlayerData<Game, Hours> {
//   game: Game;
//   hours: Hours;
//   server: string;
// }

// const player1: PlayerData<string, number> = {
//   game: "CS:GO",
//   hours: 300,
//   server: "basic",
// };

// const player2: PlayerData<number, string> = {
//   game: 2048,
//   hours: "300 h.",
//   server: "arcade",
// };

// const player3: PlayerData<string, object> = {
//   game: "Chess",
//   hours: {
//     total: 500,
//     inMenu: 50,
//   },
//   server: "chess",
// };

// // Массив данных с фигурами содержит объекты, у каждого из которых обязательно есть свойство name
// // Каждый объект может еще содержать дополнительные свойства в случайном виде
// // Свойство name может иметь только 4 варианта
// // Функция calculateAmountOfFigures должна принимать массив с объектами, у которых обязательно должно быть свойство name
// // Возвращает она объект-экземпляр AmountOfFigures
// // Внутри себя подсчитывает сколько каких фигур было в массиве и записывает результаты в AmountOfFigures
// // С текущими данными в консоль должно попадать:
// // { squares: 3, circles: 2, triangles: 2, others: 1 }

// enum FigureNames {
//   Rect = "rect",
//   Triangle = "triangle",
//   Line = "line",
//   Circle = "circle",
// }

// interface Figure {
//   name: FigureNames;
// }

// interface AmountOfFigures {
//   squares: number;
//   circles: number;
//   triangles: number;
//   others: number;
// }

// function calculateAmountOfFigures<T extends Figure>( figure: T[]): AmountOfFigures {
//   const amout: AmountOfFigures = {
//     squares: 0,
//     circles: 0,
//     triangles: 0,
//     others: 0,
//   };

//   figure.forEach((item) => {
//     switch (item.name) {
//       case FigureNames.Circle:
//         amout.circles++;
//         break;

//       case FigureNames.Rect:
//         amout.squares++;
//         break;

//       case FigureNames.Line:
//         amout.others++;
//         break;

//       case FigureNames.Triangle:
//         amout.triangles++;
//         break;
//     }
//   });
//   return amout;
// }

// const data = [
//   {
//     name: FigureNames.Rect,
//     data: { a: 5, b: 10 },
//   },
//   {
//     name: FigureNames.Rect,
//     data: { a: 6, b: 11 },
//   },
//   {
//     name: FigureNames.Triangle,
//     data: { a: 5, b: 10, c: 14 },
//   },
//   {
//     name: FigureNames.Line,
//     data: { l: 15 },
//   },
//   {
//     name: FigureNames.Circle,
//     data: { r: 10 },
//   },
//   {
//     name: FigureNames.Circle,
//     data: { r: 5 },
//   },
//   {
//     name: FigureNames.Rect,
//     data: { a: 15, b: 7 },
//   },
//   {
//     name: FigureNames.Triangle,
//   },
// ];

// console.log(calculateAmountOfFigures(data));

// --------------- lesson48 - Generics class

// class User<T, S> {
//   name: T;
//   age: S;

//   constructor(name: T, age: S) {
//     this.name = name;
//     this.age = age;
//   }
//   sayMyFullName<T>(surname: T): string {
//     if (typeof surname !== "string") {
//       return "I have only name";
//     } else {
//       return `${this.name} ${surname} is ${this.age}`;
//     }
//   }
// }

// const ivan = new User("Ivan", 30);
// console.log(ivan);

// const alex = new User<number, boolean>(10, true);
// console.log(alex);

// console.log(ivan.sayMyFullName(0));

// class AdminUser<T> extends User<string, number> { // can't use <T, S> must be <string, number>
//   rules: T;

//   constructor(name: string, age: number, rules: T) {
//     super(name, age);
//     this.rules = rules;
//   }
// }

// --------------- lesson49 - embedded generalizations(Readonly, Partial, Required)

// const arr: Array<number> = [1, 2, 3];
// const arr2: number[] = [1, 2, 3];

// const roarr: ReadonlyArray<string> = ["str"];
// // roarr[0] = 'ghbjnkml';

// interface IState {
//   data: {
//     name: string;
//   };
//   tag?: string;
// }

// const state: Partial<IState> = {
//   data: {
//     name: "Jhon",
//   },
// };

// const strictState: Required<IState> = {
//   data: {
//     name: "Pes",
//   },
//   tag: 'Req'
// };

// function action(state: Readonly<IState>): void {
//   const newData = structuredClone(state);
//   console.log(newData);
// }

// action({
//   data: { name: "value" },
//   tag: "example",
// });

// --------------- lesson50 - talk

// --------------- lesson51 - keyof

// interface ICompany {
//   name: string;
//   debts: number;
// }

// type CompanyKeys = keyof ICompany;
// const keys: CompanyKeys = "name";

// function printDebts<T, K extends keyof T, S extends keyof T>(
//   company: T,
//   name: K,
//   debts: S
// ) {
//   console.log(`Company ${company[name]}, debts ${company[debts]}`);
// }

// const hh: ICompany = {
//   name: "HH",
//   debts: 5000,
// };

// printDebts(hh, "name", "debts");

// const google = {
//   name: "Google",
//   open: "true",
// };

// printDebts(google, "name", "open");

// --------------- lesson52 - typeof

// function printDebts<T, K extends keyof T, S extends keyof T>(
//   company: T,
//   name: K,
//   debts: S
// ) {
//   console.log(`Company ${company[name]}, debts ${company[debts]}`);
// }

// const google = {
//   name: "Google",
//   open: "true",
// };

// type GoogleKeys = keyof typeof google;

// const keys: GoogleKeys = 'name'

// --------------- lesson53 - Indexed Access Types

// interface ICompany {
//   name: string;
//   debts: number;
//   departments: Department[];
//   managment: {
//     owner: string;
//   };
// }

// interface Department {
//   [key: string]: string;
// }

// // const debts = 'debts'; // V1
// // let debts = "debts" as "debts"; // V2
// let debts: "debts" = "debts"; // V3

// // type CompanyDebtsType = ICompany["debts"];
// type CompanyDebtsType = ICompany[typeof debts];
// type CompanyOwnerType = ICompany["managment"]["owner"];
// type CompanyDepType = ICompany["departments"];
// type CompanyDepTypes = ICompany["departments"][number];

// type Test = ICompany[keyof ICompany];

// type CompanyKeys = keyof ICompany;
// const keys: CompanyKeys = "name";

// // const hh: ICompany = {
// //   name: "HH",
// //   debts: 5000,
// // };

// function printDebts<T, K extends keyof T, S extends keyof T>(
//   company: T,
//   name: K,
//   debts: S
// ) {
//   console.log(`Company ${company[name]}, debts ${company[debts]}`);
// }

// const google: ICompany = {
//   name: "Google",
//   debts: 10000,
//   departments: [
//     {
//       sales: "sales",
//       developer: "dev",
//     },
//   ],
//   managment: {
//     owner: "Jhon",
//   },
// };

// type GoogleKeys = keyof typeof google;

// const keys2: GoogleKeys = "name";

// --------------- lesson54 - task

// interface IPhone {
//   company: string;
//   number: number;
// }

// // IMobilePhone должен наследоваться от IPhone,
// // тип свойства companyPartner зависит от свойства company

// interface IMobilePhone extends IPhone {
//   size: string;
//   companyPartner: IPhone["company"];
//   manufactured: Date;
// }

// // Типизировать объект phones

// const phones: IMobilePhone[] = [
//   {
//     company: "Nokia",
//     number: 1285637,
//     size: "5.5",
//     companyPartner: "MobileNokia",
//     manufactured: new Date("2022-09-01"),
//   },
//   {
//     company: "Samsung",
//     number: 4356637,
//     size: "5.0",
//     companyPartner: "SamMobile",
//     manufactured: new Date("2021-11-05"),
//   },
//   {
//     company: "Apple",
//     number: 4552833,
//     size: "5.7",
//     companyPartner: "no data",
//     manufactured: new Date("2022-05-24T12:00:00"),
//   },
// ];

// interface IPhonesManufacturedAfterDate extends IMobilePhone {
//   initialDate: string;
// }

// // Функция должна отфильтровать массив данных и вернуть новый массив
// // с телефонами, выпущенными после даты в третьем аргументе

// function filterPhonesByDate<T, K extends keyof T>(
//   phones: T[],
//   key: K,
//   initial: string
// ): Partial<IPhonesManufacturedAfterDate>[] {
//   return phones
//     .filter((phone) => {
//       const manufactured = phone[key];

//       if (
//         manufactured instanceof Date &&
//         manufactured.getTime() > new Date(initial).getTime()
//       ) {
//         return phone;
//       }
//     })
//     .map((phone) => {
//       const newObj = { ...phone, initialDate: initial };
//       return newObj;
//     });
// }

// // Второй аргумент при вызове функции должен быть связан с первым,
// // а значит мы получим подсказки - свойства этого объекта

// console.log(filterPhonesByDate(phones, "manufactured", "2022-01-01"));

// --------------- lesson55 - Conditional types and infer

// // Condition ? true : false

// // SomeType extends OtherType ? TrueType : FalseType

// type Example = "string" extends "Hello" ? string : number;
// type Example2 = "string" extends string ? string : number;

// const str: string = "Hello";
// type Example3 = "string" extends typeof str ? string : number;

// type FromUserOrFromBase<T extends string | number> = T extends string
//   ? IDataFromUser
//   : IDataFromBase;

// interface User<T extends "created" | Date> {
//   created: T extends "created" ? "created" : Date;
// }

// const user: User<"created"> = {
//   created: "created",
// };

// interface IDataFromUser {
//   weight: string;
// }

// interface IDataFromBase {
//   calories: number;
// }

// // function calculateDailyCalories(str: string): IDataFromUser; // перегрузка функцій
// // function calculateDailyCalories(str: number): IDataFromBase; // перегрузка функцій
// // function calculateDailyCalories(
// //   numOrStr: string | number
// // ): IDataFromUser | IDataFromBase {
// //   if (typeof numOrStr === "string") {
// //     const obj: IDataFromUser = {
// //       weight: numOrStr,
// //     };
// //     return obj;
// //   } else {
// //     const obj: IDataFromBase = {
// //       calories: numOrStr,
// //     };
// //     return obj;
// //   }
// // }

// function calculateDailyCalories<T extends string | number>(
//   numOrStr: T
// ): T extends string ? IDataFromUser : IDataFromBase {
//   if (typeof numOrStr === "string") {
//     const obj: IDataFromUser = {
//       weight: numOrStr,
//     };
//     return obj as FromUserOrFromBase<T>; // as T extends string ? IDataFromUser : IDataFromBase
//   } else {
//     const obj: IDataFromBase = {
//       calories: numOrStr,
//     };
//     return obj as FromUserOrFromBase<T>; // as T extends string ? IDataFromUser : IDataFromBase
//   }
// }

// type GetStringType<T extends "hello" | "world" | string> = T extends "hello"
//   ? "hello"
//   : T extends "world"
//   ? "world"
//   : string;

// type GetFirstType<T> = T extends Array<infer First> ? First : T; // infer потрібен щоб витягнути певний тип із якойсь сущьності

// type Ex = GetFirstType<number[]>;

// type ToArray<Type> = Type extends any ? Type[] : never; // task

// type ExArray = ToArray<Ex | string>;

// --------------- lesson56 - Mapped types, +/-operators

// type Currencies = {
//   readonly usa: "usd";
//   china?: "cny";
//   readonly ukraine: "uah";
//   kz?: "tenge";
// };

// type ROnlyCurr = Readonly<Currencies>;

// type CustomCurrencies = {
//   usa: string;
//   china: string;
//   ukraine: string;
//   kz: string;
// };

// type CreateCustomCurr<T> = {
//   +readonly[P in keyof T]-?: string;
// };

// type CustomCurrencies2 = CreateCustomCurr<Currencies>

// // type СопоставимийТип = {
// //   [произвольнийИдентификатор in Множество]: ПроизвольнийТипДанних;
// // };

// type Keys = "name" | "age" | "role";

// type User = {
//   [K in Keys]: string;
// };

// const alex: User = {
//   name: "Alex",
//   age: "25",
//   role: "admin",
// };

// --------------- lesson57 - Template literal types

// type Currencies = {
//   usa: "usd";
//   china?: "cny";
//   ukraine: "uah";
//   kz?: "tenge";
// };

// type CreateCustomCurr<T> = {
//   [P in keyof T as `custom${Capitalize<string & P>}`]: string;
// };

// type CustomCurrencies = CreateCustomCurr<Currencies>;

// type MyAnimation = "fade" | "swipe";
// type Direction = "in" | "out";

// type MyNewAnimation = `${MyAnimation}${Capitalize<Direction>}`;

// --------------- lesson58 - Utility types Pick, Omit, Extract, Exclude, Record

// type Currencies = {
//   usa: "usd";
//   china?: "cny";
//   ukraine: "uah";
//   kz?: "tenge";
// };

// type CurrWithoutUSA = Omit<Currencies, "usa">; // Виключення
// type CurrUSAAndUkraine = Pick<Currencies, "usa" | "ukraine">; // фільтрація за властивістью
// type FadeType = Exclude<MyAnimation, "swipe">; // Видалення із union типу
// type CantriesWthoutUSA = Exclude<keyof Currencies, "usa">; // Видалення із union типу
// type SwipeType = Extract<MyAnimation, "swipe">; // Вибір потрібного типу

// type CreateCustomCurr<T> = {
//   [P in keyof T as `custom${Capitalize<string & P>}`]: string;
// };

// type PlayersNames = "alex" | "Jhon";
// type CustomCurrencies = CreateCustomCurr<Currencies>;

// type GameDataCurr = Record<PlayersNames, CustomCurrencies>;

// const gameData: GameDataCurr = {
//   alex: {
//     customChina: "dsds",
//     customUkraine: "kgyhjk",
//     customUsa: "hhghj",
//     customKz: "juhoj",
//   },
//   Jhon: {
//      customChina: "dsdvdvdvds",
//     customUkraine: "kgyhdvdvdvjk",
//     customUsa: "hhgdvdvdvdvhj",
//     customKz: "juhdvdvdvoj",
//   }
// };

// type MyAnimation = "fade" | "swipe";
// type Direction = "in" | "out";

// type MyNewAnimation = `${MyAnimation}${Capitalize<Direction>}`;

// --------------- lesson59 task 1

// Необходимо типизировать этот большой объект
// Свойство futureClasses должно быть в зависимости от classes по типу
// Свойства exClients и futureClients тоже должны быть в зависимости от currClients
// ИЛИ все три зависят от общего родителя

// Простыми словами: при добавлении свойства в целевой объект они должны быть
// автоматически добавлены в зависимые (сразу подсказка от TS)

// interface IClasses {
//   name: string;
//   startsAt?: string;
//   duration: number;
// }

// interface IFutureClasses extends Omit<IClasses, "startsAt"> {
//   willStartsAt: string;
// }

// interface ICurrClients {
//   name: string;
//   age: string | number;
//   gender: "male" | "female";
//   timeLeft: string;
//   makeCallFor: Date;
// }

// type CurrClientsType = Omit<ICurrClients, 'makeCallFor'>

// type IExClients = Omit<ICurrClients, "timeLeft">

// type IFutureClients = Pick<IExClients, 'name' | 'makeCallFor'>

// interface IFitnessClubCenter {
//   clubName: string;
//   location: string;
//   classes: IClasses[];
//   currClients: CurrClientsType[];
//   futureClasses: IFutureClasses[];
//   exClients: IExClients[];
//   futureClients: IFutureClients[];
// }

// const fitnessClubCenter: IFitnessClubCenter = {
//   clubName: "Fitness club Center",
//   location: "central ave. 45, 5th floor",
//   classes: [
//     {
//       name: "yoga",
//       startsAt: "8:00 AM",
//       duration: 60,
//     },
//     {
//       name: "trx",
//       startsAt: "11:00 AM",
//       duration: 45,
//     },
//     {
//       name: "swimming",
//       startsAt: "3:00 PM",
//       duration: 70,
//     },
//   ],
//   futureClasses: [
//     {
//       name: "boxing",
//       willStartsAt: "6:00 PM",
//       duration: 40,
//     },
//     {
//       name: "breath training",
//       willStartsAt: "8:00 PM",
//       duration: 30,
//     },
//   ],
//   currClients: [
//     {
//       name: "John Smith",
//       age: "-",
//       gender: "male",
//       timeLeft: "1 month",
//     },
//     {
//       name: "Alise Smith",
//       age: 35,
//       gender: "female",
//       timeLeft: "3 month",
//     },
//     {
//       name: "Ann Sonne",
//       age: 24,
//       gender: "female",
//       timeLeft: "5 month",
//     },
//   ],
//   exClients: [
//     {
//       name: "Tom Smooth",
//       age: 50,
//       gender: "male",
//       makeCallFor: new Date("2023-08-12"),
//     },
//   ],
//   futureClients: [
//     {
//       name: "Maria",
//       makeCallFor: new Date("2023-07-10"),
//     },
//   ],
// };

// --------------- lesson59 task 2

// interface IForm {
//   login: string;
//   password: string;
// }

// // Необходимо типизировать объект валидации
// // Учтите, что данные в форме могут расширяться и эти поля
// // должны появиться и в объекте валидации

// const validationData: Validation<IForm> = {
//   login: { isValid: false, errorMsg: "At least 3 characters" },
//   password: { isValid: true },
// };

// type Validation<T> = {
//   [P in keyof T]:
//     | { isValid: true }
//     | { isValid: false; errorMsg: "At least 3 characters" };
// };

// --------------- lesson59 task 3

// interface ISlider {
//   container?: string;
//   numberOfSlides?: number;
//   speed?: 300 | 500 | 700;
//   direction?: "horizontal" | "vertical";
//   dots?: boolean;
//   arrows?: boolean;
//   animationName?: string;
// }

// type customSliderBase = Required<Omit<ISlider, "animationName" | "speed">>;

// interface ICustomSlider extends customSliderBase {
//   speed: number;
// }

// function createSlider({
//   container = "",
//   numberOfSlides = 1,
//   speed = 300,
//   direction = "horizontal",
//   dots = true,
//   arrows = true,
// }: ISlider = {}): void {
//   console.log(container, numberOfSlides, speed, direction, dots, arrows);
// }

// createSlider();

// // Необходимо типизировать объект настроек, который будет зависим
// // от интерфейса ISlider
// // Все поля в нем обязательны для заполнения
// const customSliderOptions: ICustomSlider = {
//   container: "id",
//   numberOfSlides: 4,
//   speed: 1100,
//   direction: "horizontal",
//   dots: true,
//   arrows: true,
// };

// function createCustomSlider(options: ICustomSlider): void {
//   if ("container" in options) {
//     console.log(options);
//   }
// }

// --------------- lesson60 - answers for task

// --------------- lesson61 - Parameters<Type>, ConstructorParameters<Type>, ReturnType<Type>

// function calculate(a: number, b: number): number {
//   return a * b;
// }

// type Calculate = ReturnType<typeof calculate>;

// let anotherResult: Calculate = 5;

// type CalculatePT = Parameters<typeof calculate>;
// type CalculatePT2 = Parameters<typeof calculate>[1];

// type PT1 = Parameters<(a: number) => number>;
// type PT2 = Parameters<<T>(arg: T) => T>;

// class Examplle {
//   constructor(a: number, b: string) {}
// }

// type T0 = ConstructorParameters<typeof Examplle>;

// --------------- lesson62 - Promise JSON

// const jsonText = '{ "name": "Test", "data": 4}';

// const objFromJson = JSON.parse(jsonText);

// console.log(objFromJson);

// interface ToDo {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// }

// let toDoList: ToDo[] = [];

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => response.json())
//   .then((json) => {
//     if ("id" in json) {
//       toDoList.push(json);
//     } else if (Array.isArray(json)) {
//       toDoList = json;
//     }
//     console.log(toDoList);
//   });

// const promise = new Promise<string>((resolve, reject) => {
//   resolve("Test");
// });

// promise.then((resolve) => console.log(resolve.toUpperCase()));

// console.log(promise)

// --------------- lesson63 - Awaited

// type FromPromise = Awaited<Promise<number>>;

// interface User {
//   name: string;
// }

// async function fetchUsers(): Promise<User[]> {
//   const users: User[] = [
//     {
//       name: "Alex",
//     },
//   ];
//   return users;
// }

// const users = fetchUsers();

// type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;

// type UnwrappedPromise<T> = T extends Promise<infer Return> ? Return : T;
// type FetchDataReturnType = UnwrappedPromise<ReturnType<typeof fetchUsers>>;

// --------------- lesson64 - base work with class

// class Box {
//   width!: number;
//   height: number;

//   constructor(width: number, height: number) {
//     this.width = width;
//     this.height = 500;
//   }
// }

// const firstBox = new Box(10, 20);
// console.log(firstBox);

// class User {
//   name!: string;
// }

// const ivan = new User();

// ivan.name = 'Ivan'

// console.log(ivan)

// --------------- lesson65 - class Constructor Перегрузка Дженерики

// class Box {
//   width!: number;
//   height!: number;
//   volume!: string;

//   constructor(volume: string); // Перегрузка
//   constructor(width: number); // Перегрузка
//   constructor(widthOrVolume: number | string) {
//     if (typeof widthOrVolume === "number") {
//       this.width = widthOrVolume;
//     } else {
//       this.volume = widthOrVolume;
//     }
//   }
// }

// class Box2<T> {
//   width!: T;
//   height!: number;
//   volume!: string;

//   constructor(width: T) {
//     this.width = width;
//     this.height = 500;
//   }
// }

// --------------- lesson66 - methods, overload, getter, setter

// class Box {
//   width!: number;
//   height!: number;
//   volume!: number | undefined;
//   content: string | undefined;

//   constructor(width: number, volume?: number, content?: string) {
//     this.width = width;
//     this.height = 500;
//     this.volume = volume;
//     this.content = content;
//   }

//   calculateVolume(): void {
//     if (!this.volume) {
//       this.volume = this.width * this.height;
//       console.log(`Volume is ${this.volume}`);
//     } else {
//       console.log(`Volume is ${this.volume}`);
//     }
//   }

//   checkBoxSize(transport: number): string;
//   checkBoxSize(transport: number[]): string;
//   checkBoxSize(transport: number | number[]): string {
//     if (typeof transport === "number") {
//       return transport >= this.width ? "ok" : "not ok";
//     } else {
//       return transport.some((t) => t >= this.width) ? "ok" : "not ok";
//     }
//   }

//   get boxContent() {
//     return this.content;
//   }

//   set boxContent(value) {
//     this.content = `Date: ${new Date().toTimeString()}, Content: ${value}`;
//   }

//   async content2(value: string) {
//     const data = await new Date().toTimeString();
//     this.content = `Date: ${data}, Content: ${value}`;
//   }
// }

// const firstBox = new Box(250);

// console.log(firstBox.checkBoxSize(250));
// // console.log(firstBox.checkBoxSize([250, 200]));
// console.log((firstBox.boxContent = "test"));
// console.log(firstBox.boxContent);

// console.log(firstBox.content2("test"));

// --------------- lesson67 - Початкове значення та Index signatures

// class Box {
//   width!: number;
//   height: number = 500; // можна створити властивість без конструктора та встановити значення
//   volume!: number | undefined;
//   _content: string | undefined;

//   constructor(width: number, volume?: number, content?: string) {
//     this.width = width;
//     this.volume = volume;
//     this._content = content;
//   }
// }
// const firstBox = new Box(250);

// console.log(firstBox._content);

// class Styles {
//   [s: string]: string | ((s: string) => boolean);

//   method() {
//     return true;
//   }
// }

// const style = new Styles();

// style.color = "red";
// style.font = "Roboto";

// --------------- lesson68 - Extends in class

// class Box {
//   width!: number;
//   height: number = 500; // можна створити властивість без конструктора та встановити значення
//   volume!: number | undefined;
//   _content: string | undefined;

//   constructor(width: number, volume?: number, content?: string) {
//     this.width = width;
//     this.volume = volume;
//     this._content = content;
//   }
//   get boxContent() {
//     return this._content;
//   }

//   set boxContent(value) {
//     this._content = `Date: ${new Date().toTimeString()}, Content: ${value}`;
//   }

//   async content2(value: string) {
//     const data = await new Date().toTimeString();
//     this._content = `Date: ${data}, Content: ${value}`;
//     console.log(this._content);

//     // return this._content;
//   }
// }

// class PesentBox extends Box {
//   wrap!: string;
//   height: number = 1000;

//   constructor(wrap: string, width: number) {
//     super(width);
//     this.wrap = wrap;
//   }
//   override async content2(value: string, text?: string) { // override
//     const data = await new Date().toTimeString();

//     if (!text) {
//       super.content2(value);
//     } else {
//       this._content = `Date: ${data}, Content: ${value}, Text: ${
//         text ? text : "No text"
//       }`;
//     }

//     console.log(this._content);

//     // return this._content;
//   }
// }

// new PesentBox("red", 250).content2("TV", "This Text");

// --------------- lesson69 - implements in class

// interface IUser {
//   login: string;
//   password: string;
// }

// interface IValidation {
//   valid: boolean;
//   isValid: (data: string) => boolean;
// }

// class UserForm implements IUser, IValidation {
//   login!: string;
//   password!: string;
//   valid!: boolean;
//   isValid(login: string) {
//     return login.length > 3;
//   }
// }

// --------------- lesson70 - task

// enum TransferStatus {
//   Pending = "pending",
//   Rejected = "rejected",
//   Completed = "completed",
// }

// enum ErrorMessages {
//   NotFound = "Not found: 404",
//   NotEnoughSpace = "Not enough space: 507",
//   Forbidden = "Forbidden: 403",
// }

// interface ITransfer {
//   path: string;
//   data: string[];
//   date?: Date;
//   start: (p: string, d: string[]) => string;
//   stop: (reason: string) => string;
// }

// interface TransferError {
//   message: ErrorMessages;
// }

// // Класс должен имплементировать ITransfer и TransferError
// class SingleFileTransfer implements ITransfer, TransferError {
//   path!: string;
//   data!: string[];

//   message!: ErrorMessages;
//   transferStatus!: TransferStatus;

//   // Место для реализаций
//   // Необходимо создать метод checkTransferStatus, проверяющий состояние передачи данных
//   // Можно вывести в консоль данные, можно вернуть строку

//   constructor(status: TransferStatus) {
//     this.transferStatus = status;
//   }

//   checkTransferStatus(): string {
//     return this.transferStatus;
//   }

//   start(p: string, d: string[]): string {
//     return "";
//   }

//   // Необходимо создать метод, который будет останавливать передачу данных
//   // И возвращать строку с причиной и датой остановки (Дата в любом формате)

//   stop = (reason: string): string => {
//     return `The transfer was stoped, reason is: ${reason}, Date: ${new Date().toLocaleString()}`;
//   };

//   // Необходимо создать метод, который будет возвращать строку, содержащую
//   // Статус передачи и любое сообщение об ошибке. На ваш выбор или отталкиваться от приходящего аргумента
//   // Метод может показаться странным, но может использоваться для тестов, например

//   error(): string {
//     return `${TransferStatus.Rejected} error message is ${ErrorMessages.NotFound}`;
//   }
// }

// const test = new SingleFileTransfer(TransferStatus.Pending);

// console.log(test.checkTransferStatus());
// console.log(test.stop("WTF?"));
// console.log(test.error());

// --------------- lesson71 - модифікатор видимості

// class Player {
//   private login: string;
//   private _password: string;
//   public server: string; // занчення за замовченням можна не ставити
//   protected consent: boolean; // поширюється нащадка

//   get password() {
//     return this._password;
//   }

//   set password(newPassword: string) {
//     //Validation
//     this._password = newPassword;
//   }
// }

// class CompetitivePlayer extends Player {
//   rang: number;
//   // super(consent: boolean) {
//   //   this.consent = consent;
//   // }
//   isConsendet(consent: boolean) {
//     // if (consent === true) {
//     //   return "Yes";
//     // } else {
//     //   return "No";
//     // }
//     return this.consent ? "Yes" : "No";
//   }
// }

// // const player = new Player();
// // player.login = "ascscs";

// // class User {
// //   public email: string;
// //   public name: string;

// //   constructor(email: string, name: string) {
// //     this.name = name;
// //     this.email = email;
// //   }
// // }

// // class User {
// //   constructor(public email: string, public name: string) {}
// // }
// const test = new Player();

// test.password = "tets";
// console.log(test.password);

// const test2 = new CompetitivePlayer();

// console.log(test2.isConsendet(true));
// console.log(test2.rang);

// --------------- lesson72 - privet fild (#)

// class Player {
//   #login: string; //  privet fild
//   private _password: string;
//   public server: string; // занчення за замовченням можна не ставити
//   protected consent: boolean; // поширюється нащадка

//   get password() {
//     return this._password;
//   }

//   set password(newPassword: string) {
//     //Validation
//     this._password = newPassword;
//   }
// }

// const test = new Player();

// test.login

// --------------- lesson73 - static properties and methods

// function setName() {
//   return 'COD2'
// }

// class Player {
//   private static game: string = "COD";

//   #login: string; //  privet fild
//   private _password: string;
//   public server: string; // занчення за замовченням можна не ставити
//   protected consent: boolean; // поширюється нащадка

//   constructor(game: string) {
//     // this.game = game;
//     Player.game = game;
//   }

//   static { // static block
//     Player.game = setName()
//   }

//   get password() {
//     return this._password;
//   }

//   set password(newPassword: string) {
//     //Validation
//     this._password = newPassword;
//   }

//   static getGameName() {
//     return Player.game;
//     // return this.game;
//   }
// }

// const test = Player.getGameName();

// console.log(test);

// --------------- lesson74 - this in class

// function setName() {
//   return "COD2";
// }

// class Player {
//   private static game: string = "COD";

//   #login: string; //  privet fild
//   private _password: string;
//   public server: string; // занчення за замовченням можна не ставити
//   protected consent: boolean; // поширюється нащадка

//   constructor(game: string, login: string) {
//     // this.game = game;
//     Player.game = game;
//     this.#login = login;
//   }

//   static {
//     // static block
//     Player.game = setName();
//   }

//   get password() {
//     return this._password;
//   }

//   set password(newPassword: string) {
//     //Validation
//     this._password = newPassword;
//   }

//   static getGameName() {
//     return Player.game;
//     // return this.game;
//   }

//   // login(this: Player) { // анотація контекста
//   //   return `Player ${this.#login} online`;
//   // }

//   login = () => {
//     return `Player ${this.#login} online`;
//   };

//   connect() {
//     // Do smth
//     return this; // буде повертати екземпляр
//   }

//   isPro(): this is CompetitivePlayer {
//     return this instanceof CompetitivePlayer;
//   }
// }

// class CompetitivePlayer extends Player {
//   rang: number;
//   checkLogin() {
//     // return super.login();
//     return this.login();
//   }
// }

// const player = new Player("COD", "testLogin");
// console.log(player.login());
// console.log(player.connect().login());

// // const test = player.login.bind(player); // привязка контекста через bind()
// const test = player.login;
// test();

// const player2 = new CompetitivePlayer("COD2", "testLogin2");
// console.log(player2.checkLogin());

// const somePlayer: Player | CompetitivePlayer = new CompetitivePlayer("COD3", "testLogin3")
// console.log(somePlayer.isPro())

// --------------- lesson75 - abstract class

// interface IEngine {
//   model: string;
//   capacity: number;
//   starEngine: (time: Date) => string;
// }

// abstract class AbstractVehicle {
//   model: string;
//   capacity: number;
//   abstract starEngine: (time: Date) => string; // абстрактний метод який потрібно реалізувати
//   stopEngine(time: Date): string {
//     this.starEngine(new Date());
//     return "Engine stopped";
//   }
// }

// new AbstractVehicle();
// class Vehicle extends AbstractVehicle {
//   model: string;
//   capacity: number;
//   starEngine = (time: Date) => {
//     return "Started";
//   };
// }

// const test = new Vehicle().starEngine(new Date());

// console.log(test);

// --------------- lesson76 - task in class

// interface Queue<T> {
//   enqueue(item: T): void; // поставить в очередь
//   dequeue(): T | undefined; // исключить из очереди
//   peek(): T | undefined | null; // посмотреть первый элемент
//   isEmpty(): boolean; // проверка на "пустоту" сущности
//   length(): number; // проверка на длину
// }

// // Реализация очереди через массив
// // Класс ArrayQueue должен имплементировать интерфейс Queue
// // Класс может работать с любым типом данных, то есть помещать любые данные в массив  <-- Важно

// // Очередь - это структура данных, которая выглядит как реальная очередь в магазине
// // Первый, кто подошел к прилавку, первым и уйдет. Так же и в коде при выполнении задач
// // Чуть подробнее можно найти в википедии или на других сайтах по поиску "Очередь структура данных"

// class ArrayQueue<T> implements Queue<T> {
//   // Создать приватное свойство queue, которое по умолчанию массив и содержит массив любого типа
//   private queue: T[] = [];

//   enqueue(this: ArrayQueue<T>, item: T): void {
//     this.queue.push(item);
//   }

//   isEmpty(this: ArrayQueue<T>): boolean {
//     return this.enqueue.length === 0;
//   }

//   dequeue(this: ArrayQueue<T>): T {
//     if (this.isEmpty()) {
//       throw new Error("Queue is empty");
//     }

//     return this.queue.shift() as T;
//   }

//   peek(this: ArrayQueue<T>): T | null {
//     if (this.isEmpty()) {
//       throw null;
//     } else {
//       return this.queue[0];
//     }
//   }

//   length(this: ArrayQueue<T>): number {
//     if (this.isEmpty()) {
//       return 0;
//     }
//     return this.queue.length;
//   }

//   // Подсказка по методам:
//   // при добавлении в очередь можно выполнить метод push
//   // при удалении - shift, так как нужно удалить первый элемент.
//   // Обратите внимание на возвращаемое значение
//   // isEmpty может использоваться в других методах
// }

// // Стэк - это еще одна структура данных. Проще всего её представить как стопку листов на столе
// // Последний, который вы положите сверху, вы и первым потом возьмете.
// // Чуть подробнее можно найти в википедии или на других сайтах по поиску "Стэк структура данных"
// // Класс Stack содержит другие методы, так что ничего имплементировать не нужно
// // Класс может работать с любым типом данных, то есть помещать любые данные в массив и содержит массив любого типа  <-- Важно

// class Stack<T> {
//   // Создать приватное свойство stack, которое по умолчанию массив и содержит массив любого типа
//   private stack: T[] = [];

//   // Создать приватное свойство limit, которое будет типом number
//   private limit: number;

//   // Здесь мы установим лимит на стопку листов.
//   // При переполнении стэка программа зависает, а очень высокая стопка листов падает
//   // Так что лимит всегда должен быть
//   constructor(limit: number = Number.MAX_VALUE) {
//     this.limit = limit;
//   }

//   push(this: Stack<T>, value: T): void {
//     if (this.length() + 1 >= this.limit) {
//       throw new Error("Stack overflow");
//     }
//     this.stack.push(value);
//   }

//   pop(this: Stack<T>): T {
//     if (this.isEmpty()) {
//       throw new Error("Stack is empty");
//     }
//     return this.stack.pop() as T;

//     // Удаляет последний элемент массива
//     // Если в стеке пусто - выбрасывает ошибку (throw new Error)
//     // При удалении элемента возвращает его
//     // Простыми словами: вы берете верхний лист в стопке и используете его
//     // Если на столе нет листов - получается ошибка, брать нечего
//   }

//   length(this: Stack<T>): number {
//     return this.stack.length;
//     // Возвращает кол-во элементов в стэке
//   }

//   isEmpty(this: Stack<T>): boolean {
//     return this.stack.length === 0;
//     // Проверяет стэк на "пустоту"
//   }

//   top(this: Stack<T>): T | null {
//      if (this.isEmpty()) {
//       return null
//     }
//     return this.stack[this.length() -1]

//     // Возвращает последний (верхний) элемент стэка, но не удаляет его
//     // Вы просто читаете, что написано на верхнем листе
//     // Если стэк пуст - вернется null
//   }
// }

// // Для тестов

// const arrTest1 = new ArrayQueue<number>();
// arrTest1.enqueue(5);
// arrTest1.enqueue(10);
// console.log(arrTest1.peek());
// console.log(arrTest1);
// console.log(arrTest1.dequeue());
// console.log(arrTest1.length());
// console.log(arrTest1);

// const arrTest2 = new ArrayQueue<string>();
// arrTest2.enqueue("5");
// arrTest2.enqueue("10");
// console.log(arrTest2.peek());
// console.log(arrTest2.dequeue());
// console.log(arrTest2.length());

// const stackTest1 = new Stack<number>(10);
// stackTest1.push(20);
// stackTest1.push(50);
// console.log(stackTest1.top());
// console.log(stackTest1.pop());
// console.log(stackTest1.length());

// const stackTest2 = new Stack<string>(10);
// stackTest2.push("20");
// stackTest2.push("50");
// console.log(stackTest2.top());
// console.log(stackTest2.pop());
// console.log(stackTest2.length());

// // --------------- lesson77 Decorators

// import "reflect-metadata";

// interface ICuboid {
//   width: number;
//   length: number;
//   height: number;
//   calcArea: (multiply?: number) => number;
//   calcVolume: (multiply?: number) => number;
// }

// @createdAt
// class ShippingContainer implements ICuboid {
//   // @IsInt()
//   // @Min(1)
//   width: number;

//   // @IsInt()
//   // @Min(1)
//   length: number;

//   // @IsInt()
//   // @Min(1)
//   // @Max(8)
//   height: number;
//   // lastCalculation: string;
//   // createdAt: Date;

//   createdAt: any;

//   constructor(width: number, length: number, height: number) {
//     this.width = width;
//     this.length = length;
//     this.height = height;
//   }

//   calcArea(multiply?: number): number {
//     return this.width * this.length * (multiply ? multiply : 1);
//   }

//   calcVolume(multiply?: number) {
//     return this.width * this.length * this.height * (multiply ? multiply : 1);
//   }
// }

// // 1. Необходимо создать декоратор класса, который будет записывать дату создания контейнера
// // Простыми словами - создавать в нем новое свойство createdAt с датой создания экземпляра

// // 2. Необходимо создать декораторы IsInt, Min и Max, которые будут валидировать свойства класса
// // Применение смотри в самом классе. При ошибке выполняйте throw new Error
// // IsInt проверяет на то, что было передано целое число

// // 3. Необходимо создать декоратор метода, который при каждом запуске метода будет создавать
// // ИЛИ менять содержимое свойства самого класса lastCalculation
// // Как значение записывать в него строку "Последний подсчет ${method} был ${Дата}",
// // Где method - это название подсчета, который передается при вызове декоратора (площадь или объем)

// const container = new ShippingContainer(10, 100, 7);
// container.width = 5;
// container.height = 5;
// // console.log(container.calcVolume());
// console.log(container.createdAt);

// function createdAt<T extends { new (...args: any[]): {} }>(constructor: T) {
//   return class extends constructor {
//     createdAt = new Date();
//   };
// }

// --------------- lesson77 - Decorators

// const myCar = {
//   fuel: "50%",
//   open: true,
//   freeSeats: 3,
//   isOpen() {
//     console.log(this.fuel)
//     return this.open ? "open" : "close";
//   },
// };

// function closeCar(car: typeof myCar) {
//   car.open = car.open ? false : true;
//   return car;
// }

// function addFuel(car: typeof myCar) {
//   car.fuel = "100%";
//   return car;
// }

// console.log(closeCar(myCar).isOpen());
// console.log(closeCar(addFuel(myCar)).isOpen());

// --------------- lesson78 - Decorators in TS

// interface ICar {
//   fuel: string;
//   open: boolean;
//   freeSeats: number;
// }
// @closeCar
// @addFuel
// class MyCar implements ICar {
//   fuel: string = "50%";
//   open: boolean = true;
//   freeSeats: number;
//   isOpen() {
//     console.log(this.fuel);
//     return this.open ? "open" : "close";
//   }
// }

// function closeCar<T extends { new (...args: any[]): {} }>(constructor: T) {
//   return class extends constructor {
//     open = false;
//   };
// }

// function addFuel<T extends { new (...args: any[]): {} }>(constructor: T) {
//   return class extends constructor {
//     fuel = "100%";
//   };
// }

// const car = new MyCar();
// console.log(car);

// car.isOpen();
// console.log("car.open", car.open);

// console.log("car.fuel", car.fuel);

// --------------- lesson79 - Терминология, фабрика декораторов

// interface ICar {
//   fuel: string;
//   open: boolean;
//   freeSeats: number;
// }

// @changeDoorStatus(true)
// @changeAmountOfFuel('90%')
// class MyCar implements ICar {
//   fuel: string = "50%";
//   open: boolean = true;
//   freeSeats: number;
//   isOpen() {
//     console.log(this.fuel);
//     return this.open ? "open" : "close";
//   }
// }

// function changeDoorStatus(status: boolean) {
//   console.log('1')
//   return <T extends { new (...args: any[]): {} }>(constructor: T) => {
//     console.log('2')
//     return class extends constructor {
//       open = status;
//     };
//   };
// }

// function changeAmountOfFuel(amount: string) {
//   console.log('3')
//   return <T extends { new (...args: any[]): {} }>(constructor: T) => {
//     console.log('4')
//     return class extends constructor {
//       fuel = amount;
//     };
//   };
// }

// // function closeCar<T extends { new (...args: any[]): {} }>(constructor: T) {
// //   return class extends constructor {
// //     open = false;
// //   };
// // }

// // function addFuel<T extends { new (...args: any[]): {} }>(constructor: T) {
// //   return class extends constructor {
// //     fuel = "100%";
// //   };
// // }

// const car = new MyCar();
// console.log(car);

// car.isOpen();
// console.log("car.open", car.open);

// console.log("car.fuel", car.fuel);

// // 1 3 4 2

// --------------- lesson80 - ES декораторы из версии 5+, ES декоратор классов
// interface ICar {
//   fuel: string;
//   open: boolean;
//   freeSeats: number;
// }
// @changeDoorStatus(true)
// @changeAmountOfFuel("90%")
// class MyCar implements ICar {
//   fuel: string = "50%";
//   open: boolean = true;
//   freeSeats: number;
//   isOpen() {
//     console.log(this.fuel);
//     return this.open ? "open" : "close";
//   }
// }

// // function changeDoorStatus(status: boolean) {
// //   console.log('1')
// //   return <T extends { new (...args: any[]): {} }>(constructor: T) => {
// //     console.log('2')
// //     return class extends constructor {
// //       open = status;
// //     };
// //   };
// // }

// // function changeAmountOfFuel(amount: string) {
// //   console.log('3')
// //   return <T extends { new (...args: any[]): {} }>(constructor: T) => {
// //     console.log('4')
// //     return class extends constructor {
// //       fuel = amount;
// //     };
// //   };
// // }

// function changeDoorStatus(status: boolean) {
//   console.log("1");
//   return <T extends { new (...args: any[]): {} }>( target: T, context: ClassDecoratorContext<T>) => { //ES декораторы из версии 5+
//     console.log("2");
//     return class extends target {
//       open = status;
//     };
//   };
// }

// function changeAmountOfFuel(amount: string) {
//   console.log("3");
//   return <T extends { new (...args: any[]): {} }>( target: T, context: ClassDecoratorContext<T>) => { //ES декораторы из версии 5+
//     console.log("4");
//     return class extends target {
//       fuel = amount;
//     };
//   };
// }

// const car = new MyCar();
// console.log(car);

// car.isOpen();
// console.log("car.open", car.open);

// console.log("car.fuel", car.fuel);

// // 1 3 4 2

// --------------- lesson81 - Декораторы методов и работа с this
// interface ICar {
//   fuel: string;
//   open: boolean;
//   freeSeats: number;
// }

// class MyCar implements ICar {
//   fuel: string = "50%";
//   open: boolean = false;
//   freeSeats: number;

//  @chackAmountOfFuel2("Some text") // фабрика декоратора метода
//   @chackAmountOfFuel             //  декоратор метода
//   isOpen(value: string) {
//     console.log("this.fuel in method", this.fuel);
//     return this.open ? "open" : `close ${value}`;
//   }
// }

// function chackAmountOfFuel(
//   target: Object,
//   propertyKey: string | Symbol,
//   descriptor: PropertyDescriptor
// ) {
//   const oldValue = descriptor.value;
//   descriptor.value = function (this: any, ...args: any[]) {
//     console.log('this.fuel decorator', this.fuel);
//     return oldValue.apply(this, args);
//   };
// }

// function chackAmountOfFuel2(value: string) { // фабрика декоратора метода
//   return function (
//     target: Object,
//     propertyKey: string | symbol,
//     descriptor: PropertyDescriptor
//   ) {
//     const oldValue = descriptor.value;
//     descriptor.value = function (this: any, ...args: any[]) {
//       console.log(`Decorator argument: ${value}`);
//       console.log("Fuel in decorator:", this.fuel);
//       return oldValue.apply(this, args);
//     };
//   };
// }

// const car = new MyCar();
// console.log(car);

// console.log(car.isOpen("checked"));

// --------------- lesson82 - ES Декораторы методов версии 5.0   "experimentalDecorators": false,

// interface ICar {
//   fuel: string;
//   open: boolean;
//   freeSeats: number;
// }
// @changeDoorStatus(true)
// @changeAmountOfFuel("90%")
// class MyCar implements ICar {
//   fuel: string = "50%";
//   open: boolean = true;
//   freeSeats: number;

//   @chackAmountOfFuel
//   isOpen() {
//     console.log("this.fuel method", this.fuel);
//     return this.open ? "open" : "close";
//   }
// }

// // V1

// // function chackAmountOfFuel(target: any, context: ClassMethodDecoratorContext) {
// //   return function (this: any, ...args: any[]) {
// //     console.log("this.fuel decorator", this.fuel);
// //     return target.apply(this, args);
// //   };
// // }

// //V2 білше типізаціїї для декоратора за допомогою дженеріка

// function chackAmountOfFuel<T, A extends any[], R>(
//   target: (this: T, ...args: A) => R,
//   context: ClassMethodDecoratorContext<T, (this: T, ...args: A) => R>
// ) {
//   return function (this: any, ...args: A): R {
//     console.log("this.fuel decorator", this.fuel);
//     console.log(`Method - ${String(context.name)} was started`)
//     return target.apply(this, args);
//   };
// }

// function changeDoorStatus(status: boolean) {
//   console.log("1");
//   return <T extends { new (...args: any[]): {} }>(
//     target: T,
//     context: ClassDecoratorContext<T>
//   ) => {
//     //ES декораторы из версии 5+
//     console.log("2");
//     return class extends target {
//       open = status;
//     };
//   };
// }

// function changeAmountOfFuel(amount: string) {
//   console.log("3");
//   return <T extends { new (...args: any[]): {} }>(
//     target: T,
//     context: ClassDecoratorContext<T>
//   ) => {
//     //ES декораторы из версии 5+
//     console.log("4");
//     return class extends target {
//       fuel = amount;
//     };
//   };
// }

// const car = new MyCar();

// console.log(car.isOpen());

// --------------- lesson83 - Декораторы свойств

// interface ICar {
//   fuel: string;
//   open: boolean;
//   freeSeats: number;
// }
// @changeDoorStatus(true)
// @changeAmountOfFuel("90%")
// class MyCar implements ICar {
//   fuel: string = "50%";
//   open: boolean = true;

//   @chackNumberOfSeats(3)
//   freeSeats: number;

//   @chackAmountOfFuel
//   isOpen() {
//     console.log("this.fuel method", this.fuel);
//     return this.open ? "open" : "close";
//   }
// }

// function chackNumberOfSeats(limit: number) {
//   return function (target: Object, propertyKey: string | symbol) {
//     let value: number;

//     const getter = function () {
//       console.log("property");
//       return value;
//     };

//     const setter = function (newAmount: number) {
//       if (newAmount >= 1 && newAmount < limit) {
//         value = newAmount;
//         console.log(`Can't be more seats ${value}`);
//       } else {
//         console.log(`Can't be more seats ${limit}`);
//       }
//     };
//     Object.defineProperty(target, propertyKey, {
//       get: getter,
//       set: setter,
//     });
//   };
// }

// function chackAmountOfFuel(
//   target: Object,
//   propertyKey: string | Symbol,
//   descriptor: PropertyDescriptor
// ) {
//   const oldValue = descriptor.value;
//   descriptor.value = function (this: any, ...args: any[]) {
//     console.log("this.fuel decorator", this.fuel);
//     return oldValue.apply(this, args);
//   };
// }

// function changeDoorStatus(status: boolean) {
//   // console.log("1");
//   return <T extends { new (...args: any[]): {} }>(constructor: T) => {
//     // console.log("2");
//     return class extends constructor {
//       open = status;
//     };
//   };
// }

// function changeAmountOfFuel(amount: string) {
//   // console.log("3");
//   return <T extends { new (...args: any[]): {} }>(constructor: T) => {
//     // console.log("4");
//     return class extends constructor {
//       fuel = amount;
//     };
//   };
// }

// const car = new MyCar();

// console.log("freeSeats", car.freeSeats);

// --------------- lesson84 - Декораторы свойств ES-декораторы свойств (5+)

// interface ICar {
//   fuel: string;
//   open: boolean;
//   freeSeats: number;
// }
// @changeDoorStatus(true)
// @changeAmountOfFuel("90%")
// class MyCar implements ICar {
//   fuel: string = "50%";
//   open: boolean = true;

//   @chackNumberOfSeats(4)
//   freeSeats: number = 2;

//   @chackAmountOfFuel
//   isOpen() {
//     console.log("this.fuel method", this.fuel);
//     return this.open ? "open" : "close";
//   }
// }

// function chackNumberOfSeats(limit: number) {
//   return function (target: undefined, context: ClassFieldDecoratorContext) {
//     return function(this: any, newAmount: number) {
//       if(newAmount >= 1 && newAmount < limit) {
//         return newAmount
//       } else {
//         throw new Error('Error Can not be more seats')
//       }
//     }
//   }
// }
// // V1

// // function chackAmountOfFuel(target: any, context: ClassMethodDecoratorContext) {
// //   return function (this: any, ...args: any[]) {
// //     console.log("this.fuel decorator", this.fuel);
// //     return target.apply(this, args);
// //   };
// // }

// //V2 білше типізаціїї для декоратора за допомогою дженеріка

// function chackAmountOfFuel<T, A extends any[], R>(
//   target: (this: T, ...args: A) => R,
//   context: ClassMethodDecoratorContext<T, (this: T, ...args: A) => R>
// ) {
//   return function (this: any, ...args: A): R {
//     console.log("this.fuel decorator", this.fuel);
//     console.log(`Method - ${String(context.name)} was started`)
//     return target.apply(this, args);
//   };
// }

// function changeDoorStatus(status: boolean) {
//   console.log("1");
//   return <T extends { new (...args: any[]): {} }>(
//     target: T,
//     context: ClassDecoratorContext<T>
//   ) => {
//     //ES декораторы из версии 5+
//     console.log("2");
//     return class extends target {
//       open = status;
//     };
//   };
// }

// function changeAmountOfFuel(amount: string) {
//   console.log("3");
//   return <T extends { new (...args: any[]): {} }>(
//     target: T,
//     context: ClassDecoratorContext<T>
//   ) => {
//     //ES декораторы из версии 5+
//     console.log("4");
//     return class extends target {
//       fuel = amount;
//     };
//   };
// }

// const car = new MyCar();

// car.freeSeats = 3;

// console.log(car.freeSeats);

// --------------- lesson85 - Декораторы свойств-акцессоров (get/set)
// interface ICar {
//   fuel: string;
//   open: boolean;
//   freeSeats: number;
// }
// @changeDoorStatus(true)
// @changeAmountOfFuel("90%")
// class MyCar implements ICar {
//   fuel: string = "50%";
//   open: boolean = true;
//   _weight: number = 1000;

//   @log
//   set weight(num: number) {
//     this._weight = this._weight + num;
//   }

//   get weight() {
//     return this._weight;
//   }

//   @chackNumberOfSeats(3)
//   freeSeats: number;

//   @chackAmountOfFuel
//   isOpen() {
//     console.log("this.fuel method", this.fuel);
//     return this.open ? "open" : "close";
//   }
// }

// function log(
//   target: Object,
//   propertyKey: string | symbol,
//   descriptor: PropertyDescriptor
// ) {
//   const oldValue = descriptor.set;
//   const oldGet = descriptor.get;

//   descriptor.set = function (this: any, ...args: any) {
//     console.log('waight was changed')
//     return oldValue?.apply(this, args)
//   }
//   descriptor.get = function () {
//     console.log('waight was changed')
//     return oldGet?.apply(this)
//   }
// }

// function chackNumberOfSeats(limit: number) {
//   return function (target: Object, propertyKey: string | symbol) {
//     let value: number;

//     const getter = function () {
//       console.log("property");
//       return value;
//     };

//     const setter = function (newAmount: number) {
//       if (newAmount >= 1 && newAmount < limit) {
//         value = newAmount;
//         console.log(`Can't be more seats ${value}`);
//       } else {
//         console.log(`Can't be more seats ${limit}`);
//       }
//     };
//     Object.defineProperty(target, propertyKey, {
//       get: getter,
//       set: setter,
//     });
//   };
// }

// function chackAmountOfFuel(
//   target: Object,
//   propertyKey: string | symbol,
//   descriptor: PropertyDescriptor
// ) {
//   const oldValue = descriptor.value;
//   descriptor.value = function (this: any, ...args: any[]) {
//     console.log("this.fuel decorator", this.fuel);
//     return oldValue.apply(this, args);
//   };
// }

// function changeDoorStatus(status: boolean) {
//   // console.log("1");
//   return <T extends { new (...args: any[]): {} }>(constructor: T) => {
//     // console.log("2");
//     return class extends constructor {
//       open = status;
//     };
//   };
// }

// function changeAmountOfFuel(amount: string) {
//   // console.log("3");
//   return <T extends { new (...args: any[]): {} }>(constructor: T) => {
//     // console.log("4");
//     return class extends constructor {
//       fuel = amount;
//     };
//   };
// }

// const car = new MyCar();
// car.weight = 3

// console.log("freeSeats", car.weight);
// console.log(car._weight);

// --------------- lesson86 - ES-декораторы свойств-акцессоров (5+)
// interface ICar {
//   fuel: string;
//   open: boolean;
//   freeSeats: number;
// }
// @changeDoorStatus(true)
// @changeAmountOfFuel("90%")
// class MyCar implements ICar {
//   fuel: string = "50%";
//   open: boolean = true;
//   _weight: number = 1000;

//   @logOnSet
//   set weight(num: number) {
//     this._weight = this._weight + num;
//   }
//   @logOnGet
//   get weight() {
//     return this._weight;
//   }

//   @chackNumberOfSeats(4)
//   freeSeats: number = 2;
//   @chackAmountOfFuel
//   isOpen() {
//     console.log("this.fuel method", this.fuel);
//     return this.open ? "open" : "close";
//   }
// }

// function logOnSetV1(
//   target: (value: number) => void,
//   context: ClassSetterDecoratorContext
// ) {
//   return function (this: any, ...args: any) {
//     console.log("waight was changed setter");
//     return target.apply(this, args);
//   };
// }

// function logOnSet<T, R>(
//   target: (this: T, value: number) => R,
//   context: ClassSetterDecoratorContext<T, number>
// ) {
//   return function (this: T, ...args: any) {
//     console.log("waight was changed setter");
//     return target.apply(this, args);
//   };
// }

// function logOnGetV1(
//   target: () => number,
//   context: ClassGetterDecoratorContext
// ) {
//   return function (this: any) {
//     console.log("waight was changed getter");
//     return target.apply(this );
//   };
// }

// function logOnGet<T, R>(
//   target: (this: T) => R,
//   context: ClassGetterDecoratorContext<T, number>
// ) {
//   return function (this: T): R {
//     console.log("waight was changed getter");
//     return target.apply(this );
//   };
// }

// function chackNumberOfSeats(limit: number) {
//   return function (target: undefined, context: ClassFieldDecoratorContext) {
//     return function (this: any, newAmount: number) {
//       if (newAmount >= 1 && newAmount < limit) {
//         return newAmount;
//       } else {
//         throw new Error("Error Can not be more seats");
//       }
//     };
//   };
// }
// // V1

// // function chackAmountOfFuel(target: any, context: ClassMethodDecoratorContext) {
// //   return function (this: any, ...args: any[]) {
// //     console.log("this.fuel decorator", this.fuel);
// //     return target.apply(this, args);
// //   };
// // }

// //V2 білше типізаціїї для декоратора за допомогою дженеріка

// function chackAmountOfFuel<T, A extends any[], R>(
//   target: (this: T, ...args: A) => R,
//   context: ClassMethodDecoratorContext<T, (this: T, ...args: A) => R>
// ) {
//   return function (this: any, ...args: A): R {
//     console.log("this.fuel decorator", this.fuel);
//     console.log(`Method - ${String(context.name)} was started`);
//     return target.apply(this, args);
//   };
// }

// function changeDoorStatus(status: boolean) {
//   console.log("1");
//   return <T extends { new (...args: any[]): {} }>(
//     target: T,
//     context: ClassDecoratorContext<T>
//   ) => {
//     //ES декораторы из версии 5+
//     console.log("2");
//     return class extends target {
//       open = status;
//     };
//   };
// }

// function changeAmountOfFuel(amount: string) {
//   console.log("3");
//   return <T extends { new (...args: any[]): {} }>(
//     target: T,
//     context: ClassDecoratorContext<T>
//   ) => {
//     //ES декораторы из версии 5+
//     console.log("4");
//     return class extends target {
//       fuel = amount;
//     };
//   };
// }

// const car = new MyCar();

// car.weight = 3;

// console.log(car.weight);

// --------------- lesson87 - Декораторы параметров и метаданные

import "reflect-metadata";
const limitMetadataKey = Symbol("limit");

interface ICar {
  fuel: string;
  open: boolean;
  freeSeats: number;
}
@changeDoorStatus(true)
@changeAmountOfFuel("90%")
class MyCar implements ICar {
  fuel: string = "50%";
  open: boolean = true;
  _weight: number = 1000;

  @log
  set weight(num: number) {
    this._weight = this._weight + num;
  }

  get weight() {
    return this._weight;
  }

  @chackNumberOfSeats(3)
  freeSeats: number;

  @chackAmountOfFuel
  isOpen() {
    console.log("this.fuel method", this.fuel);
    return this.open ? "open" : "close";
  }

  @validate
  starteTravel(@limit passengers: number) {
    console.log(`Started with ${passengers} passengers`);
  }
}

function limit(
  target: Object,
  propertyKey: string | symbol,
  parameterIndex: number
) {
  let limitedParameters: number[] =
    Reflect.getOwnMetadata(limitMetadataKey, target, propertyKey) || [];
  limitedParameters.push(parameterIndex);
  Reflect.defineMetadata(
    limitMetadataKey,
    limitedParameters,
    target,
    propertyKey
  );
}

function validate(
  target: Object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
) {
  let method = descriptor.value;
  descriptor.value = function (...args: any) {
    let limitedParameters: number[] = Reflect.getOwnMetadata(
      limitMetadataKey,
      target,
      propertyKey
    );

    if (limitedParameters) {
      for (let index of limitedParameters) {
        if (args[index] > 4) {
          throw new Error("cant take more than 4 passengers");
        }
      }
    }
    return method?.apply(this, args);
  };
}

function log(
  target: Object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
) {
  const oldValue = descriptor.set;
  const oldGet = descriptor.get;

  descriptor.set = function (this: any, ...args: any) {
    console.log("waight was changed");
    return oldValue?.apply(this, args);
  };
  descriptor.get = function () {
    console.log("waight was changed");
    return oldGet?.apply(this);
  };
}

function chackNumberOfSeats(limit: number) {
  return function (target: Object, propertyKey: string | symbol) {
    let value: number;

    const getter = function () {
      console.log("property");
      return value;
    };

    const setter = function (newAmount: number) {
      if (newAmount >= 1 && newAmount < limit) {
        value = newAmount;
        console.log(`Can't be more seats ${value}`);
      } else {
        console.log(`Can't be more seats ${limit}`);
      }
    };
    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
    });
  };
}

function chackAmountOfFuel(
  target: Object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
) {
  const oldValue = descriptor.value;
  descriptor.value = function (this: any, ...args: any[]) {
    console.log("this.fuel decorator", this.fuel);
    return oldValue.apply(this, args);
  };
}

function changeDoorStatus(status: boolean) {
  // console.log("1");
  return <T extends { new (...args: any[]): {} }>(constructor: T) => {
    // console.log("2");
    return class extends constructor {
      open = status;
    };
  };
}

function changeAmountOfFuel(amount: string) {
  // console.log("3");
  return <T extends { new (...args: any[]): {} }>(constructor: T) => {
    // console.log("4");
    return class extends constructor {
      fuel = amount;
    };
  };
}

const car = new MyCar();

car.starteTravel(3)


