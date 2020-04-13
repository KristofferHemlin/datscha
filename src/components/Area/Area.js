import React, { useState } from "react";
import style from "./Area.module.css";
import { useDispatch } from "react-redux";
import { setAreaFilter } from "../../store/actions/authActions";

const Area = () => {
  const [menu, setMenu] = useState(false);
  const dispatch = useDispatch();
  const showMenu = e => {
    e.preventDefault();
    if (menu !== true) {
      setMenu(true);
      document.addEventListener("click", closeMenu);
    } else if (menu === true) {
      setMenu(false);
    }
  };
  const closeMenu = () => {
    setMenu(false);
    document.removeEventListener("click", closeMenu);
  };
  const handleAreaClick = area => {
    setMenu(false);
    dispatch(setAreaFilter(area));
  };

  return (
    <div className={style.dropdown}>
      <button onClick={showMenu} className={style.dropbtn}>
        Area
      </button>
      {menu ? (
        <div className={style.dropdownContent}>
          <button onClick={() => handleAreaClick("0-500")}>0-500</button>
          <button onClick={() => handleAreaClick("501-1000")}>501-1000</button>
          <button onClick={() => handleAreaClick("1001-2000")}>
            1001-2000
          </button>
          <button onClick={() => handleAreaClick("2001-5000")}>
            2001-5000
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Area;
