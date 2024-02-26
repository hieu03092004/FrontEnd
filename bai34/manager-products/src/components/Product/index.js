import Productlist from "./Productlist";
import "./Product.css";
import CreateProduct from "./createProduct";
import { useState } from "react";
function Product() {
  const [reload, setReload] = useState(false);
  const handleReload = () => {
    setReload(!reload);
  };
  return (
    <>
      <h2>Danh sách sản phẩm</h2>
      <CreateProduct onReload={handleReload} />
      <Productlist reload={reload} />
    </>
  );
}
export default Product;
