import React, { useState } from "react";
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
      <h2 className="header">Select a topic?</h2>
      <div
        className="dropdown__container"
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="dropdown__header">
          <p className="dropdown__selectItem">{selectItem}</p>
        </div>
        <div className={`dropdown__list ${hover ? null : "dropdown__show"}`}>
          {list.map((item) => {
            return (
              <p onClick={handleClick} className="dropdown__item">
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
