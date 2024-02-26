import { drawProduct } from "./drawProduct.js";
import { pagrams } from "./variable.js";
drawProduct();
//Search
const inputSearch = document.querySelector("#search input");
const buttonSearch = document.querySelector("#search button");
buttonSearch.addEventListener("click", function () {
  pagrams.q = inputSearch.value;
  drawProduct();
});
//de lay ra duoc o input

// end Search
