import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/hodooha/hnm-website-practice/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div>
      <Container className="product-detail">
        <Row>
          <Col>
            <img src={product?.img}></img>
          </Col>
          <Col>
            <div className="product-text">
              <div className="choice">
                {product?.choice ? "Conscious choice" : ""}
              </div>
              <div>{product?.title}</div>
              <div>₩{product?.price}</div>
              <div className="new">{product?.new === true ? "신제품" : ""}</div>

              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  사이즈 선택
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">S</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">M</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">L</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <Button variant="dark" className="product-add-btn">
              추가
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;
