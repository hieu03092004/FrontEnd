const input = document.querySelector("input");
const buttonSend = document.querySelector("#send");
const buttonClear = document.querySelector("#clear");
const buttonUp = document.querySelector("#up");
const resultDiv = document.querySelector("#result");
const buttonClearAll = document.querySelector("#clearAll");
buttonSend.addEventListener("click", () => {
    const name = input.name;
    const value = input.value;
    if (value) {
        localStorage.setItem(name, value);
        const email = localStorage.getItem("email");
        resultDiv.innerHTML = email;
    }
});
buttonClear.addEventListener("click", () => {
    localStorage.removeItem("email");
    resultDiv.innerHTML = "";
});
let count = 0;
buttonUp.addEventListener("click", () => {
    localStorage.setItem(`key${count}`, `value${count}`);
    count++;
});
buttonClearAll.addEventListener("click", () => {
    localStorage.clear();
});

sessionStorage.setItem("token", "shshshhs");


// const info = () => {
//     let fullName = "nguyenvana";
//     const getFullName = () => {
//         return fullName;
//     }
//     const setFullName = (string) => {
//         fullName = string;
//     }
//     return {
//         get: getFullName,
//         set: setFullName
//     };

// }
// const infoUser = info();
// console.log(infoUser);
// console.log(infoUser.get());
// infoUser.set("nam dang");
// console.log(infoUser.get());
const a = 10;
const b = 20;
const c = a + b;
const string = `Kết quả của ${a} + ${b}=${c}`;
console.log(string);