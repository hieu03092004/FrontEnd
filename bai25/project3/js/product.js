import {
    drawProduct
} from "./drawproduct.js";
import {
    buttonSearch,
    filter,
    inputSearch,
    pagiNext,
    pagiNumber,
    pagiPrev,
    param
} from "./variable.js";
drawProduct();



const search = () => {
    param.q = inputSearch.value;
    drawProduct();
}

buttonSearch.addEventListener("click", function () {
    search();
});


inputSearch.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        search();
    }
});
//filter

filter.addEventListener("change", function (e) {
    console.log(e.target.value);
    switch (e.target.value) {
        case "mac-dinh":
            param.sort = "";
            param.order = "";
            break;
        case "gia-thap-den-cao":
            param.sort = "price";
            param.order = "asc";
            break;
        case "gia-cao-den-thap":
            param.sort = "price";
            param.order = "desc";
            break;
        case "giam-gia-nhieu":
            param.sort = "discountPercentage";
            param.order = "desc";
            break;
        default:
            break;
    }
    drawProduct();
});
//end filter


//pagination

pagiNext.addEventListener("click", function () {
    param.page = param.page + 1;
    pagiNumber.innerHTML = param.page;
    drawProduct();
});
pagiPrev.addEventListener("click", function () {
    if (param.page > 1) {
        param.page = param.page - 1;
        pagiNumber.innerHTML = param.page;
        drawProduct();
    }
});
// end pagination