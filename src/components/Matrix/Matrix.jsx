import React, { useState, useEffect } from "react";
import { getGrids, changeColor } from "../../utils/helper";
import Box from "../Box/Box";
import "./Matrix.css";

export default function Matrix({
  rows = 1,
  cols = 1,
  activeColor = "green",
  finalColor = "orange",
}) {
  let totalGrids = rows * cols;
  const [boxes, setBoxes] = useState(getGrids(totalGrids));
  const [clickOrder, setClickOrder] = useState([]);

  useEffect(() => {
    setBoxes(getGrids(totalGrids));
    setClickOrder([]);
  }, [rows, cols]);

  const handleClick = (index) => {
    if (boxes[index] !== "white") return;

    setBoxes((prev) => {
      const updated = [...prev];
      updated[index] = activeColor;
      return updated;
    });

    setClickOrder((prev) => [...prev, index]);

    if (clickOrder.length + 1 === totalGrids) {
      changeColor([...clickOrder, index], setBoxes, finalColor);
    }
  };

  return (
    <div className="layout">
      <h1>
        Matrix of {rows} x {cols}
      </h1>
      <div
        className="matrix"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, 100px)`,
          gap: "5px",
        }}
      >
        {boxes.map((color, index) => (
          <Box key={index} color={color} onClick={() => handleClick(index)} />
        ))}
      </div>
    </div>
  );
}
