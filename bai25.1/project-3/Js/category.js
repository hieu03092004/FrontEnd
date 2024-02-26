import { fetchApi } from "./fetchApi.js";
import { API_CATEGORY } from "./constant.js";
const category = document.querySelector("#category");
fetchApi(API_CATEGORY).then((data) => {
  let htmls = data.map((item) => {
    return `
     <div class="category-item">
        ${item}
     </div>
    `;
  });
  category.innerHTML = htmls.join("");
});
