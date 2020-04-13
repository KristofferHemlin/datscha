import React, { useState } from "react";
import Area from "../Area/Area";
import Premises from "../Premises/Premises";
import Properties from "../Properties/Properties";
import { useSelector } from "react-redux";

const Dropdown = () => {
  const areaFilter = useSelector(state => state.areaFilter);
  const premisyFilter = useSelector(state => state.premisyFilter);
  return (
    <div>
      <Area />
      {areaFilter && <Premises />}
      {areaFilter && premisyFilter && <Properties />}
    </div>
  );
};

export default Dropdown;
