import React, { useEffect } from "react";
import style from "./Result.module.css";
import { useSelector } from "react-redux";

const Result = () => {
  const chosenProperty = useSelector(state => state.chosenProperty);

  const calculateYearlyPremisyRent = (premisy, years) => {
    const premisyRents = {
      name: premisy.type,
      rents: []
    };
    let tempRent = premisy.rent;
    for (let i = 1; i <= years; i++) {
      switch (i) {
        case 1:
          premisyRents.rents.push(tempRent);
          break;
        case 2:
        case 3:
          tempRent *= 1.05;
          premisyRents.rents.push(tempRent);
          break;
        case 4:
          tempRent *= 1.03;
          premisyRents.rents.push(tempRent);
          break;
        default:
          tempRent *= 1.02;
          premisyRents.rents.push(tempRent);
          break;
      }
    }
    return premisyRents;
  };

  return (
    <div className={style.result}>
      {chosenProperty && (
        <h2>
          {chosenProperty.name}
          {chosenProperty.premisesTypes.map(premisy => {
            return (
              <>
                <div>{premisy.type}</div>
                <div>
                  {calculateYearlyPremisyRent(premisy, 5).rents.map(rent => {
                    return rent;
                  })}
                </div>
              </>
            );
          })}
        </h2>
      )}
    </div>
  );
};

export default Result;
