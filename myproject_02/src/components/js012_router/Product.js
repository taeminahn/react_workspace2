import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const Product = () => {
  const productId = useParams().productId;
  const navigate = useNavigate();
  return (
    <div>
      <h3>{productId}번 상품입니다.</h3>
      <ul>
        <li>
          <button
            onClick={() => {
              navigate(-2);
            }}
          >
            Go 2 pages back
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            Go 1 pages back
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              navigate(1);
            }}
          >
            Go 1 pages forward
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              navigate(2);
            }}
          >
            Go 2 pages forward
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Go Root
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              navigate("/", { replace: true });
            }}
          >
            Go Root
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Product;
