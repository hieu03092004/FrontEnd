import { fetchApi } from "./fetchApi.js";
import { API_PRODUCT } from "./constant.js";
import { pagrams } from "./variable.js";
const products = document.querySelector("#products");
export const drawProduct = () => {
  console.log(pagrams);
  const api = `${API_PRODUCT}?q=${pagrams.q}`;
  console.log(api);
  fetchApi(api).then((data) => {
    let htmls = data.map((item) => {
      return `
            <div class="product-item">
            <div class="product-image">
                <img src="${item.thumbnail}" alt="${item.title}">
                <div class="product_percent">
                        ${item.discountPercentage}%
                </div>
            </div>
            <div class="product-content">
                <h3 class="product-title">
                    ${item.title}
                </h3>
                <div class="product-meta">
                    <div class="product-price">
                        ${item.price}
                    </div>
                    <div class="product-stock">
                        Còn lạl:  ${item.stock}
                    </div>
                </div>
                
            </div>
        </div>
            `;
    });
    products.innerHTML = htmls.join("");
  });
};
