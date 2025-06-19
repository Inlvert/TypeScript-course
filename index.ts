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

let id: symbol = Symbol("id");

const data = {
  [id]: 1,
};

console.log(data);

const num1: bigint = 1n;

const num2: bigint = 2n;

console.log(num1 + num2);

