// const sum = (a = 0, b = 0) => {
//     return a + b;
// }

// console.log(sum());

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const array3 = [...array1, ...array2];
// console.log(array3);

let infoUser = {
    fullNameL: "nguyenvana",
    email: "nguyena@gmai.com"
};

let infoUpdate = {
    phone: "123456",
    age: 18
}

let infoFinal = {
    ...infoUser,
    ...infoUpdate
}
console.log(infoFinal);