import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [hasBorder, setHasBorder] = useState(true);

  return (
    <>
      <div
        onClick={() => setHasBorder(!hasBorder)}
        className="div1"
        style={{ border: hasBorder ? "2px solid black" : "none" }}
      >
        DIV 1
      </div>
      <div className="div2">DIV 2</div>
    </>
  );
};

export default Header;
