import { productActions } from "../reducers/productReducer";

function getProducts(searchQuery) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/hodooha/hnm-website-practice/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("data", data);
    dispatch(productActions.getAllProducts({ data }));
  };
}

function getProductDetail(id) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/hodooha/hnm-website-practice/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("detail data", data);
    dispatch(productActions.getSingleProduct({ data }));
  };
}

export const productAction = { getProducts, getProductDetail };
