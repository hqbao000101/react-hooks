import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const DemoUseEffect = () => {
  const [number, setNumber] = useState(1);
  const [product, setProduct] = useState([]);
  // ! When using useEffect, we will need two parameters - a function and an array

  // ! useEffect when passing a empty array in the second parameter will present componentDidMount()
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  // ! useEffect when passing a state in the second parameter will present componentDidUpdate()
  // * useEffect componentDidUpdate() sẽ tự động chạy 1 lần sau khi render component và chạy mỗi khi giá trị state truyền vào tham số thứ hai có sự thay đổi
  useEffect(() => {
    console.log("Number Changed");
  }, [number]);

  const getAllProduct = async () => {
    const res = await axios({
      method: "get",
      url: "https://shop.cyberlearn.vn/api/Product",
    });
    setProduct(res.data.content);
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <div>
      <p className="fs-3">{number}</p>
      <button
        className="btn btn-dark"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        Add Number
      </button>
      <div className="container">
        <h2>Cửa Hàng Giày</h2>
        <div className="row my-3">
          {product.map((item, index) => {
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
      </div>
    </div>
  );
};

export default DemoUseEffect;
