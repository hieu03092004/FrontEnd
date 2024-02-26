import { fetchApi } from "./fetchApi.js";
//get Category
fetchApi("http://localhost:3000/categories").then((data) => {
  let htmls = "";
  data.forEach((item) => {
    htmls += `
         <div class="category-item">${item}</div>
        `;
  });
  const divCategory = document.querySelector("#category");
  divCategory.innerHTML = htmls;
});
//End Get Category

//get Products

fetchApi("http://localhost:3000/products").then((data) => {
  let htmls = "";
  data.forEach((item) => {
    htmls += `
         <div class="product-item">
            <img src=${item.thumbnail} alt="">
            <h3>${item.title}</h3>
            <p>${item.price}</p>
        </div>
        `;
  });
  const divProductList = document.querySelector("#product-list");
  divProductList.innerHTML = htmls;
});
//end Products
