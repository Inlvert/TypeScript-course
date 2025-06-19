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

let salary; //any

const userData = '{"isBirthdayData": true, "ageData": 40, "userNameData": "John"}'

// const userObj = JSON.parse(userData) //any

const userObj: {isBirthdayData: boolean, ageData: number, userNameData: string} = JSON.parse(userData)

console.log(userObj)

const {isBirthdayData, ageData, userNameData} = userObj

const logBirMsg2 = (isBirthday: boolean, age: number, userName: string): void | string => {
  if (isBirthday) {
    return console.log(`Congrats ${userName.toUpperCase()}, age: ${age + 1}`);
  } else {
    return "Error"
  }
}

