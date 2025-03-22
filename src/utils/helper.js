function getGrids(n) {
  let arr = new Array(n);

  for (let i = 0; i < arr.length; i++) {
    arr[i] = "white";
  }
  return arr;
}

function changeColor(order, setBoxes, finalColor) {
  order.forEach((idx, i) => {
    setTimeout(() => {
      setBoxes((prev) => {
        const updated = [...prev];
        updated[idx] = finalColor;
        return updated;
      });
    }, i * 500);
  });
}

export { getGrids, changeColor };
