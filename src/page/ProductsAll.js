import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductCard from "../component/ProductCard";

const ProductsAll = () => {
  const [productsList, setProductsList] = useState([]);
  const [query, setQuery] = useSearchParams()
  const getProducts = async () => {
    let searchQuery = query.get('q') || ""
    let url = `https://my-json-server.typicode.com/hodooha/hnm-website-practice/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("data", data);
    setProductsList(data);
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div>
      <Container>
        <Row>
          {productsList.map((item) => (
            <Col lg={3}>
              <ProductCard item={item}></ProductCard>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductsAll;
