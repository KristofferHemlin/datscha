import React, { useState, useEffect } from "react";
import style from "./Properties.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setChosenProperty } from "../../store/actions/authActions";

const Properties = () => {
  const [menu, setMenu] = useState(false);
  const dispatch = useDispatch();
  const [filteredProperties, setFilteredProperties] = useState([]);
  const properties = useSelector(state => state.properties);
  const areaFilter = useSelector(state => state.areaFilter);
  const premisyFilter = useSelector(state => state.premisyFilter);

  useEffect(() => {
    const tempFilteredProperties = [];
    properties.forEach(property => {
      property.premisesTypes.forEach(premisy => {
        if (
          premisy.area >= areaFilter[0] &&
          premisy.area <= areaFilter[1] &&
          premisy.type === premisyFilter
        ) {
          tempFilteredProperties.push(property);
        }
      });
      setFilteredProperties(tempFilteredProperties);
    });
  }, [properties, areaFilter, premisyFilter]);

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
  const handlePropertyClick = property => {
    setMenu(false);
    dispatch(setChosenProperty(property));
  };

  return (
    <div className={style.dropdown}>
      <button onClick={showMenu} className={style.dropbtn}>
        Properties
      </button>
      {menu ? (
        <div className={style.dropdownContent}>
          {filteredProperties.map((property, index) => (
            <button key={index} onClick={() => handlePropertyClick(property)}>
              {property.name}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Properties;
