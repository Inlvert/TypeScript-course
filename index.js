// --------------- lesson6 - Basic types: string, number, boolean
// const isBirthday: boolean = true;
// let age: number = 40;
// const userName: string = "John";
// age = "40";
// if (isBirthday) {
//   console.log(`Congrats ${userName.toUpperCase()}, age: ${age + 1}`);
// }
// --------------- lesson7 - use types in functions
var isBirthdayData = true;
var ageData = 40;
var userNameData = "John";
function logBirMsg(isBirthday, age, userName) {
    if (isBirthday) {
        return console.log("Congrats ".concat(userName.toUpperCase(), ", age: ").concat(age + 1));
    }
    else {
        return "Error";
    }
}
var logBirMsg2 = function (isBirthday, age, userName) {
    if (isBirthday) {
        return console.log("Congrats ".concat(userName.toUpperCase(), ", age: ").concat(age + 1));
    }
    else {
        return "Error";
    }
};
logBirMsg(true, 35, "Alex");
logBirMsg(isBirthdayData, ageData, userNameData);
