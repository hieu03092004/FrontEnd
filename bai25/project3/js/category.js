import {
    fetchApi
} from "./fetchApi.js";
const category = document.querySelector("#category");
import {
    API_CATEGORY
} from "./constant.js";
import {
    param
} from "./variable.js";
import {
    drawProduct
} from "./drawproduct.js";

fetchApi(API_CATEGORY)
    .then(data => {
        let htmls = data.map(item => {
            return ` <div class="category_item" data-category=${item}> 
                ${item}
            </div>
            `;
        })

        category.innerHTML = htmls.join("");


        const listCategory = document.querySelectorAll("#category .category_item");
        listCategory.forEach(item => {
            item.addEventListener("click", function () {
                param.category = item.getAttribute("data-category");
                console.log(param);
                drawProduct();
            })
        });
    })