import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(`/products/${item.id}`);
  };

  return (
    <div className="product-card" onClick={goToDetail}>
      <img className="product-img" src={item?.img}></img>
      <div className="choice">{item?.choice ? "Conscious choice" : ""}</div>
      <div>{item?.title}</div>
      <div>₩{item?.price}</div>
      <div className="new">{item?.new === true ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard;
