import React from "react";
import Matrix from "./components/Matrix/Matrix";

function App() {
  return (
    <>
      <Matrix rows={3} cols={3} activeColor={"green"} finalColor={"orange"} />

      <Matrix rows={3} cols={4} activeColor={"blue"} finalColor={"black"} />
    </>
  );
}

export default App;
