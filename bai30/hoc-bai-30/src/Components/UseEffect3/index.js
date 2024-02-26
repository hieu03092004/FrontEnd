import { useEffect, useState } from "react";
import "./product.scss";
function UseEffect3() {
  const limit = 10;
  const [data, setData] = useState([]);
  const [pageActive, setPageActive] = useState(0);
  const [quantityPage, setQuantityPage] = useState(0);
  useEffect(() => {
    fetch(
      `https://dummyjson.com/products?skip=${limit * pageActive}&limit=${limit}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.products);
        setQuantityPage(Math.ceil(data.total / limit));
      });
  }, [pageActive]);
  const handleClickPagi = (e) => {
    console.log(e);
    setPageActive(e);
  };

  console.log([...Array(quantityPage)]);

  return (
    <>
      <div className="product__list">
        {data.map((item) => (
          <div className="product__item" key={item.id}>
            <div className="product__image">
              <img src={item.thumbnail} alt={item.title} />
            </div>
            <h3 className="product__title">{item.title}</h3>
            <div className="product__price">{item.price}$</div>
          </div>
        ))}
      </div>

      <ul className="pagination">
        {[...Array(quantityPage)].map((_, index) => (
          <li
            key={index}
            onClick={() => {
              handleClickPagi(index);
            }}
          >
            {index + 1}
          </li>
        ))}
      </ul>
    </>
  );
}
export default UseEffect3;
