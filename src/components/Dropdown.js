// importing useState hook
import React, { useState } from "react";

// importing css file
import "./Dropdown.css";

function Dropdown({ list }) {
  const [selectItem, setSelectItem] = useState("Select");
  const [hover, setHover] = useState();

  const handleClick = (e) => {
    setSelectItem(e.target.innerHTML);
    setHover(false);
  };

  return (
    <div className="dropdown">
      <h2 className="header">Select language?</h2>
      <div className="dropdown__container" onMouseLeave={() => setHover(false)}>
        <div className="dropdown__header" onMouseOver={() => setHover(true)}>
          <p className="dropdown__selectItem">{selectItem}</p>
        </div>
        <div className="dropdown__list">
          {hover &&
            list.map((item, index) => {
              return (
                <p className="dropdown__item" onClick={handleClick} key={index}>
                  {item}
                </p>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
