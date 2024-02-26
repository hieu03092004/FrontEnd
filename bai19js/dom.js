// const box = document.getElementById("box");
// box.classList.add("dark");
// console.log(box);
// const menu = document.getElementById("menu");
// console.log(menu);
// const listH2 = document.getElementsByTagName("h2");
// console.log(listH2);
// console.log(listH2[3]);
// const active = document.querySelector(".box-1 .box-2 h2 .link");
// console.log(active);
// active.classList.add("active");
// const box = document.querySelectorAll(".light");
// console.log(box);
//lay noi dung trong the html
// const h2 = document.querySelector("#h2");
// const contentH2 = h2.innerHTML;
// console.log(contentH2);
// const box = document.querySelector("#test");
// console.log(box.textContent);
const productList = document.querySelectorAll(".product-item");
let a = [];
// console.log(productList);
[...productList].forEach(item => {
    const id = item.getAttribute("data-id");
    a.push(id);
    item.setAttribute("data-category", "234");
})
// console.log(a);
// for (var i = 0; i < a.length; i++) {
//     console.log(a[i]);
// }