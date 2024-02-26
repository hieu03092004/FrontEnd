// vidu1:
// var a = 10;
// var promise = new Promise((resolve, reject) => {
//     if (a !== undefined && a !== null && a !== " ")
//         resolve(a);
//     else
//         reject(a);
//     //thanh cong
// });
// promise
//     .then((success) => {
//         console.log(success);
//     })
//     .catch((err) => {
//         console.log("Loi", err);
//     })
//     .finally(() => {
//         console.log("Luon vao day");
//     })



//vi du 2
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve();
//     }, 3000)
// });

// console.log(promise);

// setTimeout(() => {
//     console.log("Sau 1 giay", promise);
// }, 1000);

// setTimeout(() => {
//     console.log("sau 2 giay", promise);
// }, 2000)

// setTimeout(() => {
//     console.log("sau 3 giay", promise);
// }, 3000)

//vd3