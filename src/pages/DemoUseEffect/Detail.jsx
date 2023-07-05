import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  // ! navigate
  const navigate = useNavigate();

  const getProductDetail = async () => {
    const res = await axios({
      method: "get",
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${params.id}`,
    });
    setProduct(res.data.content);
  };

  useEffect(() => {
    getProductDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  // ! componentWillUnmount() --> return
  useEffect(() => {
    return () => {
      console.log("Im leaving the detail page...");
    };
  }, []);

  return (
    <div className="container my-5 text-center">
      <h1>Detail</h1>
      <img src={product.image} alt="" />
      <h3>{product.name}</h3>
      <p>${product.price}.00</p>
      <p>
        <span className="fw-bold">Brief Description:</span>{" "}
        {product.description}
      </p>
      <h4 className="mt-5 text-primary fw-bolder">Related Products</h4>
      <div className="row my-3">
        {product.relatedProducts?.map((item, index) => {
          return (
            <div className="col-4 mt-5 text-center" key={index}>
              <img src={item.image} alt="" width={300} />
              <p>{item.name}</p>
              <p>{item.price}</p>
              <NavLink className="btn btn-dark" to={`/shoes/${item.id}`}>
                Chi Tiết
              </NavLink>
            </div>
          );
        })}
      </div>
      <button
        className="btn btn-success"
        onClick={() => {
          navigate("/");
        }}
      >
        Back to Home
      </button>
    </div>
  );
};

export default Detail;
