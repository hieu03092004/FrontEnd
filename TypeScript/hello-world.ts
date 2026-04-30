//Kieu number
// let a:number=10;
// let b:number=20;
// a="Le Van A";
// console.log(a);
//Kieu object
// const user:{
//     fullName:String,
//     email:String,
//     age:Number
// }={
//     fullName:"Le Van A",
//     email:"levana@gmail.com",
//     age:18
// }
// user.fullName=10;
// console.log(user);
//Interface
// interface User{
//     fullName:String,
//     email:String,
//     age?:Number,
// }
// const user1:User={
//     fullName:"Le Van A",
//     email:"levana@gmail.com",
//     age:18,
// }
// const user2:User={
//     fullName:"Le Van B",
//     email:"levanb@gmail.com",
// }
// console.log(user1);
// console.log(user2);
//Extend interface
//Typescript kieu array
// interface User{
//     fullName:String,
//     email:String,
//     age:Number,
// }
// const userList:User[]=[];
// const user1:User={
//     fullName:"LeVanA",
//     email:"LeVanA@gmail.com",
//     age:18
// }
// const user2:User={
//     fullName:"LeVanB",
//     email:"LeVanB@gmail.com",
//     age:19

// }
// userList.push(user1);
// userList.push(user2);
// console.log(userList);
// let infoUser:[string,number,boolean]=(["LeVanA",18,true]);
// console.log(infoUser);
// let clock:[number,number,number];
// clock=[7,40,20];
// const [hour,minute,second]=clock;
// console.log(`Bay gio la ${hour}`);
// interface User{
//     readonly fullName:String,
//     email:String,
//     phone:String,
// }
// const user:User={
//     fullName:"LeVanA",
//     email:"levana@gmail.com",
//     phone:"0123456789",
// }
// user.fullName="LeVanB";
// console.log(user);
//Declare functions
// function sum(a:number,b:number):number{
//     return a+b;
// }
// const result:number=sum(10,20);
// console.log(`Day la ket qua:${result}`);
//arrow function
// const sum3=(a:number=0,b:number=0):number=>{
//     return a+b;
// }
// const result3:number=sum3(10,20);
// console.log(`Day la ket qua cua arrow function:${result3}`);
// const sum=(a:number,b:number,...numbers:number[]):number=>{
//     let total=numbers.reduce((sum,item)=>sum+item,0);
//     return total;
// }
// const result:number=sum(10,20,30,40,50);
// console.log(`Day la ket qua cua ham sum:${result}`);
// enum Status{
//     INITIAL,//0,
//     ACTIVE,//1,
//     INACTIVE//2,
// }
// let statusCurrent:number=2;
// switch(statusCurrent){
//     case Status.INITIAL:
//         console.log("Dang khoi tao");
//     case Status.ACTIVE:
//         console.log("Dang hoat dong");
//     case Status.INACTIVE:
//         console.log("Dung hoat dong");
//     default:
//         break;
// }
// enum Status{
//     INITIAL="initial",
//     ACTIVE="active",
//     INACTIVE="inactive",

// }
// let statusCurrent:string="initial";
// switch(statusCurrent){
//     case Status.INITIAL:
//         console.log("Dang khoi tao");
//         break;
//     case Status.ACTIVE:
//         console.log("Dang hoat dong");
//         break;
//     case Status.INACTIVE:
//         console.log("Dung hoat dong");
//         break;
//     default:
//         break;
// }
// const getLength=(value:unknown):number=>{
//     if(typeof value === "string"){
//         return value.length;
//     }
//     return -1;
// }
// const result:number=getLength("Hello");
// console.log(result);
// const result2:number=getLength(123456);
// console.log(result2);
// const hello=(fullName:String):void=>{
//     console.log(`Hello ${fullName}`);

// }
// hello("Le Van A");
//dung generics trong typescript
// const reverseArray=<T>(array:T[]):T[]=>{
//     const newArray=array.reverse();
//     return newArray;
// }
// const test1=reverseArray([1,2,3]);
// console.log(test1);
// const test2=reverseArray(["a","b","c"]);
// console.log(test2);
// type RatingType=number| string;
// type StatusType="active"|"inactive"|"locked";
// interface Product{
//     id:String;
//     title:String;
//     price:number;
//     rating:RatingType;
//     status:StatusType;
// }
// const array1:number[]=[1,2,3];
// const array2:number[]=[4,5,6];
// const array3:number[]=[...array1,...array2];
// console.log(array3);
interface User{
    fullName:String,
    email:String,
}
let infoUser:User={
    fullName:"Le Van A",
    email:"levana@gmail.com",
}
const {fullName,email}=infoUser;
console.log(fullName);
console.log(email);
