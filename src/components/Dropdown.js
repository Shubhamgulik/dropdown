// importing useState hook
import React, { useState } from "react";

// importing css file
import "./Dropdown.css";

function Dropdown({ list }) {
  console.log("List", list);
  const [selectItem, setSelectItem] = useState("Select");
  const [hover, setHover] = useState();

  const handleClick = (e) => {
    console.log(e.target.innerHTML);
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
            list.map((item) => {
              return (
                <p className="dropdown__item" onClick={handleClick}>
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
