import React, { useState } from "react";

const DemoUseState = () => {
  // When calling useState, we will receive in back an array with 2 values inside it
  // When having initial values that need to be saved in a state, we can declare them in "()" of the useState
  // ! can create a useState quickly with useStateSnippet
  const [img, setImg] = useState({
    id: 1,
    src: "https://examples.345",
    description: "This is just a fake link",
  });
  const [number, setNumber] = useState(1);
  const [fontSize, setFontSize] = useState(16);
  return (
    <div className="container p-3">
      <h1>Demo ve useState</h1>
      <img src={`https://i.pravatar.cc/150?img=${number}`} alt="" />
      <p className="fs-4">{img.src}</p>
      <p className="fs-4">{number}</p>
      <button
        className="btn btn-dark"
        onClick={() => {
          setNumber(number + 1);
          setImg({ ...img, description: img.description + "." });
        }}
      >
        Add More
      </button>
      <h2 className="mt-5">Ví dụ về thay đổi font size</h2>
      <p style={{ fontSize }}>Tôi đang lớn dần</p>
      <button
        className="btn btn-success"
        onClick={() => {
          setFontSize(fontSize + 5);
        }}
      >
        Up Size
      </button>
    </div>
  );
};

export default DemoUseState;
