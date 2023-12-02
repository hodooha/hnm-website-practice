import React from "react";
import { Navigate } from "react-router-dom";
import ProductDetail from "../page/ProductDetail";

const PrivateRoute = ({ authenticate }) => {
  return authenticate === true ? (
    <ProductDetail></ProductDetail>
  ) : (
    <Navigate to="/login"></Navigate>
  );
};

export default PrivateRoute;
