import {
    fetchApi
} from "./fetchApi.js";

import {
    API_PRODUCT
}
from "./constant.js"
import {
    param,
    products
} from "./variable.js";




export const drawProduct = () => {
    console.log(param);
    let category = "";
    if (param.category != "") {
        category = `&category=${param.category}`;
    }


    const api = `${API_PRODUCT}?q=${param.q}&_sort=${param.sort}&_order=${param.order}&_page=${param.page}&_limit=${param.limit}${category}`;


    fetchApi(api)
        .then(data => {
            let htmls = data.map(item => {
                return ` <div class="product_item">
            <div class="product_image">
                <img src = "${item.thumbnail}"alt = "${item.title}"/>
                    <div class="product_percent">
                       ${item.discountPercentage}%
                    </div>
            </div>
            <div class="product_content">
                <h3 class="product_title">${item.title} </h3>
                <div class="product_meta">
                    <div class="product_price">
                        ${item.price}$
                    </div>
                    <div class="product_stock">
                        còn lại ${item.stock}sp
                    </div>
                </div>
            </div>
        </div>
            `;
            })
            products.innerHTML = htmls.join("");
        })
}