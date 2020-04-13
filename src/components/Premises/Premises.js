import React, { useState, useEffect } from "react";
import style from "./Premises.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setPremisyFilter } from "../../store/actions/authActions";

function Premises() {
  const [menu, setMenu] = useState(false);
  const [premises, setPremises] = useState([]);
  const dispatch = useDispatch();
  const areaFilter = useSelector(state => state.areaFilter);
  const propertyList = useSelector(state => state.properties);

  useEffect(() => {
    let tempPremises = [];
    propertyList.forEach(property => {
      property.premisesTypes.forEach(premisy => {
        if (
          !tempPremises.includes(premisy.type) &&
          premisy.area >= areaFilter[0] &&
          premisy.area <= areaFilter[1]
        ) {
          tempPremises.push(premisy.type);
        }
      });
    });
    setPremises(tempPremises);
  }, [propertyList, areaFilter]);

  function showMenu(e) {
    e.preventDefault();
    if (menu !== true) {
      setMenu(true);
      document.addEventListener("click", closeMenu);
    } else if (menu === true) {
      setMenu(false);
    }
  }
  function closeMenu() {
    setMenu(false);
    document.removeEventListener("click", closeMenu);
  }
  function handlePremisyClick(premisy) {
    setMenu(false);
    dispatch(setPremisyFilter(premisy));
  }

  return (
    <div className={style.dropdown}>
      <button onClick={showMenu} className={style.dropbtn}>
        Premises
      </button>
      {menu ? (
        <div className={style.dropdownContent}>
          {premises.map((premisy, index) => (
            <button key={index} onClick={() => handlePremisyClick(premisy)}>
              {premisy}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default Premises;
