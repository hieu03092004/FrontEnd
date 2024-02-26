import { fetchApi } from "./fetchApi.js";
fetchApi("http://localhost:3000/products").then((data) => {
  let htmls = "";
  data.forEach((item) => {
    htmls += `<div class="product-item">
                             <img src="${item.thumbnail}" alt="${item.title}" />
                             <h3>${item.title}</h3>
                             <p>${item.price}</p>
                       </div>`;
  });
  const divProduct = document.querySelector("#products");
  divProduct.innerHTML = htmls;
});
