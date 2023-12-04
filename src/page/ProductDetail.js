import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "../redux/actions/productAction";

const ProductDetail = () => {
  let { id } = useParams();
  let dispatch = useDispatch();
  let product = useSelector((state) => state.product.product);

  const getProductDetail = async () => {
    dispatch(productAction.getProductDetail(id));
    console.log("1단계");
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
